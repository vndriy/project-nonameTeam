import"./support-ua-2e7138b7.js";const n=document.querySelector(".body"),l=document.querySelector(".empty-basket-wrap");console.log(l);window.addEventListener("load",g);function g(){const o=localStorage.getItem("shopping-list"),s=JSON.parse(o);if(s.length===0){n.classList.add("block-hidden");return}else l.style.display="none",d(s)}function m(o){for(const s of o)return s.url}function d(o){o.map(({_id:t,buy_links:a,author:r,title:e,description:c,book_image:i,list_name:p})=>{const u=a[1];n.insertAdjacentHTML("beforeend",`
      <section data-action="${t}" class="shopping-container" >
 <picture class="picture"> 
 <img class="img" src="${i}" alt="${e}" >
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
 <p class="category">${p}</p>
 <p class="description">${c}</p>
 
 <div class="svg">
 <p class="author">${r}</p>
 <div>
   <ul class="platform">
   <li class="platform-svg amazon">
   <a href="${m(a)}" target="_blank" rel="noopener noreferrer">
   <img src="../img/amazon.png" alt="" >
   </a>
   </li>
   <li class="platform-svg book">
   <a href="${u.url}" target="_blank" rel="noopener noreferrer">
   <img src="../img/book.png " alt="" >
   </a>
   
 </li>
   </ul>
 </div>
 </div>
 </div>
 </section>`)}),document.querySelectorAll(".remove-book").forEach(t=>{t.addEventListener("click",v)})}function v(o){const s=localStorage.getItem("shopping-list"),t=JSON.parse(s),a=t.filter(e=>e._id===o.target.classList.value),r=t.filter(e=>e._id!==o.target.classList.value);a&&(localStorage.setItem("shopping-list",JSON.stringify(r)),location.reload())}
