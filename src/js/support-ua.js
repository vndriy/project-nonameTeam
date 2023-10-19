import $ from 'jquery';
import 'slick-carousel';
import { supportArr } from './support-cards';
import { getImgRetina } from './support-cards';

const refs = {
  showAllBtn: document.querySelector('.scroll-list-button'),
  list: document.querySelector('.js-support-list'),
};

refs.list.insertAdjacentHTML('beforeend', renderSupport(supportArr));
console.log(document.querySelectorAll('.support-slick-item'));

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
  .map(({ title, url, img, img2x }, index) => {
    const imgUrl = getImgRetina({img, img2x});

    const supportListNumber = String(index + 1).padStart(2, '0');
      return `
      <div class = "support-slick-item">
      <div class="support-item">
      <span class="support-number">${supportListNumber}</span><a class="support-link link" href="${url}" target="_blank" rel="noopener norferrer">
      <img class="img-support" src="${imgUrl}" alt=${title}/>
      </a>
      </div>
    </div>`;
    })
    .join('');
  return markup;
}
