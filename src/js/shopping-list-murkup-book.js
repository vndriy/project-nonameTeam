// `<section class="container">
// <picture class="picture"> 
//   <img class="img" src="${}" alt="${}" >
// </picture>
// <div class="book-description">
//   <div class="remove-book"> 
//     <svg viewBox="0 0 28 28" fill="none">
//     <use href="./img/icons.svg#icon-dump" class="border"></use>
//       <ellipse cx="14" cy="14" rx="14" ry="14" fill="#4F2EE8"/>
//       </svg>
     
//   </div>
//   <h2 class="name">${}</h2>
//   <p class="category">${}</p>
//   <p class="description">${}</p>
 
//   <div class="svg">
//     <p class="author">${}</p>
//     <div>
//     <ul class="platform">
//       <li class="platform-svg">
//         <a href="" target="_blank" rel="noopener noreferrer">
//           <svg class="icon">
//             <use href="${}" class="support"></use>
//           </svg>
//         </a>
//       </li>
//     </ul>
//   </div>
//   </div>
// </div>
// </section>`

const murkup = document.querySelector(".body");
const removeButton = document.querySelector(".remove-book")

window.addEventListener("load",  murkupBook);
// removeButton.addEventListener ("click", toRemoveMurkup)

function murkupBook() {
    // localStorage.getItem("mas")
  //  return mas.createBookMurkup()
}

// function createBookMurkup(evt) {

  const id = "642fd89ac8cf5ee957f12361";
  const author =  "Barbara O'Connor"


  
  // fetch (`https://books-backend.p.goit.global/books/${id.string}`)
  //  .then(response => {
  //   return response.json()
    
  //  })
  //  .then(data => {
  //    console.log(data)
  //    data.map(({books}) => {
  //     console.log(books)
  //     books.map(({_id}) => {
  //       console.log(_id)
  //     })
  //    })
  //  })
  //  .catch(error => {
  //    console.log(error)
  //  });

  fetch (`https://books-backend.p.goit.global/books/top-books`)
   .then(response => {
    return response.json()
    
   })
   .then(data => {
     console.log(data)
     data.map(({books}) => {
      console.log(books)
      books.map(({_id, buy_links, author, title, description, book_image, list_name}) => {
        console.log(_id)
        murkup.insertAdjacentHTML("beforeend", `
         <section class="container">
  <picture class="picture"> 
    <img class="img" src="${book_image}" alt="${title}" >
  </picture>
  <div class="book-description">
    <div class="remove-book"> 

        <svg class="svg-button">
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
            <svg class="icon">
              <use href="${buy_links}" class="support"></use>
       </svg>
          </a>
        </li>
      </ul>
    </div>
    </div>
</div>
</section>`)

      })
     })
   })
   .catch(error => {
     console.log(error)
   })

  

    evt.map(({buy_links, author, title, description, book_image, list_name}) => {
        murkup.insertAdjacentHTML("afterbegin", `
        <section class="container">
        <picture class="picture"> 
          <img class="img" src="${book_image}" alt="${title}" >
        </picture>
        <div class="book-description">
          <div class="remove-book"> 
            <svg viewBox="0 0 28 28" fill="none">
            <use href="./img/icons.svg#icon-dump" class="border"></use>
              <ellipse cx="14" cy="14" rx="14" ry="14" fill="#4F2EE8"/>
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
                  <svg class="icon">
                    <use href="${buy_links}" class="support"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>
        </section>
        `)
    })
    
  


function toRemoveMurkup() {
    // murkup.
    // modal.removeChild(document.querySelector('.container'));
    // modal.classList.remove('container');

  }
  
 
 ` <section class="container">
  <picture class="picture"> 
    <img class="img" src="${book_image}" alt="${title}" >
  </picture>
  <div class="book-description">
    <div class="remove-book"> 

        <svg class="svg-button">
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
            <svg class="icon">
              <use href="${buy_links}" class="support"></use>
       </svg>
          </a>
        </li>
      </ul>
    </div>
    </div>
</div>
</section>`