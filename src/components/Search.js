import React, {useEffect} from 'react';
import {TextInput, View} from 'react-native';
import Styles from './styles/SearchStyles';
import Constants from '../constants/Constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../theme/Colors';
import {gifActions} from '../redux/reducers/gifReducer';
import Api from '../api/Api';
import {useDispatch, useSelector} from 'react-redux';

const Search = () => {
  const query = useSelector(state => state.gifStore.query);
  const dispatch = useDispatch();
  const searchTermInvalid = query.length === 0;

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (!searchTermInvalid) {
        fetch(query);
      }
    }, 500);

    if (searchTermInvalid) {
      dispatch(gifActions.setGifList([]));
      dispatch(gifActions.setIsFetching(false));
    }

    return () => {
      clearTimeout(debounce);
    };
  }, [query]);

  const handleInput = text => {
    dispatch(gifActions.setIsFetching(true));
    dispatch(gifActions.setSearchQuery(text));
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
    dispatch(gifActions.setIsFetching(false));
  };

  return (
    <View style={Styles.container}>
      <MaterialCommunityIcons
        name={'magnify'}
        size={24}
        color={query ? Colors.purple.number100 : Colors.black.number30}
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
