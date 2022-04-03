import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';
import Elevation from '../../theme/Elevation';
import Constants from '../../constants/Constants';
import Fonts from '../../theme/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white.number100,
    alignItems: 'center',
  },
  listContainer: {
    width: '100%',
    marginTop: 24,
  },
  loadingText: {
    fontFamily: Fonts.black,
    color: Colors.grey.number40,
    fontSize: 32,
    textAlign: 'center',
  },
  card: {
    height: Constants.GIF_CARD_HEIGHT,
    marginHorizontal: 16,
    backgroundColor: Colors.purple.number0,
    ...Elevation.style.number12,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  listEndText: {
    fontFamily: Fonts.black,
    color: Colors.purple.number100,
    fontSize: 32,
    textAlign: 'center',
  },
  textCard: {
    height: Constants.GIF_CARD_HEIGHT / 2,
    justifyContent: 'center',
  },
});
