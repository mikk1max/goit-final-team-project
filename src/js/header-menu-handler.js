const btnOpen = document.querySelector('.burger-btn');
const btnClose = document.querySelector('.btn-close-header-menu');
const menuSection = document.querySelector('.header-menu-section');

btnOpen.addEventListener('click', () => {
    menuSection.classList.add('is-open');
});

btnClose.addEventListener('click', () => {
    menuSection.classList.remove('is-open');
});
