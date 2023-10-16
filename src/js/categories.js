import Notiflix from 'notiflix';
import { getCategoryList, getBooksByCategory, getTopBooks } from './book-api';
import { openModal } from './remote-modal';
// import Swiper, { Navigation } from 'swiper';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';

const categories = document.querySelector('.categories');
const booksContainer = document.querySelector('.books-container');
const listTitle = document.querySelector('.list-title');
const listOfBooks = document.querySelector('.list-of-books');


// const swiper = new Swiper('.swiper', {
//   slidesPerView: 1,
//   spaceBetween: 24,

//   modules: [Navigation],

//   navigation: {
//     prevEl: '.swiper-btn-prev',
//     nextEl: '.swiper-btn-next',
//   },

//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 1,
//     },
//     // when window width is >= 480px
//     768: {
//       slidesPerView: 3,
//     },
//     // when window width is >= 640px
//     1440: {
//       slidesPerView: 5,
//     },
//   },
// });


getCategoryList()
  .then(data => {
    const allCategories = document.createElement('li');
    allCategories.textContent = 'All categories';
    allCategories.classList.add('list-item', 'all-categories');
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

displayTopBooks();

// Функція для відображення top-книг
async function displayTopBooks() {
  return getTopBooks()
    .then(data => {
      console.log(data);
      const topBooksHTML = createTopBooks(data);
      listOfBooks.innerHTML = topBooksHTML; // Виводимо отримані top-books
    })
    .catch(error => {
      console.error(error);
      Notiflix.Notify.failure('Failed to fetch top books');
    });
}

function createTopBooks(arr) {
  let html = arr
    .map(({
      list_name: listName,
      books
    }) => {
      return `<li class="category-of-books swiper">
      <h2 class="category-name">${listName}</h2>
       <ul class="list-of-books-by-category swiper-wrapper">${createBookCard(books)}</ul>
       <div class="swiper-btn-prev"></div>
       <div class="swiper-btn-next"></div>
       <div class="button-wrapper"><button class="seemore-btn" data-category="${listName}" >See more</button></div>
       </li>
      `;
    })
    .join('');
  return html;
}

categories.addEventListener('click', async e => {
  console.log(e.target.textContent);
  const targetCategory = e.target.textContent;
  try {
    if (targetCategory === 'All categories') {
      return displayTopBooks();
    }

    const selectedCategory = await getBooksByCategory(targetCategory);
    const booksHTML = createBookCard(selectedCategory);
    booksContainer.innerHTML = booksHTML;
  } catch (error) {
    console.error(error);
    Notiflix.Notify.failure(
      'Unfortunately there are no books under the selected category'
    );
  }
});

function createBookCard(arr) {
  const booksCard = arr
    .map(({
      _id,
      author,
      title,
      book_image
    }) => {
      return `<li class="book-card swiper-slide" >
          <a href="#" class="book-link">
            <div class="hole-image-wrapper">
             <img data-book-id="${_id}" class="book-image-category" src="${book_image}" width="180" height="256"  alt="${title}" loading="lazy"/>
             <div class="image-overlay"></div>
            </div>
            <h3 class="book-title">${title}</h3>
            <p class="author">${author}</p>
          </a>
        </li>
      `;
    })
    .join('');
  return booksCard;
}

booksContainer.addEventListener('click', async e => {
  e.preventDefault();
  if (e.target.dataset.category) {
    const targetCategory = e.target.dataset.category;
    const targetCategoryText = e.target.textContent;

    const selectedCategory = await getBooksByCategory(targetCategory);
    const booksHTML = createBookCard(selectedCategory);
    listTitle.textContent = targetCategoryText
    listOfBooks.innerHTML = booksHTML;
  }
  if (e.target.dataset.bookId) {
    openModal(e.target.dataset.bookId);
  }
});
