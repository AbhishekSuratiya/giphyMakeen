import React, {useRef} from 'react';
import {Animated, Image, Text, View} from 'react-native';
import Styles from './styles/AnimatedListStyles';
import Constants from '../constants/Constants';

const AnimatedList = () => {
  const data = [
    {key: 1, name: 'abhishek'},
    {key: 2, name: 'abhishek'},
    {key: 3, name: 'abhishek'},
    {key: 4, name: 'abhishek'},
    {key: 5, name: 'abhishek'},
    {key: 6, name: 'abhishek'},
    {key: 7, name: 'abhishek'},
    {key: 8, name: 'abhishek'},
    {key: 9, name: 'abhishek'},
    {key: 10, name: 'abhishek'},
  ];

  const scrollY = useRef(new Animated.Value(0)).current;

  const renderListFooter = () => {
    return (
      <View style={{height: 380}}>
        <Text style={Styles.listEndText}>No more gifs !!</Text>
      </View>
    );
  };

  const renderListItem = ({item, index}) => {
    const cardHeight = Constants.GIF_CARD_HEIGHT;
    const scaleInputRange = [
      -1,
      0,
      cardHeight * index,
      cardHeight * (index + 1),
    ];
    const opacityInputRange = [
      -1,
      0,
      cardHeight * index,
      cardHeight * (index + 1),
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
        <Image
          source={{uri: `https://picsum.photos/seed/${index * 2}/600/250`}}
          style={Styles.image}
        />
      </Animated.View>
    );
  };
  return (
    <Animated.FlatList
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: true,
      })}
      style={Styles.listContainer}
      data={data}
      // ListFooterComponent={renderListFooter}
      renderItem={renderListItem}
      onEndReached={() => {
        console.log('onEndReached');
      }}
      onEndReachedThreshold={1}
    />
  );
};

export default AnimatedList;
