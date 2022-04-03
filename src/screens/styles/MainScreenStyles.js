import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';
import Elevation from '../../theme/Elevation';
import Constants from '../../constants/Constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey.number0,
    alignItems: 'center',
  },
  listContainer: {
    width: '100%',
    marginTop: 24,
  },
  card: {
    height: Constants.GIF_CARD_HEIGHT,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: Colors.purple.number0,
    ...Elevation.style.number12,
    borderRadius: 12,
    overflow: 'hidden',
  },
});
