document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burgerBtn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');

    function toggleMenu() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    burgerBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    function goToPage(id) {
        document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
        const target = document.getElementById(id);
        if(target) target.classList.add('active');
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        window.scrollTo(0,0);
    }

    document.querySelectorAll('.nav-menu-link, .read-more-btn').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            goToPage(el.dataset.page);
        });
    });

    document.getElementById('logoBtn').addEventListener('click', () => goToPage('main-page'));
});