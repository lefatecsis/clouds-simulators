'use strict';

/* ── Utilitários ─────────────────────────────────────────────── */
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function countCorrect(q)  { return q.options.filter(o => o.correct).length; }

function isComplete(q, sel) {
    if (!sel || !sel.length) return false;
    const n = countCorrect(q);
    return sel.length === n && sel.every(i => q.options[i].correct);
}

/* ── LocalStorage ────────────────────────────────────────────── */
function saveLS() {
    const k = cfg.storageKey;
    localStorage.setItem(k + '_questions',    JSON.stringify(questions));
    localStorage.setItem(k + '_answers',      JSON.stringify(answers));
    localStorage.setItem(k + '_currentIndex', String(currentIndex));
}

function limparProgressoLocal() {
    const k = cfg.storageKey;
    localStorage.removeItem(k + '_questions');
    localStorage.removeItem(k + '_answers');
    localStorage.removeItem(k + '_currentIndex');
}

/* ── Carregar questões via fetch (isola o const do arquivo) ──── */
function carregarScriptSimulado() {
    const sim = cfg.simulados.find(s => s.file === activeFile) || cfg.simulados[0];
    document.getElementById('simulado-title-display').textContent = sim.label;

    fetch(activeFile)
        .then(r => { if (!r.ok) throw new Error(); return r.text(); })
        .then(code => {
            // eslint-disable-next-line no-new-func
            window._loadedQuestions = new Function(`${code}; return originalQuestions;`)();
            inicializarSimulado();
        })
        .catch(() => {
            document.getElementById('carousel-inner').innerHTML =
                `<div class="alert alert-danger m-4">
                   <i class="fas fa-exclamation-triangle me-2"></i>
                   Erro ao carregar <strong>${activeFile}</strong>.
                 </div>`;
        });
}

/* ── Inicialização ───────────────────────────────────────────── */
function inicializarSimulado() {
    const k  = cfg.storageKey;
    const sq = localStorage.getItem(k + '_questions');
    const sa = localStorage.getItem(k + '_answers');
    const si = localStorage.getItem(k + '_currentIndex');

    if (sq && sa && si !== null) {
        try {
            questions    = JSON.parse(sq);
            answers      = JSON.parse(sa);
            currentIndex = parseInt(si, 10);
            provaPending = new Array(questions.length).fill(null);
            renderizarEIniciar(); return;
        } catch(e) { limparProgressoLocal(); }
    }

    if (!Array.isArray(window._loadedQuestions)) {
        document.getElementById('carousel-inner').innerHTML =
            `<div class="alert alert-danger m-4">Arquivo de questões inválido.</div>`;
        return;
    }

    questions = JSON.parse(JSON.stringify(window._loadedQuestions));
    shuffleArray(questions);

    questions.forEach(q => {
        const combined = q.options.map((opt, i) => ({
            text: opt.text, correct: opt.correct,
            explanation: q.explanations[i]?.text || ''
        }));
        shuffleArray(combined);
        q.options      = combined.map((c, i) => ({ letter: String.fromCharCode(65+i), text: c.text, correct: c.correct }));
        q.explanations = combined.map(c => ({ correct: c.correct, text: c.explanation }));
    });

    answers      = new Array(questions.length).fill(null);
    provaPending = new Array(questions.length).fill(null);
    currentIndex = 0;
    saveLS();
    renderizarEIniciar();
}

/* ── Renderização ────────────────────────────────────────────── */
function renderizarEIniciar() {
    document.getElementById('total-q-display').textContent = questions.length;
    createCarouselItems();
    applyModeUI();

    const el = document.getElementById('quizCarousel');
    if (carousel) { try { carousel.dispose(); } catch(e){} }
    carousel = new bootstrap.Carousel(el, { wrap: false, keyboard: false });

    el.addEventListener('slid.bs.carousel', e => {
        currentIndex = e.to;
        saveLS();
        updateProgress();
        document.getElementById('quiz-screen').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    carousel.to(currentIndex);
    updateProgress();
}

function createCarouselItems() {
    const inner = document.getElementById('carousel-inner');
    inner.innerHTML = '';
    const badgeColor = cfg.theme === 'azure'
        ? `background:${cfg.primary};color:#fff;`
        : `background:${cfg.primary};color:#111;`;

    questions.forEach((q, idx) => {
        const sel     = answers[idx];
        const pending = provaPending[idx];
        const answered = sel !== null;
        const nCorr   = countCorrect(q);
        const multi   = nCorr > 1;
        const isProva = quizMode === 'prova';

        let optsHTML = '';
        q.options.forEach((opt, oi) => {
            let cls = '', chk = '';
            if (answered && !isProva) {
                const was = sel.includes(oi);
                cls = opt.correct ? 'selected-correct disabled' : was ? 'selected-wrong disabled' : 'disabled';
            } else if (isProva && pending && pending.includes(oi)) {
                cls = 'option-selected-prova';
            }
            if (multi) {
                const checked = isProva ? (pending && pending.includes(oi)) : (answered && sel.includes(oi));
                chk = `<input type="checkbox" class="option-checkbox me-3 mt-1 flex-shrink-0"
                           style="pointer-events:none" ${(answered && !isProva) ? 'disabled' : ''}
                           ${checked ? 'checked' : ''}>`;
            }
            optsHTML += `<div class="option ${cls}" onclick="selectOption(${idx},${oi},this)">
                <div class="d-flex align-items-start">
                    ${chk}
                    <span class="me-2 mt-1 fw-bold text-muted flex-shrink-0">${opt.letter}.</span>
                    <span>${opt.text}</span>
                </div>
            </div>`;
        });

        const hint = multi
            ? `<div class="alert alert-info py-2 px-3 mb-3 small">
                   <i class="fas fa-info-circle me-1"></i>
                   Selecione <strong>${nCorr} alternativas</strong>${isProva ? '.' : ' e clique em Confirmar.'}
               </div>` : '';

        const confirmBtn = (multi && !answered && !isProva)
            ? `<button id="confirm-btn-${idx}" class="btn btn-primary mt-3 w-100 disabled"
                   onclick="confirmarMultipla(${idx})" disabled>
                   <i class="fas fa-check me-2"></i>Confirmar
                   (<span id="confirm-count-${idx}">0</span>/${nCorr})
               </button>` : '';

        const item = document.createElement('div');
        item.className = `carousel-item${idx === currentIndex ? ' active' : ''}`;
        item.innerHTML = `
            <div class="d-flex justify-content-between align-items-center mb-2 flex-wrap gap-2">
                <span class="badge rounded-pill" style="${badgeColor}">Questão ${idx+1}</span>
                ${q.domain ? `<span class="badge rounded-pill bg-secondary">${q.domain}</span>` : ''}
                <span class="text-muted small ms-auto" id="q-pct-${idx}">0% concluído</span>
            </div>
            <h5 class="question-text mb-3">${q.prompt}</h5>
            ${hint}
            <div class="options-container">${optsHTML}</div>
            ${confirmBtn}
            <div class="feedback-placeholder mt-3">${(answered && !isProva) ? buildFeedbackHTML(q, sel) : ''}</div>`;
        inner.appendChild(item);
    });
}

/* ── Feedback ────────────────────────────────────────────────── */
function buildFeedbackHTML(q, sel) {
    const ok  = isComplete(q, sel);
    const n   = countCorrect(q);
    const lbl = n > 1
        ? (ok ? 'Você acertou todas as alternativas!' : 'Você não acertou todas as alternativas corretas')
        : (ok ? 'Você acertou!' : 'Você errou essa questão');

    const expItems = q.options.map((opt, i) => `
        <div class="explanation-item">
            <span class="badge ${opt.correct ? 'bg-success' : 'bg-secondary'} mb-2">
                ${opt.correct ? 'Alternativa Correta' : 'Alternativa Incorreta'}
            </span>
            <p class="mb-1"><strong>${opt.letter}. ${opt.text}</strong></p>
            <p class="text-muted small mb-0">${q.explanations[i]?.text || ''}</p>
        </div>`).join('');

    const section = (items, icon, color, label) => items?.length
        ? `<div class="mt-3"><h6 class="fw-bold mb-2"><i class="fas ${icon} me-2 ${color}"></i>${label}</h6>
           <ul class="small text-muted mb-0">${items.map(t=>`<li class="mb-1">${t}</li>`).join('')}</ul></div>` : '';

    return `<div class="feedback-box">
        <div class="feedback-header ${ok ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'}">
            <i class="fas ${ok ? 'fa-check-circle' : 'fa-times-circle'} me-2"></i>${lbl}
        </div>
        <div class="feedback-body">
            <h6 class="fw-bold mb-3"><i class="fas fa-tasks me-2"></i>Justificativa das Alternativas:</h6>
            ${expItems}
            ${section(q.glossary,          'fa-book',     'text-info',    'Glossário')}
            ${section(q.generalExplanation,'fa-lightbulb','text-warning', 'Explicação Geral')}
            ${section(q.realWorld,         'fa-globe',    'text-success', 'No Mundo Real')}
        </div>
    </div>`;
}

/* ── Interação com opções ────────────────────────────────────── */
function syncMultiUI(container, sel, limit, mode) {
    container.querySelectorAll('.option').forEach((opt, i) => {
        const isSel = sel.includes(i);
        const cb = opt.querySelector('.option-checkbox');
        opt.classList.toggle(mode === 'prova' ? 'option-selected-prova' : 'option-pending', isSel);
        opt.classList.remove(mode === 'prova' ? 'option-pending' : 'option-selected-prova');
        const atLimit = sel.length >= limit;
        opt.style.pointerEvents = (!isSel && atLimit) ? 'none' : '';
        opt.style.opacity       = (!isSel && atLimit) ? '0.45' : '';
        if (cb) cb.checked = isSel;
    });
}

function selectOption(qIdx, oIdx, el) {
    const q     = questions[qIdx];
    const n     = countCorrect(q);
    const multi = n > 1;
    const prova = quizMode === 'prova';
    if (!prova && answers[qIdx] !== null) return;
    const container = el.closest('.options-container');

    if (prova) {
        if (!provaPending[qIdx]) provaPending[qIdx] = [];
        if (multi) {
            const has = provaPending[qIdx].includes(oIdx);
            provaPending[qIdx] = has
                ? provaPending[qIdx].filter(i => i !== oIdx)
                : provaPending[qIdx].length < n ? [...provaPending[qIdx], oIdx] : provaPending[qIdx];
            syncMultiUI(container, provaPending[qIdx], n, 'prova');
        } else {
            provaPending[qIdx] = provaPending[qIdx].includes(oIdx) ? [] : [oIdx];
            container.querySelectorAll('.option').forEach((o, i) =>
                o.classList.toggle('option-selected-prova', i === oIdx));
        }
    } else {
        if (multi) {
            if (!container._p) container._p = [];
            const has = container._p.includes(oIdx);
            container._p = has
                ? container._p.filter(i => i !== oIdx)
                : container._p.length < n ? [...container._p, oIdx] : container._p;
            syncMultiUI(container, container._p, n, 'teste');
            const btn  = document.getElementById(`confirm-btn-${qIdx}`);
            const span = document.getElementById(`confirm-count-${qIdx}`);
            if (btn && span) {
                span.textContent = container._p.length;
                const ready = container._p.length === n;
                btn.disabled = !ready;
                btn.classList.toggle('disabled', !ready);
            }
        } else {
            commitAnswer(qIdx, [oIdx], container);
        }
    }
}

function confirmarMultipla(qIdx) {
    const container = document.querySelector(
        `#quizCarousel .carousel-item:nth-child(${qIdx+1}) .options-container`
    );
    if (!container) return;
    const sel = container._p || [];
    if (sel.length !== countCorrect(questions[qIdx])) return;
    document.getElementById(`confirm-btn-${qIdx}`)?.remove();
    commitAnswer(qIdx, [...sel], container);
}

function commitAnswer(qIdx, sel, container) {
    const q = questions[qIdx];
    answers[qIdx] = sel;
    saveLS();
    container.querySelectorAll('.option').forEach((opt, i) => {
        opt.classList.remove('option-pending', 'option-selected-prova');
        opt.classList.add('disabled');
        if (q.options[i].correct) opt.classList.add('selected-correct');
        else if (sel.includes(i)) opt.classList.add('selected-wrong');
    });
    container.closest('.carousel-item').querySelector('.feedback-placeholder').innerHTML =
        buildFeedbackHTML(q, sel);
    updateProgress();
}

/* ── Progresso ───────────────────────────────────────────────── */
function updateProgress() {
    if (!questions.length) return;
    const prova = quizMode === 'prova';
    const done  = prova
        ? provaPending.filter((p,i) => p && p.length === countCorrect(questions[i])).length
        : answers.filter(a => a !== null).length;

    document.getElementById('progress-bar').style.width = `${Math.round(done/questions.length*100)}%`;
    document.getElementById('current-q').textContent    = currentIndex + 1;

    const pct = Math.round(done/questions.length*100);
    questions.forEach((_,i) => {
        const el = document.getElementById(`q-pct-${i}`);
        if (el) el.textContent = `${pct}% concluído`;
    });

    const scoreEl = document.getElementById('score-header');
    if (prova) {
        scoreEl.textContent = `${done}/${questions.length}`;
        scoreEl.className   = 'fw-bold fs-5 text-muted';
    } else {
        const score = answers.filter((a,i) => a !== null && isComplete(questions[i],a)).length;
        scoreEl.textContent = `${score}/${questions.length}`;
        scoreEl.className   = `fw-bold fs-5 ${score/questions.length >= .7 ? 'text-success' : 'text-danger'}`;
    }
}

/* ── Modo Teste / Prova ──────────────────────────────────────── */
function toggleMode() {
    quizMode = quizMode === 'teste' ? 'prova' : 'teste';
    localStorage.setItem(cfg.storageKey + '_mode', quizMode);
    applyModeUI();
    resetAndRestart();
}

function applyModeUI() {
    const prova = quizMode === 'prova';
    document.getElementById('modeToggle').classList.toggle('mode-prova', prova);
    document.getElementById('modeSlider').style.transform = prova ? 'translateX(calc(100% + 2px))' : 'translateX(0)';
    document.getElementById('mode-label-teste').classList.toggle('mode-label-inactive', prova);
    document.getElementById('mode-label-prova').classList.toggle('mode-label-inactive', !prova);
}

/* ── Navegação ───────────────────────────────────────────────── */
function nextQuestion() {
    if (currentIndex < questions.length - 1) { currentIndex++; saveLS(); carousel.to(currentIndex); }
}
function prevQuestion() {
    if (currentIndex > 0) { currentIndex--; saveLS(); carousel.to(currentIndex); }
}

/* ── Reiniciar ───────────────────────────────────────────────── */
function resetAndRestart() {
    Swal.fire({
        title: 'Reiniciar simulado?', text: 'Todo o seu progresso será perdido.',
        icon: 'warning', showCancelButton: true,
        confirmButtonText: 'Reiniciar', cancelButtonText: 'Cancelar',
        confirmButtonColor: cfg.primary, cancelButtonColor: '#6c757d',
    }).then(r => {
        if (!r.isConfirmed) return;
        limparProgressoLocal();
        questions = []; answers = []; provaPending = []; currentIndex = 0;
        if (carousel) { try { carousel.dispose(); } catch(e){} carousel = null; }
        carregarScriptSimulado();
    });
}

/* ── Finalizar ───────────────────────────────────────────────── */
function finalizarTeste() {
    if (!questions.length) return;
    if (quizMode === 'prova') {
        const done  = provaPending.filter((p,i) => p && p.length === countCorrect(questions[i])).length;
        const falta = questions.length - done;
        Swal.fire({
            title: 'Finalizar Prova?',
            html:  falta > 0
                ? `Respondeu <strong>${done}</strong> de <strong>${questions.length}</strong>. Faltam <strong>${falta}</strong>.`
                : `Respondeu todas as <strong>${questions.length}</strong> questões.`,
            icon: falta > 0 ? 'warning' : 'question',
            showCancelButton: true, confirmButtonText: 'Ver gabarito',
            cancelButtonText: 'Continuar', confirmButtonColor: cfg.primary,
            cancelButtonColor: '#6c757d', reverseButtons: true,
        }).then(r => { if (r.isConfirmed) abrirRevisao(); });
        return;
    }
    abrirRevisao();
}
