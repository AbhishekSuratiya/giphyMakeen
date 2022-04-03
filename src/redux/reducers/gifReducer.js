import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  gifList: [],
  pagination: 0,
  query: '',
};

const gifSlice = createSlice({
  name: 'gif',
  initialState,
  reducers: {
    setGifList(state, action) {
      state.gifList = action.payload;
    },
    setPagination(state) {
      state.pagination = state.pagination + 1;
    },
    setSearchQuery(state, action) {
      state.query = action.payload;
    },
  },
});

export const gifActions = gifSlice.actions;
export default gifSlice;
