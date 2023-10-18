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
