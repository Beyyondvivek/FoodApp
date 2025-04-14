/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';

const {width} = Dimensions.get('window');

type CardItem = {
  id: string;
  title: string;
  subtitle: string;
  image: any;
  color: string;
};

const CARD_DATA: CardItem[] = [
  {
    id: '1',
    title: 'Card 1',
    subtitle: 'Subtitle 1',
    image: require('../assets/image/Dish.jpg'),
    color: 'white',
  },
  {
    id: '2',
    title: 'Card 2',
    subtitle: 'Subtitle 2',
    image: require('../assets/image/Dish.jpg'),
    color: 'white',
  },
  {
    id: '3',
    title: 'Card 3',
    subtitle: 'Subtitle 3',
    image: require('../assets/image/Dish.jpg'),
    color: 'white',
  },
  {
    id: '4',
    title: 'Card 4',
    subtitle: 'Subtitle 4',
    image: require('../assets/image/Dish.jpg'),
    color: 'white',
  },
  {
    id: '5',
    title: 'Card 5',
    subtitle: 'Subtitle 5',
    image: require('../assets/image/Dish.jpg'),
    color: 'white',
  },
  {
    id: '6',
    title: 'Card 6',
    subtitle: 'Subtitle 6',
    image: require('../assets/image/Dish.jpg'),
    color: 'white',
  },
  {
    id: '7',
    title: 'Card 7',
    subtitle: 'Subtitle 7',
    image: require('../assets/image/Dish.jpg'),
    color: 'white',
  },
  {
    id: '8',
    title: 'Card 8',
    subtitle: 'Subtitle 8',
    image: require('../assets/image/Dish.jpg'),
    color: 'white',
  },
];

const FoodCards = () => {
  // Calculate card size based on screen width
  const cardSize = (width - 40) / 2; // 4 cards per row with 10px horizontal padding

  const handleCardPress = (id: string) => {
    console.log(`Card ${id} pressed`);
    // Add your navigation or action here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {CARD_DATA.map(item => (
        <TouchableOpacity
          key={item.id}
          onPress={() => handleCardPress(item.id)}
          style={[
            styles.card,
            {
              width: cardSize,
              height: cardSize,
              backgroundColor: item.color,
              marginBottom: 10,
            },
          ]}>
          <Image
            source={item.image}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 0.5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardImage: {
    width: '100%',
    height: '70%',
  },
  cardContent: {
    padding: 8,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  cardSubtitle: {
    fontSize: 10,
    color: '#666',
  },
});

export default FoodCards;
