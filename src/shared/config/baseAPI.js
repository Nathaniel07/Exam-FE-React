import axios from 'axios';

const baseAPI = axios.create({
  baseURL: 'http://localhost:3001',
});

export default baseAPI;
