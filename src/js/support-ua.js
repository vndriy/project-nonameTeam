import { supportArr } from './support-cards';

const refs = {
  showAllBtn: document.querySelector('.scroll-list-button'),
  supportCard: document.querySelector('.js-card'),
  list: document.querySelector('.js-support-list'),
  buttonUp: document.querySelector('.button-up'),
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
    item.innerHTML = `<span class="support-number">${number}</span> ${item.innerHTML}`;
  });
}

supportListNumber();

function visibleItems() {
  const listItems = document.querySelectorAll('.support-item');
  console.log(listItems);
  for (let i = 0; i < listItems.length; i += 1){
    if (i < 6) {
      listItems[i].style.display = 'flex';
    } else {
      listItems[i].style.display = 'none';
    }
  }
}

visibleItems();

refs.showAllBtn.addEventListener('click', onClickShowButtonAll);

function onClickShowButtonAll () {
  const listItems = document.querySelectorAll('.support-item');
  listItems.forEach(item => {
    item.style.display = 'flex';
  });

  refs.supportCard.style.maxHeight = 'none';

  refs.showAllBtn.style.display = 'none';
  refs.buttonUp.style.display = 'block';
  refs.buttonUp.style.marginTop = "24px";
  refs.buttonUp.style.marginBottom = "0";

  refs.showAllBtn.removeEventListener('click', onClickShowButtonAll);
  refs.buttonUp.addEventListener('click', onClickButtonUp);
}

function onClickButtonUp() {
  if (window.innerWidth <= 767) {
    refs.supportCard.style.maxHeight = "460px";
  } else {
    refs.supportCard.style.maxHeight = "474px";
  }

  visibleItems();
  refs.buttonUp.style.display = 'none';
  refs.showAllBtn.style.display = 'block';
  refs.buttonUp.removeEventListener('click', onClickButtonUp);
  refs.showAllBtn.addEventListener('click', onClickShowButtonAll);
}
