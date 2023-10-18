import Notiflix from 'notiflix';
import { getCategoryList, getBooksByCategory, getTopBooks } from './book-api';
import { openModal } from './remote-modal';

const categories = document.querySelector('.categories');
const booksContainer = document.querySelector('.books-container');
// const sectionContainer = document.querySelector('.section-container')
const listTitle = document.querySelector('.list-title');
// const listTitleOfSection = document.querySelector('.list-title-of-section');
// const listOfBooksOfSection = document.querySelector('.list-of-books-of-section')
const listOfBooks = document.querySelector('.list-of-books');


function createCategoryTitle(list_name) {
  const words = list_name.split(' ');
  const lastWord = words.pop();
  const designedTitle = words.join(' ') + ' <span class="list-title-span">' + lastWord + '</span>';
  return `<h1 class="all-books-title">${designedTitle}</h1>`;
}

// function handleBookCardClick(e) {
//   if (e.target.dataset.bookId) {
//     openModal(e.target.dataset.bookId);
//   }
// }


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
  try {
    Notiflix.Loading.standard('Loading...', {
      svgColor: '#4F2EE8',
    });
    const data = await getTopBooks(); // Отримуємо дані з api
    const topBooksHTML = createTopBooks(data); // Створюємо HTML 
    listOfBooks.innerHTML = topBooksHTML; // Виводимо "top books" 
    Notiflix.Loading.remove();
    // Очищаємо вміст з інших секцій
    booksContainer.style.display = 'block';
    // sectionContainer.style.display = 'none';
    // listOfBooksOfSection.innerHTML = '';
    // listTitleOfSection.textContent = '';
    // booksContainer.addEventListener('click', handleBookCardClick);
  } catch (error) {
    console.error(error);
    Notiflix.Notify.failure('Failed to fetch top books');
  }
}

function createTopBooks(arr) {
  let html = arr
    .map(({
      list_name: listName,
      
      books,
    }) => {
      return `<li class="category-of-books">
      <h2 class="category-name">${listName}</h2>
       <ul class="list-of-books-by-category">${createBookCard(books)}</ul>
       <div class="button-wrapper"><button class="seemore-btn" data-category="${listName}">See more</button></div>
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
    Notiflix.Loading.standard('Loading...', {
      svgColor: '#4F2EE8',
    });
    if (e.target.classList.contains('all-categories')) {
      listTitle.innerHTML = `Best Sellers <span class="list-title-span">Books</span>`
       return displayTopBooks();
    }
    const selectedCategory = await getBooksByCategory(targetCategory);
    const booksHTML = createBookCard(selectedCategory);
    // booksContainer.style.display = 'none';
    // sectionContainer.style.display = 'block';
    
    listTitle.innerHTML = createCategoryTitle(targetCategory);
    listOfBooks.innerHTML = booksHTML;
    Notiflix.Loading.remove();
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
      book_image,
      description
    }) => {
      if(description == ''){
        return `<li class="book-card">
          <a href="#" class="book-link">
            <div class="whole-image-wrapper">
             <img data-book-id="${_id}" class="book-image-category" src="${book_image}" width="180" height="256"  alt="${title}" loading="lazy"/>
             <div class="image-overlay">NO DESCRIPTION</div>
            </div>
            <h3 class="book-title">${title}</h3>
            <p class="author">${author}</p>
          </a>
        </li>
      `;
      }
      else{
      return `<li class="book-card">
          <a href="#" class="book-link">
            <div class="whole-image-wrapper">
             <img data-book-id="${_id}" class="book-image-category" src="${book_image}" width="180" height="256"  alt="${title}" loading="lazy"/>
             <div class="image-overlay">${description}</div>
            </div>
            <h3 class="book-title">${title}</h3>
            <p class="author">${author}</p>
          </a>
        </li>
      `;
    }})
    .join('');
  return booksCard;
}


booksContainer.addEventListener('click', async e => {
  e.preventDefault();
  if (e.target.dataset.category) {
    const targetCategory = e.target.dataset.category;
    const selectedCategory = await getBooksByCategory(targetCategory);
    const booksHTML = createBookCard(selectedCategory);
    listTitle.innerHTML = createCategoryTitle(targetCategory)
    // booksContainer.addEventListener('click', handleBookCardClick);

    listOfBooks.innerHTML = booksHTML;
  }
  if (e.target.dataset.bookId) {
    openModal(e.target.dataset.bookId);
  }
});


// sectionContainer.addEventListener('click', async e => {
//   e.preventDefault();
//   if (e.target.dataset.category) {
//     const targetCategory = e.target.dataset.category;
//     const selectedCategory = await getBooksByCategory(targetCategory);
//     const booksHTML = createBookCard(selectedCategory);
//     listTitle.innerHTML = createCategoryTitle(targetCategory)
//     booksContainer.addEventListener('click', handleBookCardClick);

//     listOfBooks.innerHTML = booksHTML;
//   }
//   if (e.target.dataset.bookId) {
//     openModal(e.target.dataset.bookId);
//   }
// });