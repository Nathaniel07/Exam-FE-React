import axios from "axios";

export const usersAPI = async (email, message = '') => {

  const formData = new FormData();
  formData.append('email', email);
  formData.append('body', message);

  try {
    return await axios.post(`https://reqres.in/api/users`, formData, { headers: { 'Content-Type': 'application/json'}});
  } catch (error) {
    console.error(error);
    throw error;
  }
};
