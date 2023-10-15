export default class ShoppingList {
  #KEY = 'shopping-list';
  #shoppingList = [];

  constructor() {
    this.#init();
  }

  #init() {
    this.#shoppingList = JSON.parse(localStorage.getItem(this.#KEY));

    if (!this.#shoppingList) {
      localStorage.setItem(this.#KEY, '[]');
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
