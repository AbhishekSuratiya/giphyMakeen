import React, {useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';
import Styles from './styles/SearchStyles';
import Constants from '../constants/Constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../theme/Colors';
import Axios from '../api/Api';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (searchTerm.length) {
        //call api
      }
    }, 1000);

    return () => {
      clearTimeout(debounce);
    };
  }, [searchTerm]);

  const handleInput = text => {
    setSearchTerm(text);
  };

  const fetchGifs = async query => {
    const response = await Axios.get('/search', {
      params: {
        q: query,
        api_key: 'BvFV6zTeyxB9U8Y4SZsxL0Hn3MmHkuXq',
      },
    });
    console.log(response);
  };

  useEffect(() => {
    fetchGifs('apple');
  }, []);

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
