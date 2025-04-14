import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

// const {width: SCREEN_WIDTH} = Dimensions.get('window');

const categories = [
  {
    id: '1',
    name: 'Gluten Free',
    image: require('../assets/image/biscuits.jpg'), // Local image
  },
  {
    id: '2',
    name: 'Rice',
    image: require('../assets/image/chocolates.jpg'), // Local image
  },
  {
    id: '3',
    name: 'Salmon',
    image: require('../assets/image/coffee.jpg'), // Local image
  },
  {
    id: '4',
    name: 'Vegetarian',
    image: require('../assets/image/everest.jpg'),
  },
  {
    id: '5',
    name: 'Salmon',
    image: require('../assets/image/oil.jpg'), // Local image
  },
  {
    id: '6',
    name: 'Vegetarian',
    image: require('../assets/image/shampoo.jpg'),
  },
  {
    id: '7',
    name: 'Salmon',
    image: require('../assets/image/surf.jpg'), // Local image
  },
  {
    id: '8',
    name: 'Vegetarian',
    image: require('../assets/image/Everest26off.jpg'),
  },
];

const CategoryCarousel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Popular</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {categories.map(category => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryItem}
            activeOpacity={0.7}>
            <Image
              source={category.image}
              style={styles.categoryImage}
              resizeMode="cover"
            />
        <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    paddingHorizontal: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAll: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '500',
  },
  scrollContent: {
    paddingRight: 16,
  },
  categoryItem: {
    width: 100,
    marginRight: 12,
    alignItems: 'center',
    // backgroundColor: 'pink',
    padding: 12,
    borderRadius: 12,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});

export default CategoryCarousel;
