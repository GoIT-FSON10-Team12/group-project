(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

// Mobile menu hide on scrolling
window.addEventListener('DOMContentLoaded', (e) => {

 const menu = document.querySelector('#mobile-menu');
 const menuLinks = menu.querySelectorAll('a');
 const body = document.querySelector('body');
 menuLinks.forEach((el) => {

     el.onclick = (e) => {
         menu.classList.contains('is-open')
         ? menu.classList.remove('is-open')
         : ''

     body.style.overflow == 'hidden'
     ? body.style.overflow = 'unset'
     : ''
     }
 })

});
