import{a as f}from"./header-a96df3e5.js";const S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN/SURBVHgB7VdJjExBGP7+6uluYmgkthmS0YdhLpYgHIZEuFhCiHBxJXFzEOHiKBFbuFhCxBEniUQcjEhExBJMIhwsI5a2RmaEWbpf/f5+vVW9rvf6dTJu8yeVrqr31V9f/VtVA2NSEor6yOfTnV6y0E2gaQpIaY7Gm6IIrDXyDP6c0N4j2oWXaIYEX8Q8RvKKdBdi9OQtjeTX0B70oREJPof5rJIPQJQpz8DNNWw+EpcnxlLaNdJrIlrqllDqpqzL+GvdPBvMR+KSovYaM+YT1XZQJqJwNrUVmjqkodg48BvW2DHmkLH8dnrn0uvMfS0SxLSaWYDlhsBvWINjjJBxqa82mPta7hCWWXKZuWUikN0Iamkt2gvc3wd8vC2slY1rXwWamAUSKfDfHPDtMfAnB4eH2kJJKKY0cwC/7ABo0V4gPcnQIfL1CfStncDAe6B1NtTaC8DsVTZmuB/88Ai495Sc0FRMrda+5kB7MjZ8SR2bQcsPWQSqMmMJaO0lwYmSTdctAlVJZ0ArD4Oy26yYUcwq1BLggHknzEGUUNsKcKYLmNoVicO4GaVYqIi2XW6T8IqaDUDANU6ZsqAxhv14q0VbIOzswKxEb0V0jGpALY0QJb26Vhg4cDpbg2+mJi3BMYoWw3ZBlCWgFWplluNv0CyJaEuYNGOW5dgkjHGgvtS7o2yE0uI4loiJqViCAoTgsAQb2UEajfXHwFRLtt8v8ohKUU7YlS2OqWORgBUTHBmYdXXC6A9JCf7xxvcntS9yY7w8+KdgBvtB0+cB4yeXiVJdgQolIbcoWyW+mCCfnkPfOAjOPRVFhdLkuMlQy3dDrdlftZbuOQF+cAY89AuVoKb2xVBbTjeXHfImLNe1Eki/kDvh0WU5YcFYKN//9kPfOSrdhG8Jfesw9L2TZUgtu/jDM3inusUiGcttHBUTYonf1Y2KMvDD/Iqg6J5jQEc3+NlVub4TcIuk4+Bva70E83AoCU9TLgHrzHWxSdXT+DSA13f90l3JJK7D1PQYFehdgKbBiNUNjni2uZ5u/s1b/4SDS09lXlb0uA5WYU4j+2a+kgTpxP+TvtTRL3MRZgn/DtV6OzQX/EAa7ebxgBTD9UFWzuTlAzM78sMoPiKzCBNXwEQK97KiHenjuVcuVeHL9s7q8pRaxqzbpJImm/0bKPEyIhn8nRN837X5mATlH/NXv+oaRoVuAAAAAElFTkSuQmCC",i=document.querySelector(".body"),m=document.querySelector(".empty-basket-wrap"),h=document.querySelector("#darkmode-toggle");h.addEventListener("click",b);i.addEventListener("click",v);window.addEventListener("load",d);function B(o){for(const t of o)return t.url}function k(o){return o[1].url}function y(o){const t=o.map(({_id:e,buy_links:n,author:c,title:r,description:l,book_image:A,list_name:g})=>`
      <section data-action="${e}" class="shopping-container" >
 <picture class="picture"> 
 <img class="img" src="${A}" alt="${r}" >
 </picture>

 <div class="book-description">
 <button type="button" data-action="${e}" class="button-trash remove-book">
    <i data-action="${e}" class="fa-regular fa-trash-can icon-trash"></i>
     </button>
 <h2 class="name">${r}</h2>
 <p class="category">${g}</p>
 <p class="description">${l}</p>
 
 <div class="svg">
 <p class="author">${c}</p>
 <div>
   <ul class="platform">
   <li class="platform-svg amazon ">
   <a href="${B(n)}" target="_blank" rel="noopener noreferrer">
   <img src="${f}" alt="" class="modal-icon-amazon">
   </a>
   </li>
   <li class="platform-svg book">
   <a href="${k(n)}" target="_blank" rel="noopener noreferrer">
   <img src="${S}" alt="" class="modal-icon-apple">
   </a>
   
 </li>
   </ul>
 </div>
 </div>
 </div>
 </section>`).join("");i.innerHTML=t}function v(o){if(o.target.nodeName!=="use"&&o.target.nodeName!=="BUTTON"&&!o.target.classList.contains("icon-trash")){console.log(o.target.nodeName);return}console.log();const t=JSON.parse(localStorage.getItem("shopping-list"));if(!t||t.length===0)return;const e=o.target.dataset.action;t.filter(c=>c._id===e);const n=t.filter(c=>c._id!==e);localStorage.setItem("shopping-list",JSON.stringify(n)),d(),n.length===0&&(i.setAttribute("hidden",""),m.style.display="block")}function b(){const o=localStorage.getItem("darkMode"),t=document.querySelectorAll(".shopping-container"),e=document.querySelectorAll(".name"),n=document.querySelectorAll(".category"),c=document.querySelectorAll(".description"),r=document.querySelectorAll(".amazon"),l=document.querySelectorAll(".book");if(o==="enabled"){a(e),a(n),a(c),a(t),p(r),p(l),L(r);return}else{s(e),s(n),s(c),s(t),u(r),u(l),E(r);return}}function a(o){for(const t of o)t.classList.add("hover")}function s(o){for(const t of o)t.classList.remove("hover")}function u(o){for(const t of o)t.classList.remove("color")}function p(o){for(const t of o)t.classList.add("color")}function L(o){for(const t of o)t.classList.add("yu")}function E(o){for(const t of o)t.classList.remove("yu")}function d(){const o=localStorage.getItem("shopping-list"),t=JSON.parse(o);if(t.length===0){i.classList.add("block-hidden");return}else{m.style.display="none",y(t);const e=localStorage.getItem("darkMode");if(console.log(e),e==="enabled"){const n=document.querySelectorAll(".shopping-container"),c=document.querySelectorAll(".name"),r=document.querySelectorAll(".category"),l=document.querySelectorAll(".description");a(c),a(r),a(l),a(n)}else return}}
