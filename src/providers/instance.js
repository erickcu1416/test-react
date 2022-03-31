import axios from 'axios';

const END_POINT = '';

export const instance = axios.create({
  baseURL: END_POINT,
  headers: {
    'Access-Control-Allow-Origin': true
  },
  timeout: 1000000
});

