const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuClose = document.getElementById('menu-close');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

menuClose.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});

AOS.init({
    duration: 800, // Animation duration
    easing: 'ease-in-out', // Easing function
    once: true, // Whether animation should happen only once
});