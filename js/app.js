'use strict';

/* ── Navegação home ↔ quiz ───────────────────────────────────── */
function abrirSimulado(certKey) {
    cfg        = CONFIGS[certKey];
    quizMode   = localStorage.getItem(cfg.storageKey + '_mode') || 'teste';
    activeFile = localStorage.getItem(cfg.storageKey + '_active_file') || cfg.simulados[0].file;
    window._loadedQuestions = null;

    // Aplica variáveis CSS do tema
    const r = document.documentElement.style;
    r.setProperty('--t-primary', cfg.primary);
    r.setProperty('--t-dark',    cfg.dark);
    r.setProperty('--t-darker',  cfg.darker);
    r.setProperty('--t-accent',  cfg.accent);
    r.setProperty('--t-hover',   cfg.hover);
    r.setProperty('--t-sel',     cfg.sel);

    // Aplica elementos visuais
    const vq = document.getElementById('view-quiz');
    vq.className = cfg.bgClass;
    document.getElementById('quiz-logo').innerHTML       = cfg.logoHTML;
    document.getElementById('quiz-subtitle').textContent = cfg.subtitle;
    document.getElementById('btn-finalizar').style.cssText = cfg.finalizarStyle;
    document.getElementById('btn-next').style.cssText      = cfg.nextStyle;
    document.getElementById('sidebar-icon').style.cssText  = cfg.sidebarIconColor;

    // Restaura spinner no carousel (pode ter sido substituído pelos slides)
    document.getElementById('carousel-inner').innerHTML =
        `<div class="text-center py-5">
             <i class="fas fa-circle-notch fa-spin fa-3x mb-3" style="${cfg.spinnerColor}"></i>
             <h5>Carregando perguntas...</h5>
         </div>`;

    document.getElementById('view-home').style.display = 'none';
    vq.style.display = 'block';
    window.scrollTo(0, 0);

    buildMenu();
    carregarScriptSimulado();
}

function voltarHome() {
    if (carousel) { try { carousel.dispose(); } catch(e){} carousel = null; }
    questions = []; answers = []; provaPending = []; currentIndex = 0;
    document.getElementById('carousel-inner').innerHTML = '';
    document.getElementById('view-quiz').style.display = 'none';
    document.getElementById('view-home').style.display = 'flex';
    window.scrollTo(0, 0);
}

/* ── Sidebar ─────────────────────────────────────────────────── */
function toggleSidebar() {
    document.getElementById('sidebarMenu').classList.toggle('active');
    document.getElementById('sidebarOverlay').classList.toggle('active');
}

function buildMenu() {
    const container = document.getElementById('sidebarItemsContainer');
    container.innerHTML = '';
    cfg.simulados.forEach(({ label, file }) => {
        const a = document.createElement('a');
        a.href = '#';
        a.className = 'sidebar-item' + (file === activeFile ? ' active' : '');
        a.innerHTML = `<i class="fas fa-file-alt"></i> ${label}`;
        a.onclick = (e) => { e.preventDefault(); trocarSimulado(file); toggleSidebar(); };
        container.appendChild(a);
    });
}

function trocarSimulado(file) {
    if (file === activeFile) return;
    localStorage.setItem(cfg.storageKey + '_active_file', file);
    limparProgressoLocal();
    activeFile = file;
    questions = []; answers = []; provaPending = []; currentIndex = 0;
    if (carousel) { try { carousel.dispose(); } catch(e){} carousel = null; }
    document.getElementById('carousel-inner').innerHTML =
        `<div class="text-center py-5">
           <i class="fas fa-circle-notch fa-spin fa-3x mb-3" style="${cfg.spinnerColor}"></i>
           <h5>Carregando perguntas...</h5>
         </div>`;
    buildMenu();
    carregarScriptSimulado();
}
