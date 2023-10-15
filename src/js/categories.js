import Notiflix from 'notiflix';
import { getCategoryList, getTopBooks, getBooksByCategory } from './book-api';
import { openModal } from './remote-modal';

const categories = document.querySelector('.categories');
const listOfAllBooks = document.querySelector('.list-of-books');
const categoryTitle = document.querySelector('.category-title');
const categoryBookList = document.querySelector('.category-book-list');

function receiveBookByCategory(selectedCategory) {
  if (selectedCategory && selectedCategory.length > 0) {
    categoryTitle.innerHTML = createCategoryTitle(selectedCategory[0].list_name);
    categoryBookList.innerHTML = createBookCard(selectedCategory);
  } else {
    Notiflix.Notify.failure('Unfortunately there are no books under the selected category');
  }
}

function createCategoryTitle(categoryName) {
  return `Category: ${categoryName}`;
}

function createBookCard(books) {
  const booksCard = books
    .map(({ _id, author, title, book_image }) => {
      return `
        <li class="book-card" data-book-id="${_id}">
          <a href="#" class "book-link">
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
      listItem.dataset.categoryId = category._id;
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

categories.addEventListener('click', async e => {
  e.preventDefault();
  const targetCategory = e.target.closest('.list-item');
  if (targetCategory) {
    const categoryId = targetCategory.dataset.categoryId;
    if (categoryId) {
      try {
        const selectedCategory = await getBooksByCategory(categoryId);
        receiveBookByCategory(selectedCategory);
      } catch (error) {
        console.error(error);
        Notiflix.Notify.failure('Unfortunately there are no books under the selected category');
      }
    } else {
      categoryTitle.innerHTML = 'All Categories';
      categoryBookList.innerHTML = '';
    }
  }
});

listOfAllBooks.addEventListener('click', e => {
  e.preventDefault();

  const targetBook = e.target.closest('.book-card');
  if (targetBook) {
    openModal(targetBook.dataset.bookId);
  }
});


//need help