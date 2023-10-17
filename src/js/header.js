const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.hamb-menu');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
      menuBtn.classList.add('open');
      menu.style.display = 'block';
    menuOpen = true;
  } else {
      menuBtn.classList.remove('open');
      menu.style.display = 'none';
    menuOpen = false;
  }
});