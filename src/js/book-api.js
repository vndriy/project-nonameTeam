import axios from "axios";

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