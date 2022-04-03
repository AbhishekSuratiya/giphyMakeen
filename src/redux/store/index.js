import {configureStore} from '@reduxjs/toolkit';
import gifSlice from '../reducers/gifReducer';
import {logger} from '../logger';

const store = configureStore({
  reducer: {
    gifStore: gifSlice.reducer,
  },
  // Uncomment this to view redux logs
  // middleware: [logger],
});

export default store;
