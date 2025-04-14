import React from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('window');

const BANNER_DATA = [
  {
    id: '1',
    image: require('../assets/image/everest.jpg'),
  },
  {
    id: '2',
    image: require('../assets/image/Everest26off.jpg'),
  },
  {
    id: '3',
    image: require('../assets/image/everesthanger.jpg'),
  },
];

const BannerCarousel = () => {
  return (
    <View style={styles.carouselContainer}>
      <FlatList
        data={BANNER_DATA}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        decelerationRate="fast"
        renderItem={({item}) => (
          <TouchableOpacity activeOpacity={0.9}>
            <Image
              source={item.image}
              style={styles.bannerImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 16,
    height: 170, // Ensure height is set
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
  },
  bannerImage: {
    width: width - 40,
    height: 160,
    borderRadius: 12,
    marginHorizontal: 19,
    // resizeMode: 'stretch',
    backgroundColor: '#ccc',
  },
});

export default BannerCarousel;
