import React, {useRef, useState} from 'react';
import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import Styles from './styles/AnimatedListStyles';
import Constants from '../constants/Constants';
import {useDispatch, useSelector} from 'react-redux';
import constants from '../constants/Constants';
import Api from '../api/Api';
import {gifActions} from '../redux/reducers/gifReducer';

const spacing = constants.LIST_ITEM_SEPARATOR_HEIGHT;

const AnimatedList = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const gifList = useSelector(state => state.gifStore.gifList);
  const query = useSelector(state => state.gifStore.query);

  const [pagination, setPagination] = useState(1);
  const dispatch = useDispatch();

  const renderListFooter = () => {
    return (
      <View style={Styles.textCard}>
        <Text style={Styles.listEndText}>No more gifs !!</Text>
      </View>
    );
  };
  const renderEmptyList = () => {
    return (
      <View style={Styles.textCard}>
        {
          <Text style={Styles.listEndText}>
            {query ? 'No results found.' : 'Get coolest gif\n for free 😎'}
          </Text>
        }
      </View>
    );
  };

  const renderListHeader = () => <View style={{height: spacing}} />;

  const renderItemSeparator = () => <View style={{height: spacing}} />;

  const fetch = async () => {
    console.log({pagination});
    try {
      const response = await Api.fetchGifs(query, pagination);
      if (response.status === 200) {
        dispatch(gifActions.setGifList([...gifList, ...response?.data?.data]));
        setPagination(pagination => pagination + 1);
      } else {
        throw 'Server error';
      }
    } catch (e) {
      console.error(e);
    }
  };

  const renderListItem = ({item, index}) => {
    const cardHeight = Constants.GIF_CARD_HEIGHT;
    const scaleInputRange = [
      -1,
      0,
      (cardHeight + spacing) * index,
      (cardHeight + spacing) * (index + 1),
    ];
    const opacityInputRange = [
      -1,
      0,
      (cardHeight + spacing) * index,
      (cardHeight + spacing) * (index + 1),
    ];
    const scale = scrollY.interpolate({
      inputRange: scaleInputRange,
      outputRange: [1, 1, 1, 0],
    });
    const opacity = scrollY.interpolate({
      inputRange: opacityInputRange,
      outputRange: [1, 1, 1, 0],
    });
    return (
      <Animated.View
        style={[
          Styles.card,
          {
            opacity,
            transform: [{scale}],
          },
        ]}>
        <View
          style={[StyleSheet.absoluteFillObject, {justifyContent: 'center'}]}>
          <Text style={Styles.loadingText}>Loading ...</Text>
        </View>
        <Image source={{uri: item.images.original.url}} style={Styles.image} />
      </Animated.View>
    );
  };
  return (
    <Animated.FlatList
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: true,
      })}
      style={Styles.listContainer}
      data={gifList}
      keyExtractor={item => item.id}
      ListFooterComponent={gifList.length && renderListFooter}
      ListHeaderComponent={renderListHeader}
      renderItem={renderListItem}
      ListEmptyComponent={renderEmptyList}
      ItemSeparatorComponent={renderItemSeparator}
      onEndReached={fetch}
      onEndReachedThreshold={0.5}
    />
  );
};

export default AnimatedList;
