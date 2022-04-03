import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Styles from './styles/ButtonStyles';

function Button(props) {
  return (
    <TouchableOpacity style={Styles.container} onPress={props.onPress}>
      <Text style={Styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
