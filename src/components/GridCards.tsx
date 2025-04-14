/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const NUM_COLUMNS = 4;
const CARD_SIZE = (SCREEN_WIDTH - 40) / NUM_COLUMNS; // 40 = total horizontal padding

const recipeItems = [
  {
    id: '1',
    title: 'Italian',
    image: require('../assets/image/biscuits.jpg'),
  },
  {
    id: '2',
    title: 'North',
    image: require('../assets/image/chocolates.jpg'),
  },
  {
    id: '3',
    title: 'South',
    image: require('../assets/image/coffee.jpg'),
  },
  {
    id: '4',
    title: 'East',
    image: require('../assets/image/oil.jpg'),
  },
  {
    id: '5',
    title: 'West',
    image: require('../assets/image/oil.jpg'),
  },
  {
    id: '6',
    title: 'Home Made',
    image: require('../assets/image/surf.jpg'),
  },
  {
    id: '7',
    title: 'Chinese',
    image: require('../assets/image/chocolates.jpg'),
  },
  {
    id: '8',
    title: 'Office cook',
    image: require('../assets/image/coffee.jpg'),
  },

  // Add 6 more items following the same structure
  //   ...Array(6)
  //     .fill(null)
  //     .map((_, i) => ({
  //       id: String(i + 3),
  //       title: `Dish ${i + 3}`,
  //       image: require('../assets/image/dish2.jpg'),
  //     })),
];

const GridRecipeCards = () => {
  const renderItem = ({item}) => (
    <View
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 0,
      }}>
      <TouchableOpacity style={styles.card}>
        <Image source={item.image} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );

  return (
    <>
      <View style={{padding: 12}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Choose your own</Text>
      </View>
      <FlatList
        data={recipeItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={NUM_COLUMNS}
        contentContainerStyle={styles.container}
        columnWrapperStyle={styles.columnWrapper}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FFF',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  card: {
    width: CARD_SIZE,
    height: CARD_SIZE * 1,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  type: {
    fontSize: 10,
    color: '#666',
    marginBottom: 8,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  infoText: {
    fontSize: 10,
    color: '#666',
    marginRight: 8,
  },
  likeIcon: {
    marginLeft: 6,
  },
  difficulty: {
    alignSelf: 'flex-start',
    borderRadius: 8,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  difficultyText: {
    fontSize: 10,
    color: '#FFF',
    fontWeight: '500',
  },
});

export default GridRecipeCards;
