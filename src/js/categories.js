import { getCategoryList, getTopBooks } from './book-api';
import { openModal } from './remote-modal';

const categories = document.querySelector('.categories');
const listOfAllBooks = document.querySelector('.list-of-books');

getCategoryList()
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

getTopBooks()
  .then(data => {
    data.forEach(library => {
      const libraryArr = library.books.sort((a, b) => a.rank - b.rank);

      const arrLength =
        window.innerWidth >= 375 && window.innerWidth < 768
          ? 1
          : window.innerWidth >= 768 && window.innerWidth < 1440
          ? 3
          : 5;

      const contain = document.createElement('div');
      const aboutCategory = document.createElement('div');
      const seeMoreBtn = document.createElement('button');
      const bookList = document.createElement('ul');
      seeMoreBtn.textContent = 'see more';
      seeMoreBtn.classList.add('see-more-btn');
      contain.classList.add('contain');
      aboutCategory.classList.add('category-information');
      bookList.classList.add('book-list');
      aboutCategory.textContent = library.list_name;
      contain.append(aboutCategory);
      listOfAllBooks.append(contain);

      const booksCard = createBookCard(libraryArr.slice(0, arrLength));
      bookList.innerHTML = booksCard;

      contain.append(bookList);
      listOfAllBooks.append(contain);
      contain.append(seeMoreBtn);
    });
  })
  .catch(error => {
    console.error(error);
  });

function createBookCard(books) {
  const booksCard = books
    .map(({ _id, author, title, book_image }) => {
      return `
        <li class="book-card" data-book-id="${_id}">
          <a href="#" class="book-link">
            <div class="overlay-wrapper">
              <img class="book-image-category" src="${book_image}" alt="${title}" loading="lazy"/>
            </div>
            <h2 class="book-title">${title}</h2>
            <p class="author">${author}</p>
          </a>
        </li>
      `;
    })
    .join('');

  return booksCard;
}
listOfAllBooks.addEventListener('click', e => {
  e.preventDefault();

  const targetBook = e.target.closest('.book-card');
  console.log(targetBook);
  if (targetBook) {
    openModal(targetBook.dataset.bookId);
  }
});
