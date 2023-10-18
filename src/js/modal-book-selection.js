import amazonImg from '../img/amazonImg.png';
import appleBooksImg from '../img/appleBooksImg.png';

const modalContainer = document.querySelector('.modal-book-content-wrap');

export function renderModal(bookDetails) {
  const { book_image, title, author, description, buy_links } = bookDetails;
  // console.log(bookDetails);
  const markup = `
    <img
      class="modal-book-cover"
      src="${book_image}" 
      alt="${title}"
      width="335" 
      height="762" 
      loading="lazy"/>
    <div class="modal-book-content-text-wrap">
      <div class="modal-book-text-wrap">
        <div class="modal-book-title-wrap">
          <h3 class="modal-book-title">${title}</h3>
          <p class="modal-book-author">${author}</p>
        </div>
        ${
          description
            ? `<p class="modal-book-description scrollbar">${description}</p>`
            : `<p class="modal-book-description not-description scrollbar">No description</p>`
        }
      </div>
      <div class="trading-platforms">
          <a class="modal-book-trading-platform amazon" href="${
            buy_links[0].url
          }" target="_blank" rel="noreferrer noopener">
            <img class="amazon-img" src="${amazonImg}" alt="Amazon shop" loading="lazy">
          </a>
          <a class="modal-book-trading-platform apple" href="${
            buy_links[1].url
          }" target="_blank" rel="noreferrer noopener">
            <img class="apple-books-img" src="${appleBooksImg}" alt="Apple shop" loading="lazy">
          </a>
      
        </div>
    </div>
  `;

  modalContainer.innerHTML = markup;
}
