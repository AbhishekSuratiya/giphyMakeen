import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';
import Constants from '../../constants/Constants';
import Elevation from '../../theme/Elevation';
import Fonts from '../../theme/Fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.purple.number40,
    padding: 16,
    borderRadius: 8,
  },
  text: {
    fontFamily: Fonts.semiBold,
    color: Colors.white.number100,
  },
});
