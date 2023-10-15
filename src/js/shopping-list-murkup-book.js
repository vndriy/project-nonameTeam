

const murkup = document.querySelector(".body");


window.addEventListener("load",  murkupBook);



function murkupBook() {
   const list = localStorage.getItem("shopping-list")
   const listPars = JSON.parse(list)
   
   listPars.map(({_id, buy_links,  author, title, description, book_image, list_name}) => {
    const applBook = buy_links[1]
    
      murkup.insertAdjacentHTML("beforeend", `
      <section class="container">
 <picture class="picture"> 
 <img class="img" src="${book_image}" alt="${title}" >
 </picture>
 <div class="book-description">
 <div class="remove-book"> 
 <button class="${_id}">
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
   <img src="../img/amazon.png" alt="" >
   </a>
   </li>
   <li class="platform-svg book">
   <a href="${applBook.url}" target="_blank" rel="noopener noreferrer">
   <img src="../img/book.png " alt="" >
   </a>
   
 </li>
   </ul>
 </div>
 </div>
 </div>
 </section>`)
//  console.log(_id)

 function removeMurkup() {
  const removeButton = document.querySelector(".remove-book")
  removeButton.addEventListener ("click", toRemoveMurkup);
 }
 if(toRemoveMurkup) {

 }
 const removeButton = document.querySelectorAll(".remove-book")
removeButton.addEventListener ("click", toRemoveMurkup);
    })
    
   }
  let  removeBookInShoppingList = [];
  
 // Видаляємо книжку  
function toRemoveMurkup(e) {
  const list = localStorage.getItem("shopping-list")
   const listPars = JSON.parse(list)
   removeBookInShoppingList = listPars;
   console.log(removeBookInShoppingList)
   removeBookInShoppingList.map((b) => {
    if(e.target.classList.value === b._id) {
      console.log(removeBookInShoppingList.length )
      removeBookInShoppingList.length -=1
      murkup.classList.remove('container');
      // for (let i = 0; i < removeBookInShoppingList.length; i--)
      localStorage.setItem("shopping-list", removeBookInShoppingList )
      console.log(removeBookInShoppingList)
    }
 
   })
  
  // for (let i = 0; i < murkup.length; i--)
  
 
  // listPars.length -=1
  
   
  
  
  // murkup.removeChild(document.querySelector('.container'));
  // murkup.classList.remove('container');
  // localStorage.removeItem("shopping-list")

}

// Отримуємо URL
function toGetUrl(evt) {
  for (const e of evt) {
    return e.url
  }

}




