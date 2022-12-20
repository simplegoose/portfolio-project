const menuBtn = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.flex-nav');
const closeBtn = document.querySelector('.close');
const linksMenu = nav.getElementsByTagName('a');

menuBtn.addEventListener('click', () => {
  nav.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('open');
});

for (let i = 0; i < linksMenu.length; i += 1) {
  linksMenu[i].addEventListener('click', () => {
    nav.classList.remove('open');
  });
}