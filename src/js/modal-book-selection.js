import amazonImg from '../img/amazonImg.png';
import appleBooksImg from '../img/appleBooksImg.png';

const modalContainer = document.querySelector('.modal-book-content-wrap');

export function renderModal(bookDetails) {
  const { book_image, title, author, description, buy_links } = bookDetails;
  console.log(bookDetails);
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
          }" target="_blank">
            <img class="modal-image-amazon" src="${amazonImg}" alt="Amazon shop" loading="lazy">
          </a>
          <a class="modal-book-trading-platform apple" href="${
            buy_links[1].url
          }" target="_blank">
            <img class="modal-image-apple" src="${appleBooksImg}" alt="Apple shop" loading="lazy">
          </a>
      
        </div>
    </div>
  `;

  modalContainer.innerHTML = markup;
}

// function generateMarketplaceLinks(buy_links) {
//   return buy_links
//     .map(({ name, url }) => {
//       const iconId = name.toLowerCase().replace(' ', '-');

//       const markup = img => {
//         return `
//           <li class="trading-platform-color">
//             <a
//               href="${url}" class="modal-book-trading-platform"
//               target="_blank"
//               rel="noopener noreferrer"
//               >
//                 <img class="${iconId}" height="36" width="36" src="${img}" alt="${name}" loading="lazy"/>
//             </a>
//           </li>
//         `;
//       };

//       switch (iconId) {
//         case 'amazon': {
//           return markup(amazonImg);
//         }
//         case 'apple-books': {
//           return markup(appleBooksImg);
//         }
//       }
//     })
//     .join('');
// }
