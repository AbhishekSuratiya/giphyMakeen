import React from 'react';
import {View} from 'react-native';
import Styles from './styles/MainScreenStyles';
import Header from '../components/Header';
import AnimatedList from '../components/AnimatedList';

const MainScreen = () => {
  return (
    <View style={Styles.container}>
      <Header />
      <AnimatedList />
    </View>
  );
};

export default MainScreen;
