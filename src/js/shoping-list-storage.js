// import {  murkupBook } from './shopping-list-murkup-book';

// const emptyBasketWrap = document.querySelector('.empty-basket-wrap');
// const shoppingListEl = document.querySelector('.shopippping-list');
// const shoppingListEl = document.querySelector('.body');

// shoppingListEl.addEventListener('click', onDeleteBtnClick);

// init();

// function onDeleteBtnClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   console.log();
//   const shoppingList = JSON.parse(localStorage.getItem('shopping-list'));
//   if (!shoppingList || shoppingList.length === 0) {
//     return;
//   }
//   const itemId = evt.target.dataset.id;
//   const filteresList = shoppingList.filter(({ _id }) => itemId !== _id);
//   murkupBook(filteresList);
//   localStorage.setItem('shopping-list', JSON.stringify(filteresList));
// }

// function init() {
//   const shoppingList = JSON.parse(localStorage.getItem('shopping-list'));
//   if (!shoppingList || shoppingList.length === 0) {
//     emptyBasketWrap.style.display = 'block';
//     return;
//   }

//   murkupBook(shoppingList);
// }
