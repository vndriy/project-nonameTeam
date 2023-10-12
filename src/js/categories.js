import { listOfCategories } from "book-api.js";

const categories = document.querySelector('.categories');
const listOfBooks = document.querySelector('.list-of-books');
const category_list = 'category-list';
const topBooks = 'top-books';

listOfCategories(category_list)
  .then(data => {
    const allCategories = document.createElement('li');
    allCategories.textContent = 'All categories';
    allCategories.classList.add('list-item');
    categories.appendChild(allCategories);

    data.forEach(category => {
      const listItem = document.createElement('li');
      listItem.classList.add('list-item');
      listItem.textContent = category.list_name;
      categories.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error(error);
  });

listOfCategories(topBooks)
  .then(data => {
    const bestBooksByCategory = {};

    data.forEach(category => {
      const bestBook = findBestBookInCategory(category.books);
      if (bestBook) {
        bestBooksByCategory[category.list_name] = bestBook;
      }
    });
    for (const categoryName in bestBooksByCategory) {
      const category = bestBooksByCategory[categoryName];
      const bookCard = createBookCard(category);
      listOfBooks.appendChild(bookCard);
    }
  })
  .catch(error => {
    console.error(error);
  });

function findBestBookInCategory(books) {
  let bestBook = null;
  let bestRank = Infinity;

  books.forEach(book => {
    if (book.rank < bestRank) {
      bestRank = book.rank;
      bestBook = book;
    }
  });

  return bestBook;
}

function createBookCard(book) {
  const bookCard = document.createElement('div');
  bookCard.classList.add('book-item');

  const bookInfo = document.createElement('p');
  bookInfo.classList.add('category-information');
  bookInfo.textContent = book.list_name;

  const bookCover = document.createElement('img');
  bookCover.src = book.book_image;
  bookCover.classList.add('book-cover');

  const bookTitle = document.createElement('div');
  bookTitle.textContent = book.title;
  bookTitle.classList.add('book-title');

  const bookAuthor = document.createElement('p');
  bookAuthor.textContent = book.author;
  bookAuthor.classList.add('book-author');

  const seeMoreBtn = document.createElement('button');
  seeMoreBtn.textContent = 'see more';
  seeMoreBtn.classList.add('see-more-btn');

  bookCard.appendChild(bookInfo);
  bookCard.appendChild(bookCover);
  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(seeMoreBtn);

  return bookCard;
}
