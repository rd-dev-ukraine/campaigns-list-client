import axios from 'axios';

console.log('set url', process.env.REACT_APP_API_URL)

export const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});