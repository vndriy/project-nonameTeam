const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.hamb-menu');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menu.style.display = 'block';
    menuOpen = true;
    document.body.classList.add('no-scroll');
  } else {
    menuBtn.classList.remove('open');
    menu.style.display = 'none';
    menuOpen = false;
    document.body.classList.remove('no-scroll');
  }
});
