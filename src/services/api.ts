import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://contact-book-deploy.onrender.com',
  timeout: 5000,
});
