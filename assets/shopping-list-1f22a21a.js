import"./support-ua-d8e8f0bb.js";document.querySelector(".body");document.querySelector(".container-general");const a=document.querySelector(".shopippping-list");function l(t){const s=t.map(({_id:e,buy_links:i,author:n,title:o,description:p,book_image:c,list_name:r})=>`<li class="shopping-list__item">
 <img class="img" src="${c}" alt="${o}" >

 <div class="shopping-list__description">
 <div class="remove-book ">
 <button type="button" class="delete-btn" data-id='${e}' ">
     <svg class="svg-button" >
      <use href="./img/icons.svg#icon-dump"></use>
     </svg>
     </button>
 </div>
 <h2 class="name">${o}</h2>
 <p class="category">${r}</p>
 <p class="description">${p}</p>

 <div class="svg">
 <p class="author">${n}</p>
 <ul>
 </ul>
 </div>
 </li>`).join("");a.innerHTML=s}const g=document.querySelector(".empty-basket-wrap"),u=document.querySelector(".shopippping-list");u.addEventListener("click",d);m();function d(t){if(t.target.nodeName!=="BUTTON")return;console.log();const s=JSON.parse(localStorage.getItem("shopping-list"));if(!s||s.length===0)return;const e=t.target.dataset.id,i=s.filter(({_id:n})=>e!==n);l(i),localStorage.setItem("shopping-list",JSON.stringify(i))}function m(){const t=JSON.parse(localStorage.getItem("shopping-list"));if(!t||t.length===0){g.style.display="block";return}l(t)}
