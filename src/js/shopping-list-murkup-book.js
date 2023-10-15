

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

  
 // Видаляємо книжку  
    function toRemoveMurkup(e) {
   
  const list = localStorage.getItem("shopping-list")
   const listPars = JSON.parse(list)
  const masBook =  listPars.filter(b => b._id === e.target.classList.value)
  console.log(masBook)
 
   const masBooks = listPars.filter(b => b._id !== e.target.classList.value)
   console.log(masBooks)
     
       listPars.filter(b => {
        if(masBook ) {
          
          // murkup.classList.remove('.container');
          murkup.removeChild(document.querySelector('.container'));
          localStorage.setItem("shopping-list", JSON.stringify(masBooks))
        }
      })
  
     
    
  }

 


// Отримуємо URL
function toGetUrl(evt) {
  for (const e of evt) {
    return e.url
  }

}




