'use strict';

/* ── Configurações por certificação ──────────────────────────── */
const CONFIGS = {
    aws: {
        theme:           'aws',
        storageKey:      'aws_dva',
        primary:         '#ff9900',
        dark:            '#232f3e',
        darker:          '#1a2333',
        accent:          '#ff9900',
        hover:           '#fffaf0',
        sel:             '#fff3e0',
        bgClass:         'quiz-bg-aws',
        finalizarStyle:  'background:#ff9900;color:#111;border:none;',
        nextStyle:       'background:#ff9900;color:#111;border:none;',
        spinnerColor:    'color:#ff9900',
        sidebarIconColor:'color:#ff9900',
        logoHTML:        '<i class="fab fa-aws fa-3x" style="color:#ff9900;"></i>',
        subtitle:        'Developer Associate',
        simulados: [
            { label: 'Simulado 1 — AWS DVA-C02', file: 'js/aws_dva-c02_s1.js' },
            { label: 'Simulado 2 — AWS DVA-C02', file: 'js/aws_dva-c02_s2.js' },
            { label: 'Simulado 3 — AWS DVA-C02', file: 'js/aws_dva-c02_s3.js' },
            { label: 'Simulado 4 — AWS DVA-C02', file: 'js/aws_dva-c02_s4.js' },
            { label: 'Simulado 5 — AWS DVA-C02', file: 'js/aws_dva-c02_s5.js' },
            { label: 'Simulado 6 — AWS DVA-C02', file: 'js/aws_dva-c02_s6.js' },
        ],
    },
    azure: {
        theme:           'azure',
        storageKey:      'az900',
        primary:         '#0078d4',
        dark:            '#003a6b',
        darker:          '#002350',
        accent:          '#50e6ff',
        hover:           '#f0f6ff',
        sel:             '#e4eeff',
        bgClass:         'quiz-bg-azure',
        finalizarStyle:  'background:#50e6ff;color:#003a6b;border:none;',
        nextStyle:       'background:#0078d4;color:#fff;border:none;',
        spinnerColor:    'color:#0078d4',
        sidebarIconColor:'color:#50e6ff',
        logoHTML:        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.242 47.271" width="52" height="42" aria-label="Microsoft Azure">
                              <path d="M28.396 0L11.91 14.982 0 41.27h10.803L28.396 0z" fill="#0072C6"/>
                              <path d="M31.25 3.75L18.942 38.857l23.486 2.97-12.24-16.818L31.25 3.75z" fill="#0072C6"/>
                              <path d="M18.942 38.857L10.803 47.27h37.805L42.428 41.826l-23.486-2.969z" fill="#0072C6"/>
                          </svg>`,
        subtitle:        'Fundamentals',
        simulados: [
            { label: 'Simulado 1 — Azure AZ-900', file: 'js/az-900_s1.js' },
            { label: 'Simulado 2 — Azure AZ-900', file: 'js/az-900_s2.js' },
            { label: 'Simulado 3 — Azure AZ-900', file: 'js/az-900_s3.js' },
            { label: 'Simulado 4 — Azure AZ-900', file: 'js/az-900_s4.js' },
            { label: 'Simulado 5 — Azure AZ-900', file: 'js/az-900_s5.js' },
            { label: 'Simulado 6 — Azure AZ-900', file: 'js/az-900_s6.js' },
        ],
    },
};

/* ── Estado global do quiz ───────────────────────────────────── */
let cfg          = null;
let questions    = [];
let currentIndex = 0;
let answers      = [];
let provaPending = [];
let carousel     = null;
let quizMode     = 'teste';
let activeFile   = '';
