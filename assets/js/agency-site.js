(function () {
    const scroller = document.querySelector('.login-split-directory');
    const nav = document.querySelector('.agency-site-nav');
    if (!scroller || !nav) {
        return;
    }

    const navHeight = () => nav.getBoundingClientRect().height;

    const scrollToTarget = (target) => {
        if (!target) {
            return;
        }
        const scrollerTop = scroller.getBoundingClientRect().top;
        const targetTop = target.getBoundingClientRect().top;
        const offset = scroller.scrollTop + (targetTop - scrollerTop) - navHeight() - 8;
        scroller.scrollTo({ top: Math.max(0, offset), behavior: 'smooth' });
    };

    document.querySelectorAll('.agency-site a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');
            if (!href || href === '#') {
                return;
            }
            const target = document.querySelector(href);
            if (!target) {
                return;
            }
            event.preventDefault();
            scrollToTarget(target);
        });
    });
})();
