

const murkup = document.querySelector(".body");


window.addEventListener("load",  murkupBook);



function murkupBook() {
   const list = localStorage.getItem("shopping-list")
   const listPars = JSON.parse(list)
   
   
  
   listPars.map(({_id, buy_links,  author, title, description, book_image, list_name}) => {
    buy_links.map(({url}) => {
     
     })
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
    <li class="platform-svg">
      <a href="" target="_blank" rel="noopener noreferrer">
      <img  class="icon" src="${book_image}" alt="${title}" >
      </a>
    </li>
  </ul>
</div>
</div>
</div>
</section>`)

  })
  const removeButton = document.querySelector(".remove-book")
  removeButton.addEventListener ("click", toRemoveMurkup)
   console.log(removeButton)

}


function toRemoveMurkup() {
  
  murkup.removeChild(document.querySelector('.container'));
  // murkup.classList.remove('container');
  console.log(murkup)

}



