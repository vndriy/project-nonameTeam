import axios from 'axios';

const BASE_URL = `https://books-backend.p.goit.global`;

export async function getCategoryList() {
  const response = await axios(`${BASE_URL}/books/category-list`);
  return response.data;
}

export async function getTopBooks() {
  const response = await axios(`${BASE_URL}/books/top-books`);
  return response.data;
}

export async function getBooksByCategory(selectedCategory) {
  const response = await axios.get(`${BASE_URL}/books/category?category=${selectedCategory}`);
  return response.data;
}

export async function getBooksById(bookId) {
  const response = await axios.get(`${BASE_URL}/books/${bookId}`);
  return response.data;
}
