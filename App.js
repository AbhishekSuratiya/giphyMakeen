import React from 'react';
import RootContainer from './src/screens/RootContainer';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
};

export default App;
