export default class ShoppingList {
  #KEY = 'shopping-list';
  #shoppingList = [];

  constructor() {
    this.#init();
    this.#checkLocalStorage();
  }

  #init() {
    this.#shoppingList = JSON.parse(localStorage.getItem(this.#KEY)) || [];

    if (!this.#shoppingList) {
      localStorage.setItem(this.#KEY, '[]');
    }
  }

  #checkLocalStorage() {
    if (this.#shoppingList.length > 0) {
      this.#handleNonEmptyStorage();
    } else {
      this.#handleEmptyStorage();
    }
  }

  #handleNonEmptyStorage() {
    const notEmptyStorage = document.querySelector(".empty-basket-wrap");
    if (notEmptyStorage) {
      notEmptyStorage.style.display = 'none';
    }
  }

  #handleEmptyStorage() {
    const emptyStorage = document.querySelector(".empty-basket-wrap");
    if (emptyStorage) {
      emptyStorage.style.display = 'block';
    }
  }

  setBook(book) {
    this.#shoppingList = JSON.parse(localStorage.getItem(this.#KEY)) || [];
    this.#shoppingList.push(book);
    localStorage.setItem(this.#KEY, JSON.stringify(this.#shoppingList));
  }

  removeBook(bookId) {
    this.#shoppingList = JSON.parse(localStorage.getItem(this.#KEY)) || [];

    const indexToRemove = this.#shoppingList.findIndex(book => book._id === bookId);
    if (indexToRemove !== -1) {
      this.#shoppingList.splice(indexToRemove, 1);
    }

    localStorage.setItem(this.#KEY, JSON.stringify(this.#shoppingList));
  }

  findBook(bookId) {
    this.#shoppingList = JSON.parse(localStorage.getItem(this.#KEY)) || [];

    const isBookAdded = this.#shoppingList.some(book => book._id === bookId);

    return isBookAdded;
  }
}
