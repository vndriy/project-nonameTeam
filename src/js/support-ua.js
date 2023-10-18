import $ from 'jquery';
import 'slick-carousel';
import { supportArr } from './support-cards';

const refs = {
  showAllBtn: document.querySelector('.scroll-list-button'),
  supportCard: document.querySelector('.js-card'),
  list: document.querySelector('.js-support-list'),
  buttonUp: document.querySelector('.button-up'),
};

refs.list.insertAdjacentHTML('beforeend', renderSupport(supportArr));

$('.js-support-list').slick({
  vertical: true,
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 3,
  prevArrow: `<div></div>`,
  nextArrow: `
      <button type="button" class="scroll-list-button">
        <svg class="button-scroll-ok" width="22" height="32">
          <use href="./img/supportUkraine/icons.svg#icon-ok"></use>
        </svg>
      </button>
    `,

  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 6,
        slidesToScroll:3,
      },
    },
  ],
});

function renderSupport(supportArr) {
const markup = supportArr
  .map(({ title, url, img }, index) => {
    const supportListNumber = String(index + 1).padStart(2, '0');
      return `
      <div>
      <div class="support-item">
      <span class="support-number">${supportListNumber}</span><a class="support-link link" href="${url}" target="_blank" rel="noopener norferrer">
      <img class="img-support" src="${img}" alt=${title}/>
      </a>
      </div>
    </div>`;
    })
    .join('');
  return markup;
}



// const options = {
//   vertical: true,
//   dots: false,
//   infinite: true,
//   slidesToShow: 6,
//   slidesToScroll: 3,
//   prevArrow: `<div></div>`,
//   nextArrow: ` <div>
//       <button type="button" class="scroll-list-button">
//         <svg class="button-scroll-ok" width="22" height="32">
//           <use href="./img/supportUkraine/icons.svg#icon-ok"></use>
//         </svg>
//       </button>
//     </div>`,

//   responsive: [
//     {
//       breakpoint: 767,
//       settings: {
//         slidesToShow: 6,
//         slidesToScroll:3,
//       },
//     },
//   ],
// };




// let areItemsVisible = true;

// function createSupportItems(supportArr, startIndex, endIndex) {
//   supportListNumber();
//   return supportArr
//     .slice(startIndex, endIndex)
//     .map(({ title, url, img }) => {
//       return `
//         <li class="support-item">
//           <a class="support-link link" href="${url}" target="_blank" rel="noopener noreferrer">
//             <img class="img-support" src="${img}" alt="${title}" />
//           </a>
//         </li>
//       `;
//     })
//     .join('');
// }

// function supportListNumber() {
//   const supportNumber = document.querySelectorAll('.support-item');
//   supportNumber.forEach((item, index) => {
//     let number = (index + 1).toString().padStart(2, '0');
//     item.innerHTML = `<span class="support-number">${number}</span> ${item.innerHTML}`;
//   });
// }

// supportListNumber();

// function renderSupport(supportArr, startIndex, endIndex) {
//   const supportItemsHTML = createSupportItems(supportArr, startIndex, endIndex);
//   refs.list.innerHTML = supportItemsHTML;
// }

// function toggleItemsVisibility() {
//   const startIndex = areItemsVisible ? 0 : 3;
//   const endIndex = areItemsVisible ? 6 : 9;

//   renderSupport(supportArr, startIndex, endIndex);

//   areItemsVisible = !areItemsVisible;

// }

// refs.showAllBtn.addEventListener('click', toggleItemsVisibility);

// // Изначально отобразите первые 6 элементов
// renderSupport(supportArr, 0, 6);

// function visibleItems() {
//   const listItems = document.querySelectorAll('.support-item');
//   console.log(listItems);
//   for (let i = 0; i < listItems.length; i += 1){
//     if (i < 6) {
//       listItems[i].style.display = 'flex';
//     } else {
//       listItems[i].style.display = 'none';
//     }
//   }
// }

// visibleItems();

// refs.showAllBtn.addEventListener('click', onClickShowButtonAll);

// function onClickShowButtonAll () {
//   const listItems = document.querySelectorAll('.support-item');
//   listItems.forEach(item => {
//     item.style.display = 'flex';
//   });

//   refs.supportCard.style.maxHeight = 'none';

//   refs.showAllBtn.style.display = 'none';
//   refs.buttonUp.style.display = 'block';
//   refs.buttonUp.style.marginTop = "24px";
//   refs.buttonUp.style.marginBottom = "0";

//   refs.showAllBtn.removeEventListener('click', onClickShowButtonAll);
//   refs.buttonUp.addEventListener('click', onClickButtonUp);
// }

// function onClickButtonUp() {
//   if (window.innerWidth <= 767) {
//     refs.supportCard.style.maxHeight = "460px";
//   } else {
//     refs.supportCard.style.maxHeight = "474px";
//   }

//   visibleItems();
//   refs.buttonUp.style.display = 'none';
//   refs.showAllBtn.style.display = 'block';
//   refs.buttonUp.removeEventListener('click', onClickButtonUp);
//   refs.showAllBtn.addEventListener('click', onClickShowButtonAll);
// }
