import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default Axios;
