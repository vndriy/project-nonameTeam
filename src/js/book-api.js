import axios from 'axios';

const BASE_URL = `https://books-backend.p.goit.global`;

export async function listOfCategories(keyword) {
  try {
    const response = await axios.get(`${BASE_URL}/books/${keyword}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function getBookDetail(bookId) {
  try {
    const response = await axios.get(`${BASE_URL}/books/${bookId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
