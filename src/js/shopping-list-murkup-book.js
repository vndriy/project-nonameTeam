const murkup = document.querySelector('.body');
const blockHidden = document.querySelector('.container-general');
const shoppingListEl = document.querySelector('.shopippping-list');
// window.addEventListener("load",  murkupBook);

// function murkupBook() {

//    const list = localStorage.getItem("shopping-list")
//    const listPars =  JSON.parse(list)
//    if(listPars.length === 0) {
//     blockHidden.classList.add("block-hidden")
//     return
//    } else {
//     murkupBooksFromLockalstirage(listPars);
//    }

//    }

// Отримуємо URL
// function toGetUrl(evt) {
//   for (const e of evt) {
//     return e.url
//   }

// }

// Робимо розмітку

export function renderShoppingList(shoppingList) {
  const markup = shoppingList
    .map(
      ({
        _id,
        buy_links,
        author,
        title,
        description,
        book_image,
        list_name,
      }) => `<li class="shopping-list__item">
 <img class="img" src="${book_image}" alt="${title}" >

 <div class="shopping-list__description">
 <div class="remove-book ">
 <button type="button" class="delete-btn" data-id='${_id}' ">
     <svg class="svg-button" >
      <use href="./img/icons.svg#icon-dump"></use>
     </svg>
     </button>
 </div>
 <h2 class="name">${title}</h2>
 <p class="category">${list_name}</p>
 <p class="description">${description}</p>

 <div class="svg">
 <p class="author">${author}</p>
 <ul>
 </ul>
 </div>
 </li>`
    )
    .join('');

  shoppingListEl.innerHTML = markup;
}

// Видаляємо книжку
// function toRemoveMurkup(e) {
//   const list = localStorage.getItem('shopping-list');
//   const listPars = JSON.parse(list);
//   const masBook = listPars.filter(b => b._id === e.target.classList.value);

//   const masBooks = listPars.filter(b => b._id !== e.target.classList.value);

//   ///////////////////////////////////

//   if (masBook) {
//     localStorage.setItem('shopping-list', JSON.stringify(masBooks));
//     location.reload();
//   }

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
