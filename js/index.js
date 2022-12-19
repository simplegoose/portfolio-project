const menuBtn = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.flex-nav');

menuBtn.addEventListener('click', () => {
  nav.classList.add('open');
});