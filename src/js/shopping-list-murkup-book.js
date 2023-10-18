import amazonImg from '../img/amazon.png';
import appleBookImg from '../img/book.png';

const murkup = document.querySelector('.body');
const notEmptyStorage = document.querySelector(".empty-basket-wrap");

murkup.addEventListener('click', onDeleteBtnClick);
window.addEventListener("load",  murkupBook);


  


export function murkupBook() {

   const list = localStorage.getItem("shopping-list")
   const listPars =  JSON.parse(list)
   
   if(listPars.length === 0) {
    murkup.classList.add("block-hidden")
    return
   } else {
    notEmptyStorage.style.display = "none"
    murkupBooksFromLockalstirage(listPars);
   
   }

   }
   

// Отримуємо URL
function toGetUrl(evt) {
  for (const e of evt) {
    return e.url
  }

}

function toGetUrlApple(evt) {
  const appleBook = evt[1];
  const apple = appleBook.url;
  return apple;
}



// Робимо розмітку

function murkupBooksFromLockalstirage(evt) {
 const murkupBook =  evt.map(({_id, buy_links,  author, title, description, book_image, list_name}) => 
 
       `
      <section data-action="${_id}" class="shopping-container" >
 <picture class="picture"> 
 <img class="img" src="${book_image}" alt="${title}" >
 </picture>
 <div class="book-description">
 <div class="remove-book "> 
 <button type="button" class="${_id} button-svg ">
     <svg class="svg-button" >
      <use href="./img/icons.svg#icon-dump" data-action="${_id}"></use>
     </svg>
     </button> 
 </div>
 <h2 class="name">${title}</h2>
 <p class="category">${list_name}</p>
 <p class="description">${description}</p>
 
 <div class="svg">
 <p class="author">${author}</p>
 <div>
   <ul class="platform">
   <li class="platform-svg amazon">
   <a href="${toGetUrl(buy_links)}" target="_blank" rel="noopener noreferrer">
   <img src="${amazonImg}" alt="" >
   </a>
   </li>
   <li class="platform-svg book">
   <a href="${toGetUrlApple(buy_links)}" target="_blank" rel="noopener noreferrer">
   <img src="${appleBookImg}" alt="" >
   </a>
   
 </li>
   </ul>
 </div>
 </div>
 </div>
 </section>`
 
    ).join('');
   
  
    murkup.innerHTML = murkupBook;
 
}

// Видаляємо книжку
function onDeleteBtnClick(evt) {
  if (evt.target.nodeName !== 'use' && evt.target.nodeName !== 'BUTTON') {
    return;
  }
  console.log();
  const shoppingList = JSON.parse(localStorage.getItem('shopping-list'));
  if (!shoppingList || shoppingList.length === 0) {
    return;
  }
  const itemId = evt.target.dataset.action;
 
  const masBook = shoppingList.filter(b => b._id === itemId);
  console.log(masBook);
  const masBooks = shoppingList.filter(b => b._id !== itemId);
  
  
  localStorage.setItem('shopping-list', JSON.stringify(masBooks));
  murkupBook(masBooks);
  if(masBooks.length === 0) {
   
    murkup.setAttribute( "hidden", "")
    notEmptyStorage.style.display = "block"

  }
 
 return;

}



