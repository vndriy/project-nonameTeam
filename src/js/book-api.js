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

export async function getBooksByCategory() {
  const response = await axios.get(`${BASE_URL}/books/category`);
  return response.data;
}

export async function getBooksById() {
  const response = await axios.get(`${BASE_URL}/books/{id}`);
  return response.data;
}
