let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#darkmode-toggle');
const header = document.querySelector('header'); 
const bodybg = document.querySelector('body');
const logostyle = document.querySelector('.logo-style');

const currentPageURL = window.location.pathname;
const homeLink = document.getElementById('home-link');
const shoppingLink = document.getElementById('shopping-link');
const svgMenu = document.getElementById('#svgmenu')
const headerContainer = document.querySelector('.header-cont')

 if (currentPageURL.includes('index.html')) {
     homeLink.classList.add('yellow-block')
        homeLink.style.fontWeight = '700';
        shoppingLink.style.fontWeight = '500';
     shoppingLink.style.backgroundColor = 'transparent';
     if (darkMode === 'enabled') {
         shoppingLink.style.color = '#fff';
     } 
    } else if (currentPageURL.includes('shopping-list.html')) {
        shoppingLink.style.fontWeight = '700';
        shoppingLink.classList.add('yellow-block')
        homeLink.style.fontWeight = '500';
     homeLink.style.backgroundColor = 'transparent';
     if (darkMode === 'enabled') {
         homeLink.style.color = '#fff';
     } 
}

const enableDarkMode = () => {
    // svgMenu.classList.add('svg-mob')
    // header.classList.add('headerbg')
    headerContainer.classList.add('headerbg')
    bodybg.classList.add('bodybg')
    logostyle.classList.add('darkmode-logo')
console.log(currentPageURL);
    localStorage.setItem('darkMode', 'enabled');
};

const disbleDarkMode = () => {
    // header.classList.remove('headerbg')
    headerContainer.classList.remove('headerbg')

    bodybg.classList.remove('bodybg')
    logostyle.classList.remove('darkmode-logo')

    localStorage.setItem('darkMode', null);
}
if (darkMode === 'enabled') {
    enableDarkMode();
    darkModeToggle.checked = true;
}

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== 'enabled') {
        enableDarkMode();
        console.log(darkMode);
        if (currentPageURL.includes('index.html')) {
            shoppingLink.style.color = 'white';
        } else if (currentPageURL.includes('shopping-list.html')) {
            homeLink.style.color = 'white';
        }
    } else {
        disbleDarkMode();
        console.log(darkMode);
        if (currentPageURL.includes('index.html')) {
            shoppingLink.style.color = 'black'; // 
        } else if (currentPageURL.includes('shopping-list.html')) {
            homeLink.style.color = 'black'; 
        }
    }
});

