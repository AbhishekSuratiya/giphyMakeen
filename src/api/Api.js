import axios from 'axios';
import Constants from '../constants/Constants';

const Axios = axios.create({
  baseURL: 'https://api.giphy.com/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const Api = {
  fetchGifs: async (query, pagination = 0) => {
    return await Axios.get('/gifs/search', {
      params: {
        q: query,
        api_key: Constants.API_KEY,
        limit: 20,
        offset: pagination * 20,
      },
    });
  },
};

export default Api;
