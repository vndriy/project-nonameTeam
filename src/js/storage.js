export default class ShoppingList {
  #KEY = 'shopping-list';
  #shoppingList = [];

  constructor() {
    this.#init();
    this.#checkLocalStorage();
  }

  #init() {
    this.#shoppingList = JSON.parse(localStorage.getItem(this.#KEY));

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
    // потрібно додати відображення карток
  }

  #handleEmptyStorage() {
    const supportCards = document.querySelector(
      '.shop-list-wrap .support-card'
    );
    const shopListCap = document.querySelector(
      '.shop-list-wrap .empty-basket-wrap'
    );

    if (supportCards && shopListCap) {
      supportCards.style.display = 'block';
      shopListCap.style.display = 'block';
    }
  }

  setBook(book) {
    this.#shoppingList = JSON.parse(localStorage.getItem(this.#KEY));
    this.#shoppingList.push(book);

    localStorage.setItem(this.#KEY, JSON.stringify(this.#shoppingList));
  }

  removeBook(bookId) {
    this.#shoppingList = JSON.parse(localStorage.getItem(this.#KEY));

    const deleteBook = this.#shoppingList.splice(
      this.#shoppingList.findIndex(book => {
        return book._id === bookId;
      }),
      1
    );

    if (deleteBook) {
      localStorage.setItem(this.#KEY, JSON.stringify(this.#shoppingList));
    }

    return deleteBook.length > 0 ? true : false;
  }

  findBook(bookId) {
    this.#shoppingList = JSON.parse(localStorage.getItem(this.#KEY));

    const isBookAdded = this.#shoppingList.find(book => {
      return book._id === bookId;
    });

    return isBookAdded ? true : false;
  }
}
