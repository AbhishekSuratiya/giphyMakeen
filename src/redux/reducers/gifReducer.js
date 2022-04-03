import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  gifList: [],
  query: '',
  isFetching: false,
};

const gifSlice = createSlice({
  name: 'gif',
  initialState,
  reducers: {
    setGifList(state, action) {
      state.gifList = action.payload;
    },
    setSearchQuery(state, action) {
      state.query = action.payload;
    },
    setIsFetching(state, action) {
      state.isFetching = action.payload;
    },
  },
});

export const gifActions = gifSlice.actions;
export default gifSlice;
