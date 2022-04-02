import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';
import Constants from '../../constants/Constants';
import Elevation from '../../theme/Elevation';
import Fonts from '../../theme/Fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white.number100,
    paddingHorizontal: 12,
    borderRadius: 16,
    height: Constants.SEARCH_INPUT_HEIGHT,
    ...Elevation.style.number8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    color: Colors.purple.number100,
    flex: 1,
    fontFamily: Fonts.bold,
  },
});
