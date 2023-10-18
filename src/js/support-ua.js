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

const options = {
  vertical: true,
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 3,
  prevArrow: `<div></div>`,
  nextArrow: refs.showAllBtn,
};

$('.js-support-list').slick(options);

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
