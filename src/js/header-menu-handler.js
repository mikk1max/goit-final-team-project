// Variables for burger-menu
const btnOpen = document.querySelector('.burger-btn');
const btnClose = document.querySelector('.btn-close-header-menu');
const menuSection = document.querySelector('.header-menu-section');

// Variables for mobile nav-menu
const btnAboutMenu = document.querySelector('#about-link');
const btnYachtsMenu = document.querySelector('#yachts-link');
const btnReviewsMenu = document.querySelector('#reviews-link');

// burger-menu
btnOpen.addEventListener('click', () => {
    menuSection.classList.add('is-open');
});

btnClose.addEventListener('click', () => {
    menuSection.classList.remove('is-open');
});

// mobile nav-menu
btnAboutMenu.addEventListener('click', () => {
    menuSection.classList.remove('is-open');
})

btnYachtsMenu.addEventListener('click', () => {
    menuSection.classList.remove('is-open');
})

btnReviewsMenu.addEventListener('click', () => {
    menuSection.classList.remove('is-open');
})
