import {StyleSheet} from 'react-native';
import Constants from '../../constants/Constants';
import Fonts from '../../theme/Fonts';
import Colors from '../../theme/Colors';

export default StyleSheet.create({
  container: {
    height: Constants.HEADER_HEIGHT,
    borderBottomLeftRadius: 48,
    paddingHorizontal: 16,
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 32,
    flexDirection: 'row',
  },
  search: {
    width: '100%',
    position: 'absolute',
    top: Constants.HEADER_HEIGHT - Constants.SEARCH_INPUT_HEIGHT / 2,
    left: 16,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 32,
    color: Colors.white.number100,
  },
  description: {
    fontFamily: Fonts.semiBold,
    fontSize: 12,
    color: Colors.white.number100,
  },
  profileContainer: {
    flexDirection: 'row',
  },
  profile: {
    width: 42,
    height: 42,
    borderRadius: 8,
    marginLeft: 16,
  },
});
