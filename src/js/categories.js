import Notiflix from 'notiflix';
import { getCategoryList, getBooksByCategory, getTopBooks } from './book-api';
import { openModal } from './remote-modal';

const categories = document.querySelector('.categories');
const booksContainer = document.querySelector('.list-of-books');


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
      // listItem.dataset.categoryId = category._id;
      categories.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error(error);
  });

  displayTopBooks() 

  // Функція для відображення top-книг
  async function displayTopBooks() {
  return getTopBooks()
  .then(data => {
    console.log(data);
    const topBooksHTML = createTopBooks(data);
  booksContainer.innerHTML = topBooksHTML; // Виводимо отримані top-books
 
})
  .catch(error => {
    console.error(error);
    Notiflix.Notify.failure('Failed to fetch top books');
  });
  
}

function createTopBooks(arr) {
  let html = arr
    .map(({ list_name: listName, books }) => {
      return `
      <h2>${listName}<h2/>
       ${createBookCard(books)}
       <button class="seemore-btn" data-category="${listName}" >See more</button>
      `;
    })
    .join('');       
  return html;
}
  
categories.addEventListener('click', async e => {
  console.log(e.target.textContent)
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
    Notiflix.Notify.failure('Unfortunately there are no books under the selected category');
  }
});

function createBookCard(arr) {
  // console.log("arr", arr);
  const booksCard = arr
    .map(({ _id, author, title, book_image }) => {
      return `<div>
        <li class="book-card" >
          <a href="#" class="book-link">
            <div class="overlay-wrapper">
            
              <img data-book-id="${_id}" class="book-image-category" src="${book_image}" width="180" height="256"  alt="${title}" loading="lazy"/>
            </div>
            <h2 class="book-title">${title}</h2>
            <p class="author">${author}</p>
          </a>
        </li></div>
      `;
    })
    .join('');

  return booksCard;
}

booksContainer.addEventListener('click', async (e) => {
  e.preventDefault();
if (e.target.dataset.category) {
  const targetCategory = e.target.dataset.category;
  const selectedCategory = await getBooksByCategory(targetCategory);
  const booksHTML = createBookCard(selectedCategory);
    booksContainer.innerHTML = booksHTML;
}
if (e.target.dataset.bookId) {
    openModal(e.target.dataset.bookId);
 }

})

