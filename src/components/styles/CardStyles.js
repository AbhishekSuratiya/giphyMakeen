import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';
import Constants from '../../constants/Constants';
import Elevation from '../../theme/Elevation';

export default StyleSheet.create({
  container: {
    height: 100,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: 'white',
    ...Elevation.style.number6,
    // backgroundColor: 'red',
  },
});
