import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  gifList: [],
  count: 0,
};

const gifSlice = createSlice({
  name: 'gif',
  initialState,
  reducers: {
    setGifList(state, action) {
      state.gifList = action.payload;
    },
    setGifData(state, action) {
      state.gifData = action.payload;
    },
  },
});

export const gifActions = gifSlice.actions;
export default gifSlice;
