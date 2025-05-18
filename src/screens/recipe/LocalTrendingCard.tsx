/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Chef} from '../../utils/types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface ChefCardProps {
  chef: Chef;
  onToggleBookmark: (id: number) => void;
  onAddToWishlist: (id: number) => void;
}

const ChefCard: React.FC<ChefCardProps> = ({
  chef,
  onToggleBookmark,
  //   onAddToWishlist,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(chef.isBookmarked);

  // Use a switch or object to map chef IDs to static require calls
  const getImageSource = () => {
    switch (chef.image) {
      case 'image1.jpg':
        return require('../../assets/image/image1.jpg');
      case 'image2.jpg':
        return require('../../assets/image/image2.jpg');
      default:
        return require('../../assets/image/oil.jpg'); // Fallback image
    }
  };

  return (
    <View style={styles.card}>
      <Image source={getImageSource()} style={styles.image} />
      <View style={styles.header}>
        <Text style={styles.chefName}>{chef.name}</Text>
        <TouchableOpacity
          onPress={() => {
            setIsBookmarked(!isBookmarked);
            onToggleBookmark(chef.id);
          }}>
          <MaterialIcons
            name={isBookmarked ? 'bookmark' : 'bookmark-border'}
            size={24}
            color="#6200ea"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{chef.title}</Text>
      <Text style={styles.description}>{chef.description}</Text>
      <View
        style={{
          justifyContent: 'space-between',
          display: 'flex',
          flexDirection: 'row',
        }}>
        <View style={styles.ratingContainer}>
          <MaterialIcons name="star" size={16} color="#ffd700" />
          <Text style={styles.rating}>{chef.rating.toFixed(1)}</Text>
        </View>
        <View style={styles.likesContainer}>
          <MaterialIcons name="thumb-up" size={16} color="#6200ea" />
          <Text style={styles.likes}>{chef.likes.toLocaleString()}</Text>
        </View>
      </View>
      <View style={styles.difficultyContainer}>
        <Text style={styles.difficultyText}>{chef.difficulty}</Text>
      </View>
      {/* <TouchableOpacity
        style={styles.wishlistButton}
        onPress={() => onAddToWishlist(chef.id)}>
        <Text style={styles.wishlistText}>Add to Wishlist</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default ChefCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    width: '100%',
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  chefName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#444444',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 10,
    lineHeight: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    color: '#ffd700',
    marginLeft: 5,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  likes: {
    fontSize: 14,
    color: '#6200ea',
    marginLeft: 5,
  },
  difficultyContainer: {
    marginBottom: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
    alignSelf: 'flex-start',
  },
  difficultyText: {
    fontSize: 12,
    color: '#333333',
    fontWeight: '500',
  },
  wishlistButton: {
    backgroundColor: '#6200ea',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  wishlistText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
});
