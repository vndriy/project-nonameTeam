
import amazonImg from '../img/amazon.png';
import appleBookImg from '../img/book.png';
// import basket from '../img/basked.png';

const murkup = document.querySelector('.body');
const notEmptyStorage = document.querySelector('.empty-basket-wrap');
const themaDark = document.querySelector("#darkmode-toggle");


themaDark.addEventListener("click", changeThema)
murkup.addEventListener('click', onDeleteBtnClick);
window.addEventListener('load', murkupBook);

function murkupBook() {
  const list = localStorage.getItem('shopping-list');
  const listPars = JSON.parse(list);


  if (listPars.length === 0) {
    murkup.classList.add('block-hidden');
    return;
  } else {
    notEmptyStorage.style.display = 'none';
    murkupBooksFromLockalstirage(listPars);
  }
}

// Отримуємо URL
function toGetUrl(evt) {
  for (const e of evt) {
    return e.url;
  }
}

function toGetUrlApple(evt) {
  const appleBook = evt[1];
  const apple = appleBook.url;
  return apple;
}

// Робимо розмітку

function murkupBooksFromLockalstirage(evt) {
  const murkupBook = evt
    .map(
      ({ _id, buy_links, author, title, description, book_image, list_name }) =>
        `
      <section data-action="${_id}" class="shopping-container" >
 <picture class="picture"> 
 <img class="img" src="${book_image}" alt="${title}" >
 </picture>

 <div class="book-description">
 <button type="button" data-action="${_id}" class="button-trash remove-book">
    <i data-action="${_id}" class="fa-regular fa-trash-can icon-trash"></i>
     </button>
 <h2 class="name">${title}</h2>
 <p class="category">${list_name}</p>
 <p class="description">${description}</p>
 
 <div class="svg">
 <p class="author">${author}</p>
 <div>
   <ul class="platform">
   <li class="platform-svg amazon ">
   <a href="${toGetUrl(buy_links)}" target="_blank" rel="noopener noreferrer">
   <img src="${amazonImg}" alt="" >
   </a>
   </li>
   <li class="platform-svg book">
   <a href="${toGetUrlApple(
     buy_links
   )}" target="_blank" rel="noopener noreferrer">
   <img src="${appleBookImg}" alt="" >
   </a>
   
 </li>
   </ul>
 </div>
 </div>
 </div>
 </section>`
    )
    .join('');

  murkup.innerHTML = murkupBook;
}

// Видаляємо книжку
function onDeleteBtnClick(evt) {

  if (
    evt.target.nodeName !== 'use' &&
    evt.target.nodeName !== 'BUTTON' &&
    !evt.target.classList.contains('icon-trash')
  ) {
    console.log(evt.target.nodeName);
    return;
  }
  console.log();
  const shoppingList = JSON.parse(localStorage.getItem('shopping-list'));
  if (!shoppingList || shoppingList.length === 0) {
    return;
  }
  const itemId = evt.target.dataset.action;

  const masBook = shoppingList.filter(b => b._id === itemId);
  
  const masBooks = shoppingList.filter(b => b._id !== itemId);

  localStorage.setItem('shopping-list', JSON.stringify(masBooks));
  murkupBook(masBooks);
  if (masBooks.length === 0) {
    murkup.setAttribute('hidden', '');
    notEmptyStorage.style.display = 'block';
  }

  return;
}




// міняю тему
function changeThema(){
  const shoppingListTema = localStorage.getItem("darkMode");
  
  const contShopp = document.querySelectorAll(".shopping-container");
    const nameShopp = document.querySelectorAll(".name");
    const catShopp = document.querySelectorAll(".category");
    const descShopp = document.querySelectorAll(".description");
    const amazShopp = document.querySelectorAll(".amazon");
    const appleShopp = document.querySelectorAll(".book");
 
  if(shoppingListTema === "enabled") {
    openAll(nameShopp);
    openAll(catShopp);
    openAll(descShopp);
    openAll(contShopp);
    colorAll(amazShopp);
    colorAll(appleShopp);
    color(amazShopp);
   
   
    return;
  
  }else  {
    closeAll(nameShopp);
    closeAll(catShopp);
    closeAll(descShopp);
    closeAll(contShopp);
    colorAllRemove(amazShopp);
    colorAllRemove(appleShopp);
    colorRem(amazShopp);
  return;
  }
 
}



function openAll(mas) {
  for (const m of mas) {
    m.classList.add('hover');
    }
    return
}
function closeAll(mas) {
  for (const m of mas) {
    m.classList.remove('hover');
    }
    return
}
function colorAllRemove(mas) {
  for (const m of mas) {
    m.classList.remove('color');
    }
    return
}
function colorAll(mas) {
  for (const m of mas) {
    m.classList.add('color');
    }
    return
}
function color(mas) {
  for (const m of mas) {
    m.classList.add('yu');
    }
    return
}
function colorRem(mas) {
  for (const m of mas) {
    m.classList.remove('yu');
    }
    return
}



 function murkupBook() {

  const list = localStorage.getItem("shopping-list")
    const listPars =  JSON.parse(list)
   
   if(listPars.length === 0) {
    murkup.classList.add("block-hidden")
    return
   } else {
   
    notEmptyStorage.style.display = "none"
    murkupBooksFromLockalstirage(listPars);
    const shoppingListTema = localStorage.getItem("darkMode");
    console.log(shoppingListTema)
   
    if(shoppingListTema === "enabled") {
      const contShopp = document.querySelectorAll(".shopping-container");
      const nameShopp = document.querySelectorAll(".name");
      const catShopp = document.querySelectorAll(".category");
      const descShopp = document.querySelectorAll(".description");
      openAll(nameShopp);
      openAll(catShopp);
      openAll(descShopp);
      openAll(contShopp);
      
    
    }else  {
    return
    }
   
   }

   }

