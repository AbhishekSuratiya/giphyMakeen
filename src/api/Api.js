import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://api.giphy.com/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const Api = {
  fetchGifs: async query => {
    return await Axios.get('/gifs/search', {
      params: {
        q: query,
        api_key: 'BvFV6zTeyxB9U8Y4SZsxL0Hn3MmHkuXq',
      },
    });
  },
};

export default Api;
