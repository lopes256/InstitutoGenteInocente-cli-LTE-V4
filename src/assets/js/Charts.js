(() => {
    'use strict';
    const mode = () =>
        document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'dark' : 'light';
    globalThis.Apex ||= {};
    const apex = globalThis.Apex;
    apex.theme = { mode: mode() };
    apex.chart = Object.assign(apex.chart || {}, { background: 'transparent' });
    new MutationObserver(() => {
        const next = mode();
        apex.theme = { mode: next };
        const instances = apex._chartInstances || [];
        for (const { chart } of instances) {
            chart.updateOptions({ theme: { mode: next } }, false, false);
        }
    }).observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-bs-theme'],
    });
})();