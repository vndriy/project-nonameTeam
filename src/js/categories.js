
import {
  listOfCategories,
  listOfBooks
} from "./book-api.js";

   

const categories = document.querySelector('.categories');
const listOfAllBooks = document.querySelector('.list-of-books');
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


const category = 'top-books'

let arrLength;


listOfBooks(category).then(data => {
  data.forEach(library => {
    const libraryArr = library.books.sort((a, b) => a.rank - b.rank);
    if ( window.innerWidth >= 375  && window.innerWidth < 768) {
      arrLength = 1;
      libraryArr.length = arrLength;
      const contain = document.createElement('div');
      const aboutCategory = document.createElement('div');
      const seeMoreBtn = document.createElement('button');
      const bookList = document.createElement('ul')
      seeMoreBtn.textContent = 'see more';
      seeMoreBtn.classList.add('see-more-btn');
      contain.classList.add('contain')
      aboutCategory.classList.add('category-information')
      bookList.classList.add('book-list')
      aboutCategory.textContent = library.list_name;
      contain.append(aboutCategory);
      listOfAllBooks.append(contain)
      libraryArr.forEach(lib => {
        const bookContent = document.createElement('li');
        const bookImage = document.createElement('img');
        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('p');
        bookImage.classList.add('book-image-class');
        bookTitle.classList.add('book-title');
        bookAuthor.classList.add('book-author');
        bookContent.classList.add('book-content');
        bookContent.id = lib._id;
        bookImage.src = lib.book_image;
        bookTitle.textContent = lib.title;
        bookAuthor.textContent = lib.author;
        bookContent.append(bookImage)
        bookContent.append(bookTitle)
        bookContent.append(bookAuthor)
        bookList.append(bookContent)
        contain.append(bookList)
        listOfAllBooks.append(contain)
      })
      contain.append(seeMoreBtn)
    } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
      arrLength = 3;
      libraryArr.length = arrLength;
      const contain = document.createElement('div');
      const aboutCategory = document.createElement('div');
      const seeMoreBtn = document.createElement('button');
      const bookList = document.createElement('ul')
      seeMoreBtn.textContent = 'see more';
      seeMoreBtn.classList.add('see-more-btn');
      contain.classList.add('contain')
      aboutCategory.classList.add('category-information')
      bookList.classList.add('book-list')
      aboutCategory.textContent = library.list_name;
      contain.append(aboutCategory);
      listOfAllBooks.append(contain)
      libraryArr.forEach(lib => {
        const bookContent = document.createElement('li');
        const bookImage = document.createElement('img');
        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('p');
        bookImage.classList.add('book-image-class');
        bookTitle.classList.add('book-title');
        bookAuthor.classList.add('book-author');
        bookContent.classList.add('book-content');
        bookContent.id = lib._id;
        bookImage.src = lib.book_image;
        bookTitle.textContent = lib.title;
        bookAuthor.textContent = lib.author;
        bookContent.append(bookImage)
        bookContent.append(bookTitle)
        bookContent.append(bookAuthor)
        bookList.append(bookContent)
        contain.append(bookList)
        listOfAllBooks.append(contain)
      })
      contain.append(seeMoreBtn)
    } else if (window.innerWidth >= 1440) {
      arrLength = 5;
      libraryArr.length = arrLength;
      const contain = document.createElement('div');
      const aboutCategory = document.createElement('div');
      const seeMoreBtn = document.createElement('button');
      const bookList = document.createElement('ul')
      seeMoreBtn.textContent = 'see more';
      seeMoreBtn.classList.add('see-more-btn');
      contain.classList.add('contain')
      aboutCategory.classList.add('category-information')
      bookList.classList.add('book-list')
      aboutCategory.textContent = library.list_name;
      contain.append(aboutCategory);
      listOfAllBooks.append(contain)
      libraryArr.forEach(lib => {
        const bookContent = document.createElement('li');
        const bookImage = document.createElement('img');
        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('p');
        bookImage.classList.add('book-image-class');
        bookTitle.classList.add('book-title');
        bookAuthor.classList.add('book-author');
        bookContent.classList.add('book-content')
        bookContent.id = lib._id;
        bookImage.src = lib.book_image;
        bookTitle.textContent = lib.title;
        bookAuthor.textContent = lib.author;
        bookContent.append(bookImage)
        bookContent.append(bookTitle)
        bookContent.append(bookAuthor)
        bookList.append(bookContent)
        contain.append(bookList)
        listOfAllBooks.append(contain)
      })
      contain.append(seeMoreBtn)
    }
  })
}).catch(error => {
  console.error(error);
})
