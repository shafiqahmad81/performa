
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

// Toggle menu
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    closeMenu.classList.toggle('hidden');
});
closeMenu.addEventListener('click', () => {
    closeMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('hidden');
});
