import React, {useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';
import Styles from './styles/SearchStyles';
import Constants from '../constants/Constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../theme/Colors';
import {gifActions} from '../redux/reducers/gifReducer';
import Api from '../api/Api';
import {useDispatch} from 'react-redux';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (searchTerm.length) {
        fetch(searchTerm);
      }
    }, 1000);

    return () => {
      clearTimeout(debounce);
    };
  }, [searchTerm]);

  const handleInput = text => {
    setSearchTerm(text);
  };

  const fetch = async query => {
    try {
      const response = await Api.fetchGifs(query);
      if (response.status === 200) {
        dispatch(gifActions.setGifList(response?.data?.data));
      } else {
        throw 'Server error';
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={Styles.container}>
      <MaterialCommunityIcons
        name={'magnify'}
        size={24}
        color={searchTerm ? Colors.purple.number100 : Colors.black.number30}
      />
      <TextInput
        style={Styles.input}
        maxLength={Constants.MAX_SEARCH_QUERY}
        onChangeText={handleInput}
        placeholder={'Search a gif'}
        placeholderTextColor={Colors.black.number30}
      />
    </View>
  );
};

export default Search;