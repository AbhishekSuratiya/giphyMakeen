import React from 'react';
import Styles from './styles/HeaderStyles';
import {Image, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../theme/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Search from './Search';
import Constants from '../constants/Constants';

function Header() {
  return (
    <LinearGradient
      colors={[
        Colors.purple.number10,
        Colors.purple.number40,
        Colors.purple.number90,
      ]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={Styles.container}>
      <View>
        <Text style={Styles.title}>Hi, James!</Text>
        <Text style={Styles.description}>Find best gifs here...</Text>
      </View>
      <View style={Styles.profileContainer}>
        <MaterialCommunityIcons
          name={'bell-badge-outline'}
          size={28}
          color={Colors.white.number100}
        />
        <Image
          source={{
            uri: Constants.USER_PROFILE_FALLBACK,
          }}
          style={Styles.profile}
        />
      </View>
      <View style={Styles.search}>
        <Search />
      </View>
    </LinearGradient>
  );
}

export default Header;
