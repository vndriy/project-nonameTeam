let darkMode = localStorage.getItem('darkMode');

let initialTextColor;

const darkModeToggle = document.querySelector('#darkmode-toggle');
const header = document.querySelector('header');
const bodybg = document.querySelector('body');
const logostyle = document.querySelector('.logo-style');
const shopSvg = document.querySelector('.shop-svg');

const currentPageURL = window.location.pathname;
const homeLink = document.getElementById('home-link');
const shoppingLink = document.getElementById('shopping-link');
const svgMenu = document.getElementById('#svgmenu');
const headerContainer = document.querySelector('.header-cont');

const modal = document.querySelector('.modal-book-selection');
const modalCloseBtn = document.querySelector('.close-btn-icon');
const modalButton = document.querySelector('.modal-book-shopping-list-btn');
const modalMessage = document.querySelector(
  '.modal-book-shopping-list-btn-shopping-list-message'
);

const menuBtn = document.querySelector('.menu-btn');
const mobHome = document.querySelector('.mobmenu-home')
const mobShop = document.querySelector('.mobmenu-shop')
const svgMob = document.querySelector('.svg-mob')
const allCateg = document.querySelector('.all-categories')

currentPageURL.includes('index.html');
homeLink.classList.add('yellow-block');

if (currentPageURL.includes('index.html')) {
  homeLink.classList.add('yellow-block');
  homeLink.style.fontWeight = '700';
  shoppingLink.style.fontWeight = '500';
  shoppingLink.style.backgroundColor = 'transparent';

  mobHome.classList.add('yellow-block');
  mobHome.style.fontWeight = '700';
  mobHome.style.color = 'black';


  if (darkMode === 'enabled') {
    shoppingLink.style.color = '#fff';
    shopSvg.style.fill = 'white';
  }
} else if (currentPageURL.includes('shopping-list.html')) {
  shoppingLink.style.fontWeight = '700';
  shoppingLink.style.color = 'black';
  shopSvg.style.fill = 'black';
  shoppingLink.classList.add('yellow-block');
  homeLink.style.fontWeight = '500';
  homeLink.style.backgroundColor = 'transparent';
  
    mobShop.classList.add('yellow-block');
  mobShop.style.fontWeight = '700';
  mobShop.style.color = 'black';
    svgMob.style.fill = 'black';

  if (darkMode === 'enabled') {
    homeLink.style.color = '#fff';
  }
}

const enableDarkMode = () => {
 
  headerContainer.classList.add('headerbg');
  bodybg.classList.add('bodybg');
  logostyle.classList.add('darkmode-logo');
  console.log(currentPageURL);
  localStorage.setItem('darkMode', 'enabled');

  modal.classList.add('bodybg');
  modalCloseBtn.classList.add('light');
  modalButton.classList.add('light');
  modalMessage.classList.add('light');
  
};

const disbleDarkMode = () => {
  
  headerContainer.classList.remove('headerbg');
  bodybg.classList.remove('bodybg');
  logostyle.classList.remove('darkmode-logo');

  modal.classList.remove('bodybg');
  modalCloseBtn.classList.remove('light');
  modalButton.classList.remove('light');
  modalMessage.classList.remove('light');

  localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled') {
  enableDarkMode();
  darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
    console.log(darkMode);
    if (currentPageURL.includes('index.html')) {
      shoppingLink.style.color = 'white';
      shopSvg.style.fill = 'white';
    } else if (currentPageURL.includes('shopping-list.html')) {
      homeLink.style.color = 'white';
    }
  } else {
    disbleDarkMode();
    console.log(darkMode);
    if (currentPageURL.includes('index.html')) {
      shoppingLink.style.color = 'black';
      shopSvg.style.fill = 'black';
      
    } else if (currentPageURL.includes('shopping-list.html')) {
      homeLink.style.color = 'black';
    }
  }
});


