import amazonImg from '../img/amazon.png';
import appleBookImg from '../img/book.png'

const murkup = document.querySelector('.body');

const notEmptyStorage = document.querySelector(".empty-basket-wrap");
console.log(notEmptyStorage)
  
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


// Робимо розмітку

function murkupBooksFromLockalstirage(evt) {
  evt.map(({_id, buy_links,  author, title, description, book_image, list_name}) => {
    const applBook = buy_links[1];
    
      murkup.insertAdjacentHTML("beforeend", `
      <section data-action="${_id}" class="shopping-container" >
 <picture class="picture"> 
 <img class="img" src="${book_image}" alt="${title}" >
 </picture>
 <div class="book-description">
 <div class="remove-book "> 
 <button type="button" class="${_id} button-svg ">
     <svg class="svg-button" >
      <use href="./img/icons.svg#icon-dump" class="${_id}"></use>
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
   <a href="${applBook.url}" target="_blank" rel="noopener noreferrer">
   <img src="${appleBookImg} " alt="" >
   </a>
   
 </li>
   </ul>
 </div>
 </div>
 </div>
 </section>`)
 
    })
    const removeButton = document.querySelectorAll(".remove-book");
    removeButton.forEach(book => {
      book.addEventListener('click', toRemoveMurkup);
    });
}



// Робимо розмітку

// export function renderShoppingList(shoppingList) {
//   const markup = shoppingList
//     .map(
//       ({
//         _id,
//         buy_links,
//         author,
//         title,
//         description,
//         book_image,
//         list_name,
//       }) => `<li class="shopping-list__item">
//  <img class="img" src="${book_image}" alt="${title}" >

//  <div class="shopping-list__description">
//  <div class="remove-book ">
//  <button type="button" class="delete-btn" data-id='${_id}' ">
//      <svg class="svg-button" >
//       <use href="./img/icons.svg#icon-dump"></use>
//      </svg>
//      </button>
//  </div>
//  <h2 class="name">${title}</h2>
//  <p class="category">${list_name}</p>
//  <p class="description">${description}</p>

//  <div class="svg">
//  <p class="author">${author}</p>
//  <ul>
//  </ul>
//  </div>
//  </li>`
//     )
//     .join('');

//   shoppingListEl.innerHTML = markup;
// }

// Видаляємо книжку
function toRemoveMurkup(e) {
  const list = localStorage.getItem('shopping-list');
  const listPars = JSON.parse(list);
  const masBook = listPars.filter(b => b._id === e.target.classList.value);

  const masBooks = listPars.filter(b => b._id !== e.target.classList.value);

//   ///////////////////////////////////

  if (masBook) {
    localStorage.setItem('shopping-list', JSON.stringify(masBooks));
    location.reload();
  }
}

//   ///////////////////////////////////

//   // if(masBook) {
//   //        const oneBookMarkup = document.querySelector(".shopping-container");

//   //        oneBookMarkup.remove();

//   //        localStorage.setItem("shopping-list", JSON.stringify(masBooks));

//   // }

//   //  murkup.removeChild(document.querySelector('.shopping-container'));
//   ////////////////////////

//   // if(masBook) {
//   //  console.log(masBook)
//   //   masBook.map(({_id} )=> {
//   //     const findeId = _id;
//   //     console.log(findeId)
//   //     const finde = document.querySelectorAll('.shopping-container');
//   //     console.log(finde);

//   //     for (const book of finde) {

//   //     }

//   //     for (let i = 0; i < finde.length; i += 1) {
//   //       console.log(finde[i]);
//   //     }

//   //   })

//   //  }

//   ////////////////////

//   //  listPars.filter(b => {
//   //   if(masBook) {
//   //     localStorage.setItem("shopping-list", JSON.stringify(masBooks))
//   //     const h = murkup.querySelector(".container")
//   //     h.remove();
//   //     // murkup.classList.remove('h');
//   //     murkup.removeChild(document.querySelector('h'));

//   //   }
//   // })
// }
