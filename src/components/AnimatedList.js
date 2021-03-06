import React, {useRef, useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Styles from './styles/AnimatedListStyles';
import Constants from '../constants/Constants';
import {useDispatch, useSelector} from 'react-redux';
import constants from '../constants/Constants';
import Api from '../api/Api';
import {gifActions} from '../redux/reducers/gifReducer';
import Colors from '../theme/Colors';
import extractGifData from '../utils/extractGifData';
import Button from './Button';

const spacing = constants.LIST_ITEM_SEPARATOR_HEIGHT;

const AnimatedList = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const gifList = useSelector(state => state.gifStore.gifList);
  const query = useSelector(state => state.gifStore.query);
  const isFetching = useSelector(state => state.gifStore.isFetching);

  const [pagination, setPagination] = useState(1);
  const dispatch = useDispatch();

  const renderListFooter = () => {
    return (
      <View style={Styles.textCard}>
        {pagination > Constants.FORCE_TO_LOAD ? (
          <View style={Styles.footerButtons}>
            <Button onPress={fetch} title={'Load More'} />
            <Button
              onPress={() => {
                flatListRef.current.scrollToOffset({
                  offset: 0,
                  animated: true,
                });
              }}
              title={'Go to Top'}
            />
          </View>
        ) : (
          <Text style={Styles.listEndText}>Loading more...</Text>
        )}
      </View>
    );
  };
  const renderEmptyList = () => {
    if (isFetching) {
      return (
        <View style={Styles.textCard}>
          <ActivityIndicator size={'large'} color={Colors.purple.number100} />
        </View>
      );
    }
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
    try {
      const response = await Api.fetchGifs(query, pagination);
      if (response.status === 200) {
        const extractedData = extractGifData(response?.data?.data);
        dispatch(gifActions.setGifList([...gifList, ...extractedData]));
        setPagination(pagination => pagination + 1);
      } else {
        throw 'Server error';
      }
    } catch (e) {
      console.error(e);
    }
    dispatch(gifActions.setIsFetching(false));
  };

  const renderListItem = ({item, index}) => {
    const cardHeight = Constants.GIF_CARD_HEIGHT;
    const scaleInputRange = [
      -1,
      0,
      (cardHeight + spacing) * index,
      (cardHeight + spacing) * (index + 2),
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
        <Image source={{uri: item?.url}} style={Styles.image} />
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
      ref={flatListRef}
      keyExtractor={item => item.id + Math.random()}
      ListFooterComponent={gifList.length && renderListFooter}
      ListHeaderComponent={renderListHeader}
      renderItem={renderListItem}
      ListEmptyComponent={renderEmptyList}
      ItemSeparatorComponent={renderItemSeparator}
      onEndReached={pagination > Constants.FORCE_TO_LOAD ? null : fetch}
      onEndReachedThreshold={0.5}
    />
  );
};

export default AnimatedList;
