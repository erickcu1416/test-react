import axios from 'axios';

const END_POINT = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com';

export const instance = axios.create({
  baseURL: END_POINT,
  // headers: {
  //   'Access-Control-Allow-Origin': true
  // },
  timeout: 1000000
});

