

const murkup = document.querySelector(".body");


window.addEventListener("load",  murkupBook);



function murkupBook() {
  // localStorage.removeItem("shopping-list")
   const list = localStorage.getItem("shopping-list")
   const listPars = JSON.parse(list)
   
   listPars.map(({_id, buy_links,  author, title, description, book_image, list_name}) => {
    const applBook = buy_links[1];
    
      murkup.insertAdjacentHTML("beforeend", `
      <section class="container">
 <picture class="picture"> 
 <img class="img" src="${book_image}" alt="${title}" >
 </picture>
 <div class="book-description">
 <div class="remove-book "> 
 <button type="button" class="${_id} button-svg">
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
 
 const removeButton = document.querySelectorAll(".remove-book");
 
  
    })
    const removeButton = document.querySelectorAll(".remove-book");
    removeButton.forEach(book => {
      book.addEventListener('click', toRemoveMurkup);
    });
    
   }

   

  //  let  removeBookInShoppingList = [];
  
 // Видаляємо книжку  
    function toRemoveMurkup(e) {
   
  // let  removeBookInShoppingList = [];
  const list = localStorage.getItem("shopping-list")
   const listPars = JSON.parse(list)
  const masBook =  listPars.filter(b => b._id === e.target.classList.value)
  console.log(masBook)
  // if(b._id !== e.target.classList.value) {
  //   removeBookInShoppingList.push(masBooks)
  // }
   const masBooks = listPars.filter(b => b._id !== e.target.classList.value)
   console.log(masBooks)
      // const filterBookId = [b._id === e.target.classList.value];
      const masBooksLockal = listPars.filter(b => {
        if(masBook ) {
          // removeBookInShoppingList.push(masBooks)
          murkup.classList.remove('.container');
          murkup.removeChild(document.querySelector('.container'));
          localStorage.setItem("shopping-list", JSON.stringify(masBooks))
        }
      })
  
     
      // murkup.classList.remove('.container');
      // murkup.removeChild(document.querySelector('.container'));
      // localStorage.setItem("shopping-list", JSON.stringify(removeBookInShoppingList))
     
      
    
    
  }

  //  removeBookInShoppingList = listPars;
  //  console.log(removeBookInShoppingList)
  //  removeBookInShoppingList.map((b) => {
  //   if(e.target.classList.value === b._id) {
  //     console.log(removeBookInShoppingList.length )
  //     removeBookInShoppingList.length -=1
  //     murkup.classList.remove('container');
      // for (let i = 0; i < removeBookInShoppingList.length; i--)
      // localStorage.setItem("shopping-list", removeBookInShoppingList )
      // console.log(removeBookInShoppingList)
  //   }
 
  //  })
  
  // for (let i = 0; i < murkup.length; i--)
  
 
  // listPars.length -=1
  
   
  
  
  // murkup.removeChild(document.querySelector('.container'));
  // murkup.classList.remove('container');
  // localStorage.removeItem("shopping-list")





// Отримуємо URL
function toGetUrl(evt) {
  for (const e of evt) {
    return e.url
  }

}




