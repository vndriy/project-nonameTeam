import"./main-7d288ab4.js";const p=document.querySelector(".body"),u=document.querySelector(".container-general");window.addEventListener("load",g);function g(){const o=localStorage.getItem("shopping-list"),s=JSON.parse(o);if(s.length===0){u.classList.add("block-hidden");return}else d(s)}function m(o){for(const s of o)return s.url}function d(o){o.map(({_id:t,buy_links:r,author:a,title:e,description:n,book_image:l,list_name:c})=>{const i=r[1];p.insertAdjacentHTML("beforeend",`
      <section data-action="${t}" class="shopping-container" >
 <picture class="picture"> 
 <img class="img" src="${l}" alt="${e}" >
 </picture>
 <div class="book-description">
 <div class="remove-book "> 
 <button type="button" class="${t} button-svg ">
     <svg class="svg-button" >
      <use href="./img/icons.svg#icon-dump" class="${t}"></use>
     </svg>
     </button> 
 </div>
 <h2 class="name">${e}</h2>
 <p class="category">${c}</p>
 <p class="description">${n}</p>
 
 <div class="svg">
 <p class="author">${a}</p>
 <div>
   <ul class="platform">
   <li class="platform-svg amazon">
   <a href="${m(r)}" target="_blank" rel="noopener noreferrer">
   <img src="../img/amazon.png" alt="" >
   </a>
   </li>
   <li class="platform-svg book">
   <a href="${i.url}" target="_blank" rel="noopener noreferrer">
   <img src="../img/book.png " alt="" >
   </a>
   
 </li>
   </ul>
 </div>
 </div>
 </div>
 </section>`)}),document.querySelectorAll(".remove-book").forEach(t=>{t.addEventListener("click",v)})}function v(o){const s=localStorage.getItem("shopping-list"),t=JSON.parse(s),r=t.filter(e=>e._id===o.target.classList.value),a=t.filter(e=>e._id!==o.target.classList.value);r&&(localStorage.setItem("shopping-list",JSON.stringify(a)),location.reload())}
