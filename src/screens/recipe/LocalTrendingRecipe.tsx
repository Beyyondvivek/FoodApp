/* eslint-disable no-alert */
import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import ChefCard from './LocalTrendingCard';
import {Chef} from '../../utils/types';

const ChefListScreen: React.FC = () => {
  const [chefs] = useState<Chef[]>([
    {
      id: 1,
      name: 'Chef Aarav',
      image: 'image1.jpg',
      title: 'Spicy Chicken Curry',
      description: 'A flavorful curry with tender chicken and aromatic spices.',
      rating: 4.5,
      isBookmarked: false,
      likes: 26000,
      difficulty: 'Normal',
    },
    {
      id: 2,
      name: 'Chef Priya',
      image: 'image2.jpg',
      title: 'Vegan Lentil Soup',
      description: 'Hearty and healthy soup packed with nutrients.',
      rating: 4.7,
      isBookmarked: false,
      likes: 15000,
      difficulty: 'Easy',
    },
    {
      id: 3,
      name: 'Chef Priya',
      image: 'image2.jpg',
      title: 'Vegan Lentil Soup',
      description: 'Hearty and healthy soup packed with nutrients.',
      rating: 4.7,
      isBookmarked: false,
      likes: 15000,
      difficulty: 'Easy',
    },
    {
      id: 4,
      name: 'Chef Priya',
      image: 'image2.jpg',
      title: 'Vegan Lentil Soup',
      description: 'Hearty and healthy soup packed with nutrients.',
      rating: 4.7,
      isBookmarked: false,
      likes: 15000,
      difficulty: 'Easy',
    },
    {
      id: 5,
      name: 'Chef Priya',
      image: 'image2.jpg',
      title: 'Vegan Lentil Soup',
      description: 'Hearty and healthy soup packed with nutrients.',
      rating: 4.7,
      isBookmarked: false,
      likes: 15000,
      difficulty: 'Easy',
    },
    {
      id: 6,
      name: 'Chef Priya',
      image: 'image2.jpg',
      title: 'Vegan Lentil Soup',
      description: 'Hearty and healthy soup packed with nutrients.',
      rating: 4.7,
      isBookmarked: false,
      likes: 15000,
      difficulty: 'Easy',
    },
    {
      id: 7,
      name: 'Chef Priya',
      image: 'image2.jpg',
      title: 'Vegan Lentil Soup',
      description: 'Hearty and healthy soup packed with nutrients.',
      rating: 4.7,
      isBookmarked: false,
      likes: 15000,
      difficulty: 'Easy',
    },
    {
      id: 8,
      name: 'Chef Priya',
      image: 'image2.jpg',
      title: 'Vegan Lentil Soup',
      description: 'Hearty and healthy soup packed with nutrients.',
      rating: 4.7,
      isBookmarked: false,
      likes: 15000,
      difficulty: 'Easy',
    },
    {
      id: 9,
      name: 'Chef Priya',
      image: 'image2.jpg',
      title: 'Vegan Lentil Soup',
      description: 'Hearty and healthy soup packed with nutrients.',
      rating: 4.7,
      isBookmarked: false,
      likes: 15000,
      difficulty: 'Easy',
    },
    {
      id: 10,
      name: 'Chef Priya',
      image: 'image2.jpg',
      title: 'Vegan Lentil Soup',
      description: 'Hearty and healthy soup packed with nutrients.',
      rating: 4.7,
      isBookmarked: false,
      likes: 15000,
      difficulty: 'Easy',
    },
    {
      id: 11,
      name: 'Chef Priya',
      image: 'image2.jpg',
      title: 'Vegan Lentil Soup',
      description: 'Hearty and healthy soup packed with nutrients.',
      rating: 4.7,
      isBookmarked: false,
      likes: 15000,
      difficulty: 'Easy',
    },
    {
      id: 12,
      name: 'Chef Priya',
      image: 'image2.jpg',
      title: 'Vegan Lentil Soup',
      description: 'Hearty and healthy soup packed with nutrients.',
      rating: 4.7,
      isBookmarked: false,
      likes: 15000,
      difficulty: 'Easy',
    },
    {
      id: 13,
      name: 'Chef Priya',
      image: 'image2.jpg',
      title: 'Vegan Lentil Soup',
      description: 'Hearty and healthy soup packed with nutrients.',
      rating: 4.7,
      isBookmarked: false,
      likes: 15000,
      difficulty: 'Easy',
    },
    {
      id: 14,
      name: 'Chef Priya',
      image: 'image2.jpg',
      title: 'Vegan Lentil Soup',
      description: 'Hearty and healthy soup packed with nutrients.',
      rating: 4.7,
      isBookmarked: false,
      likes: 15000,
      difficulty: 'Easy',
    },
    {
      id: 15,
      name: 'Chef Priya',
      image: 'image2.jpg',
      title: 'Vegan Lentil Soup',
      description: 'Hearty and healthy soup packed with nutrients.',
      rating: 4.7,
      isBookmarked: false,
      likes: 15000,
      difficulty: 'Easy',
    },
  ]);

  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const handleToggleBookmark = (id: number) => {
    setBookmarks(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id],
    );
  };

  const handleAddToWishlist = (id: number) => {
    if (!wishlist.includes(id)) {
      setWishlist(prev => [...prev, id]);
      alert(`${chefs.find(c => c.id === id)?.title} added to wishlist!`);
    }
  };

  const renderItem = ({item}: {item: Chef}) => (
    <ChefCard
      chef={item}
      onToggleBookmark={handleToggleBookmark}
      onAddToWishlist={handleAddToWishlist}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Local Trending Recipes</Text>
      <FlatList
        data={chefs}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default ChefListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
    marginVertical: 0,
  },
  list: {
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  chefName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#444',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rating: {
    fontSize: 16,
    color: '#ffd700',
    marginLeft: 5,
  },
  wishlistButton: {
    backgroundColor: '#6200ea',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  wishlistText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});
