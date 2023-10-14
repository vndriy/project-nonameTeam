

const murkup = document.querySelector(".body");


window.addEventListener("load",  murkupBook);



function murkupBook() {
   const list = localStorage.getItem("shopping-list")
   const listPars = JSON.parse(list)
   console.log(listPars.length)
   
   listPars.map(({_id, buy_links,  author, title, description, book_image, list_name}) => {

  
      murkup.insertAdjacentHTML("beforeend", `
      <section class="container">
 <picture class="picture"> 
 <img class="img" src="${book_image}" alt="${title}" >
 </picture>
 <div class="book-description">
 <div class="remove-book"> 
 
     <svg class="svg-button" >
      <use href="./img/icons.svg#icon-dump" ></use>
     </svg>
   
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
   <a href="${toGetUrl(buy_links)}" target="_blank" rel="noopener noreferrer">
   <img src="../img/book.png " alt="" >
   </a>
   
 </li>
   </ul>
 </div>
 </div>
 </div>
 </section>`)
      
 const removeButton = document.querySelector(".remove-book")
removeButton.addEventListener ("click", toRemoveMurkup);
    })
   }
  
  
   








function toRemoveMurkup() {
  console.log(this)
  listPars.length -=1
  murkup.removeChild(document.querySelector('.container'));
  // murkup.classList.remove('container');
  // localStorage.removeItem("shopping-list")

}


function toGetUrl(evt) {
  for (const e of evt) {
    return e.url
  }

}




