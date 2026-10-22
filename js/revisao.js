'use strict';

/* ── Revisão (abre em nova aba) ──────────────────────────────── */
function abrirRevisao() {
    const eff   = quizMode === 'prova'
        ? provaPending.map(p => (p && p.length) ? p : null)
        : answers;
    const score = eff.filter((a,i) => a && isComplete(questions[i],a)).length;
    const total = questions.length;
    const pct   = ((score/total)*100).toFixed(1);
    const title = document.getElementById('simulado-title-display').textContent;
    const ok    = parseFloat(pct) >= 70;

    const logoH = cfg.theme === 'azure'
        ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.242 47.271" width="52" height="42" style="margin-bottom:.5rem">
               <path d="M28.396 0L11.91 14.982 0 41.27h10.803L28.396 0z" fill="#fff"/>
               <path d="M31.25 3.75L18.942 38.857l23.486 2.97-12.24-16.818L31.25 3.75z" fill="rgba(255,255,255,.8)"/>
               <path d="M18.942 38.857L10.803 47.27h37.805L42.428 41.826l-23.486-2.969z" fill="rgba(255,255,255,.6)"/>
           </svg>`
        : `<i class="fab fa-aws fa-3x text-warning mb-2"></i>`;

    const css = `
      body{background:#f4f6f9;font-family:'Segoe UI',sans-serif;padding-bottom:5rem;}
      .rh{background:linear-gradient(135deg,${cfg.dark},${cfg.primary});color:#fff;padding:2rem;border-radius:12px;margin-bottom:1.5rem;}
      .qc{background:#fff;border-radius:12px;padding:1.5rem;box-shadow:0 2px 8px rgba(0,0,0,.08);border-left:5px solid #dee2e6;margin-bottom:1.25rem;}
      .qc.ok{border-left-color:#198754;} .qc.err{border-left-color:#dc3545;} .qc.sem{border-left-color:#6c757d;}
      .opt{padding:.5rem .75rem;border-radius:8px;margin-bottom:.4rem;font-size:.9rem;}
      .oc{background:#d1e7dd;color:#0f5132;} .ow{background:#f8d7da;color:#842029;} .on{background:#f8f9fa;color:#495057;}
      .st{font-size:.82rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;margin:1rem 0 .4rem;}
      .st.gl{color:#0dcaf0;} .st.ge{color:#ffc107;} .st.rw{color:#198754;}
      .fl{padding-left:1.2rem;font-size:.85rem;color:#555;}
      .ei{background:#f8f9fa;border-radius:8px;padding:.6rem .9rem;margin-bottom:.5rem;font-size:.85rem;}
      .sb{margin:2px;min-width:38px;border-radius:6px!important;}
      .sb.aq{outline:3px solid ${cfg.primary};outline-offset:2px;}
      .bf{position:fixed;top:50%;transform:translateY(-50%);z-index:1030;border-radius:50px!important;font-weight:600;padding:.6rem 1.5rem;box-shadow:0 4px 16px rgba(0,0,0,.18);display:inline-flex;align-items:center;gap:.4rem;}
      .bfp{left:1rem;} .bfn{right:1rem;}
      .bfb{position:fixed;bottom:1.5rem;right:1.5rem;top:unset;transform:none;background:${cfg.primary};border:none;color:${cfg.theme==='azure'?'#fff':'#111'};}
      @media(max-width:576px){.bf{padding:.5rem .9rem;} .bfl{display:none;}}
      @media print{.np{display:none!important;} body{background:#fff;} .qc{display:block!important;}}`;

    function buildCard(q, i, sel) {
        const a = sel && isComplete(q, sel);
        const s = sel === null;
        const opH = q.options.map((o, oi) => {
            const ws = sel && sel.includes(oi);
            const cl = o.correct ? 'oc' : ws ? 'ow' : 'on';
            const ic = o.correct ? '✓' : ws ? '✗' : '';
            return `<div class="opt ${cl}">${ic ? `<strong>${ic}</strong> ` : ''}${o.letter}. ${o.text}</div>`;
        }).join('');
        const exH = q.options.map((o, oi) => {
            const t = q.explanations[oi]?.text; if (!t) return '';
            return `<div class="ei"><span class="badge ${o.correct?'bg-success':'bg-secondary'} me-2">${o.correct?'Correta':'Incorreta'}</span><strong>${o.letter}.</strong> ${t}</div>`;
        }).join('');
        const glH = q.glossary?.length
            ? `<div class="st gl"><i class="fas fa-book me-1"></i>Glossário</div><ul class="fl">${q.glossary.map(g=>`<li>${g}</li>`).join('')}</ul>` : '';
        const geH = q.generalExplanation?.length
            ? `<div class="st ge"><i class="fas fa-lightbulb me-1"></i>Explicação Geral</div><ul class="fl">${q.generalExplanation.map(g=>`<li>${g}</li>`).join('')}</ul>` : '';
        const rwH = q.realWorld?.length
            ? `<div class="st rw"><i class="fas fa-globe me-1"></i>No Mundo Real</div><ul class="fl">${q.realWorld.map(r=>`<li>${r}</li>`).join('')}</ul>` : '';
        const badge = s
            ? '<span class="badge bg-secondary">Sem resposta</span>'
            : a ? '<span class="badge bg-success"><i class="fas fa-check me-1"></i>Acertou</span>'
                : '<span class="badge bg-danger"><i class="fas fa-times me-1"></i>Errou</span>';
        return { cls: s?'sem':a?'ok':'err', badge, opH, exH, glH, geH, rwH };
    }

    const headerComum = `
      <div class="rh text-center">${logoH}
        <h2 class="fw-bold mb-1">${title} — Revisão</h2>
        <h3 class="fw-bold">${pct}% | ${score}/${total} corretas</h3>
        <p class="${ok?'text-success':'text-warning'} fw-bold mb-0">${ok?'✅ Aprovado!':'📚 Continue estudando'} (mínimo 70%)</p>
      </div>
      <div class="np mb-3 text-end">
        <button onclick="window.print()" class="btn btn-outline-secondary btn-sm" style="border-radius:50px">
          <i class="fas fa-print me-1"></i>Imprimir
        </button>
      </div>`;

    const base = `<!DOCTYPE html><html lang="pt-BR"><head>
      <meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
      <title>Revisão — ${title}</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">
      <style>${css}</style></head><body>`;

    /* ── Modo Teste: scroll único ─────────────────────────────── */
    if (quizMode === 'teste') {
        let body = '';
        questions.forEach((q, i) => {
            const { cls, badge, opH, exH, glH, geH, rwH } = buildCard(q, i, eff[i]);
            body += `<div class="qc ${cls}">
              <div class="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
                <div>
                  <span class="badge bg-dark me-1">Q${i+1}</span>
                  ${q.domain ? `<span class="badge bg-secondary me-1">${q.domain}</span>` : ''}
                  <strong class="text-primary">${q.title||''}</strong>
                </div>${badge}
              </div>
              <p class="mb-3 fw-semibold">${q.prompt}</p>
              <div class="mb-3">${opH}</div>
              ${exH ? `<div class="mb-2">${exH}</div>` : ''}${glH}${geH}${rwH}
            </div>`;
        });
        const html = `${base}<div class="container py-4">${headerComum}${body}</div>
          <button onclick="window.close()" class="btn np bf bfb">
            <i class="fas fa-arrow-left"></i><span class="bfl ms-1">Voltar</span>
          </button></body></html>`;
        const w = window.open('', '_blank');
        w.document.write(html);
        w.document.close();
        return;
    }

    /* ── Modo Prova: uma questão por vez ──────────────────────── */
    const cards = questions.map((q, i) => {
        const { cls, badge, opH, exH, glH, geH, rwH } = buildCard(q, i, eff[i]);
        return `<div id="q${i}" class="qc ${cls}" style="display:none">
          <div class="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
            <div>
              <span class="badge bg-dark me-1">Q${i+1}/${total}</span>
              ${q.domain ? `<span class="badge bg-secondary me-1">${q.domain}</span>` : ''}
              <strong class="text-primary">${q.title||''}</strong>
            </div>${badge}
          </div>
          <p class="mb-3 fw-semibold">${q.prompt}</p>
          <div class="mb-3">${opH}</div>
          ${exH ? `<div class="mb-2">${exH}</div>` : ''}${glH}${geH}${rwH}
        </div>`;
    }).join('');

    const sumBtns = questions.map((q, i) => {
        const s = eff[i] === null, a = s ? false : isComplete(q, eff[i]);
        return `<button onclick="goTo(${i})" id="sb${i}"
            class="btn btn-sm sb ${s?'btn-secondary':a?'btn-success':'btn-danger'}">${i+1}</button>`;
    }).join('');

    const navColor = cfg.theme === 'azure' ? '#fff' : '#111';
    const html = `${base}
      <style>.sw{background:#fff;border-radius:12px;padding:1rem;box-shadow:0 2px 8px rgba(0,0,0,.08);margin-bottom:1.5rem;}</style>
      <div class="container py-4">
        ${headerComum}
        <div class="sw np">
          <p class="small fw-bold text-muted mb-2"><i class="fas fa-th me-1"></i>Navegação rápida:</p>
          <div class="d-flex flex-wrap gap-1">${sumBtns}</div>
          <div class="d-flex gap-3 mt-2 small">
            <span><span class="badge bg-success">Verde</span> Acertou</span>
            <span><span class="badge bg-danger">Vermelho</span> Errou</span>
            <span><span class="badge bg-secondary">Cinza</span> Sem resposta</span>
          </div>
        </div>
        ${cards}
      </div>
      <button onclick="window.close()" class="btn np bf bfb">
        <i class="fas fa-arrow-left"></i><span class="bfl ms-1">Voltar</span>
      </button>
      <button id="bp" onclick="goTo(cur-1)" class="btn btn-outline-secondary np bf bfp" disabled>
        <i class="fas fa-arrow-left"></i><span class="bfl ms-1">Anterior</span>
      </button>
      <button id="bn" onclick="goTo(cur+1)" class="btn np bf bfn"
          style="background:${cfg.primary};border:none;color:${navColor}">
        <span class="bfl me-1">Próxima</span><i class="fas fa-arrow-right"></i>
      </button>
      <script>
        let cur=0;
        function goTo(i){
          if(i<0||i>=${total})return;
          document.getElementById('q'+cur).style.display='none';
          document.getElementById('sb'+cur).classList.remove('aq');
          cur=i;
          document.getElementById('q'+cur).style.display='block';
          document.getElementById('sb'+cur).classList.add('aq');
          document.getElementById('bp').disabled=cur===0;
          document.getElementById('bn').disabled=cur===${total}-1;
          if(window.innerWidth<=768)document.getElementById('q'+cur).scrollIntoView({behavior:'smooth',block:'start'});
          else window.scrollTo({top:0,behavior:'smooth'});
        }
        goTo(0);
      <\/script>
    </body></html>`;
    const w = window.open('', '_blank');
    w.document.write(html);
    w.document.close();
}
