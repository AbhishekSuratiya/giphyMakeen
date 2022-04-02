import React from 'react';
import {Image, Text, View} from 'react-native';
import Styles from './styles/CardStyles';
function Card(props) {
  return (
    <View style={Styles.container}>
      <Image source={{uri: null}} style={{width: '100%', height: 100}} />
    </View>
  );
}

export default Card;
