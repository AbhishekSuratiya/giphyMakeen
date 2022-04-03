import React, {useRef} from 'react';
import {Animated, Image, Text, View} from 'react-native';
import Styles from './styles/AnimatedListStyles';
import Constants from '../constants/Constants';
import {useSelector} from 'react-redux';
import constants from '../constants/Constants';

const spacing = constants.LIST_ITEM_SEPARATOR_HEIGHT;

const AnimatedList = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const gifList = useSelector(state => state.gifStore.gifList);

  const renderListFooter = () => {
    return (
      <View style={Styles.footer}>
        <Text style={Styles.listEndText}>No more gifs !!</Text>
      </View>
    );
  };

  const renderListHeader = () => <View style={{height: spacing}} />;

  const renderItemSeparator = () => <View style={{height: spacing}} />;

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
      ListFooterComponent={renderListFooter}
      ListHeaderComponent={renderListHeader}
      renderItem={renderListItem}
      ItemSeparatorComponent={renderItemSeparator}
      onEndReached={() => {
        console.log('onEndReached');
      }}
      onEndReachedThreshold={1}
    />
  );
};

export default AnimatedList;
