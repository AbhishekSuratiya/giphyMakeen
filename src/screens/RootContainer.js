import React from 'react';
import {SafeAreaView} from 'react-native';
import MainScreen from './MainScreen';

const RootContainer = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MainScreen />
    </SafeAreaView>
  );
};

export default RootContainer;
