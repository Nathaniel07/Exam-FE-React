import axios from '../config/baseAPI.js';

export const addData = async (book_title, genre, author) => {

  try {
    return await axios.post(`/api/books/add`, {bookTitle: book_title, genre:genre, author:author});
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getData = async (id) => {

    try {
      return await axios.post(`/api/books/get`, {id: id});
    } catch (error) {
      console.error(error);
      throw error;
    }
};

export const getAllData = async () => {

    try {
      return await axios.get(`/api/books/get-all`);
    } catch (error) {
      console.error(error);
      throw error;
    }
};

export const updateData = async (id, book_title, genre, author) => {

    try {
      return await axios.post(`/api/books/update`, {id: id, bookTitle: book_title, genre:genre, author:author});
    } catch (error) {
      console.error(error);
      throw error;
    }
};

export const deleteData = async (id) => {

    try {
      return await axios.post(`/api/books/delete`, {id: id});
    } catch (error) {
      console.error(error);
      throw error;
    }
};