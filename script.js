document.addEventListener('DOMContentLoaded', () => {

    // Сбор всех навигационных ссылок и страниц
    const navLinks = document.querySelectorAll('.nav-link');
    const brandCards = document.querySelectorAll('.brand-card');
    const pageSections = document.querySelectorAll('.page-content');
    const logoButton = document.querySelector('.sidebar-logo');

    // Функция переключения вкладок
    function navigateToPage(targetPageId) {
        // Убираем активный класс у всех страниц
        pageSections.forEach(section => {
            section.classList.remove('active');
        });

        // Показываем целевую страницу
        const targetSection = document.getElementById(targetPageId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Обновляем активный статус в боковом меню
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === targetPageId) {
                link.classList.add('active');
            }
        });

        // Скроллим окно в самый верх
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Слушатель для ссылок в сайдбаре
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const pageId = link.getAttribute('data-page');
            navigateToPage(pageId);
        });
    });

    // Слушатель для карточек на главной странице
    brandCards.forEach(card => {
        card.addEventListener('click', () => {
            const pageId = card.getAttribute('data-page');
            navigateToPage(pageId);
        });
    });

    // Клик по логотипу возвращает на главную
    if (logoButton) {
        logoButton.addEventListener('click', () => {
            navigateToPage('main-page');
        });
    }
});