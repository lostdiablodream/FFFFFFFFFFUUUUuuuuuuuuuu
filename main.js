// Мобильное меню и актуальный год в подвале
(function () {
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('nav');

    toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    });

    nav.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            nav.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });

    document.getElementById('year').textContent = String(new Date().getFullYear());
})();
