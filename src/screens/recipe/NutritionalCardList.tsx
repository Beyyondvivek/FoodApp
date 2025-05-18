/* eslint-disable no-alert */
import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet, Dimensions} from 'react-native';
import RecipeCard from './NutritionalDish';
import {Recipe} from '../../utils/types';
import useNavigate from '../../hooks/useNavigate';

const RecipeListScreen: React.FC = () => {
   const {gotoRecipePage} = useNavigate();
  const [recipes] = useState<Recipe[]>([
    {
      id: 1,
      name: 'Spicy Chicken Curry',
      image: 'image1.jpg',
      description: 'A flavorful curry with tender chicken and spices.',
      carbs: 25,
      nutrients: [
        'Rich in protein',
        'Boosts immunity',
        'Supports muscle growth',
      ],
      calories: 350,
      protein: 30,
      fat: 15,
    },
    {
      id: 2,
      name: 'Vegan Lentil Soup',
      image: 'image2.jpg',
      description: 'Hearty soup packed with nutrients.',
      carbs: 20,
      nutrients: ['High in fiber', 'Supports digestion', 'Low in fat'],
      calories: 200,
      protein: 10,
      fat: 5,
    },
    {
      id: 3,
      name: 'Grilled Salmon',
      image: 'image1.jpg',
      description: 'Healthy grilled salmon with herbs.',
      carbs: 5,
      nutrients: ['Omega-3 fatty acids', 'Heart health', 'Rich in vitamins'],
      calories: 300,
      protein: 25,
      fat: 18,
    },
    {
      id: 4,
      name: 'Grilled Salmon',
      image: 'image1.jpg',
      description: 'Healthy grilled salmon with herbs.',
      carbs: 5,
      nutrients: ['Omega-3 fatty acids', 'Heart health', 'Rich in vitamins'],
      calories: 300,
      protein: 25,
      fat: 18,
    },
    {
      id: 5,
      name: 'Grilled Salmon',
      image: 'image1.jpg',
      description: 'Healthy grilled salmon with herbs.',
      carbs: 5,
      nutrients: ['Omega-3 fatty acids', 'Heart health', 'Rich in vitamins'],
      calories: 300,
      protein: 25,
      fat: 18,
    },
  ]);

  const [bookmarks, setBookmarks] = useState<number[]>([]);

  const handleToggleBookmark = (id: number) => {
    setBookmarks(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id],
    );
  };


  // const handleCardPress = (id: number) => {
  //   alert(`Viewing details for ${recipes.find(r => r.id === id)?.name}`);
  //   // Add navigation or detailed view logic here
  // };

  const renderItem = ({item}: {item: Recipe}) => (
    <RecipeCard
      recipe={item}
      onPress={gotoRecipePage}
      onToggleBookmark={handleToggleBookmark}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Healthy Recipes</Text>
      <FlatList
        data={recipes}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').width * 0.9} // Snap to card width
        snapToAlignment="center"
        decelerationRate="fast"
        contentContainerStyle={styles.carousel}
        style={styles.list}
      />
    </View>
  );
};

export default RecipeListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    display: 'flex',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
    marginVertical: 10,
    marginHorizontal: 12,
  },
  list: {
    flexGrow: 0,
  },
  carousel: {
    paddingHorizontal: 0,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
  },
  content: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
    lineHeight: 20,
  },
  nutritionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  nutritionItem: {
    flexDirection: 'row',
    marginRight: 10,
  },
  nutritionLabel: {
    fontSize: 14,
    color: '#444',
    marginRight: 5,
  },
  nutritionValue: {
    fontSize: 14,
    color: '#6200ea',
    fontWeight: '500',
  },
  benefitsContainer: {
    marginBottom: 10,
  },
  benefitsTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 5,
  },
  benefitItem: {
    fontSize: 14,
    color: '#666',
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
  },
});
