import { supportArr } from "./support-cards";

const refs = {
  showAllBtn: document.querySelector('.scroll-list-button'),
  supportCard: document.querySelector('.js-card'),
  list: document.querySelector('.js-support-list'),
};



function renderSupport(supportArr) {
refs.list.innerHTML = supportArr
    .map(({ title, url, img }) => {
      return `
      <li class="support-item">
      <a class="support-link link" href="${url}" target="_blank" rel="noopener norferrer">
      <img class="img-support" src="${img}" alt=${title}/>
      </a>
    </li>`;
    })
    .join('');
  
}

renderSupport(supportArr);

function supportListNumber() {
  const supportNumber = document.querySelectorAll('.support-item');
  supportNumber.forEach((item, index) => {
    let number = (index + 1).toString().padStart(2, '0');
    item.innerHTML = number + ' ' + item.innerHTML;
    console.log(item.innerHTML);
  });
}

supportListNumber();



