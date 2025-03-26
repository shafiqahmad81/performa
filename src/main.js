
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


// swiper slider section

import Swiper from 'swiper';

import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const swiper = new Swiper('.mySwiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    loop:true,
    autoplay: {
        delay: 3000,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

 // JavaScript to toggle accordion content and rotate icon
 document.querySelectorAll('.accordion-title').forEach(button => {
  button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector('svg');
      content.classList.toggle('hidden');
      icon.classList.toggle('rotate-180');
  });
});

