import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Recipe} from '../../utils/types';
import {Dimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useState} from 'react';

interface RecipeCardProps {
  recipe: Recipe;
  onPress: () => void;
  onToggleBookmark: (id: number) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  onPress,
  onToggleBookmark,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(recipe.isBookmarked);
  const getImageSource = () => {
    switch (recipe.image) {
      case 'image1.jpg':
        return require('../../assets/image/image1.jpg');
      case 'image2.jpg':
        return require('../../assets/image/image2.jpg');
      default:
        return require('../../assets/image/image3.jpg');
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      <Image source={getImageSource()} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{recipe.name}</Text>
        <Text style={styles.description}>{recipe.description}</Text>

        <View style={styles.nutritionContainer}>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionLabel}>Carbs:</Text>
            <Text style={styles.nutritionValue}>{recipe.carbs}g</Text>
          </View>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionLabel}>Calories:</Text>
            <Text style={styles.nutritionValue}>{recipe.calories}kcal</Text>
          </View>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionLabel}>Protein:</Text>
            <Text style={styles.nutritionValue}>{recipe.protein}g</Text>
          </View>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionLabel}>Fat:</Text>
            <Text style={styles.nutritionValue}>{recipe.fat}g</Text>
          </View>
        </View>
        <View style={styles.benefitsContainer}>
          <Text style={styles.benefitsTitle}>Benefits:</Text>
          {recipe.nutrients.map((benefit, index) => (
            <Text key={index} style={styles.benefitItem}>
              - {benefit}
            </Text>
          ))}
        </View>
        {/* <TouchableOpacity style={styles.favoriteButton}>
          <MaterialIcons name="favorite-border" size={24} color="#6200ea" />
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => {
            setIsBookmarked(!isBookmarked);
            onToggleBookmark(recipe.id);
          }}>
          <MaterialIcons
            name={isBookmarked ? 'bookmark' : 'bookmark-border'}
            size={24}
            color="#6200ea"
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 10,
    elevation: 2, // Android shadow
    width: Dimensions.get('window').width * 0.85, // 85% of screen width for carousel
    alignSelf: 'center',
    marginBottom: 26,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 0,
    backgroundColor: '#f0f0f0', // Placeholder background
  },
  content: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 10,
    lineHeight: 20,
  },
  nutritionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
    flexWrap: 'wrap',
  },
  nutritionItem: {
    flexDirection: 'row',
    marginRight: 10,
    alignItems:'center',
  },
  nutritionLabel: {
    fontSize: 16,
    color: '#444444',
    marginRight: 5,
    fontWeight: 'bold',
  },
  nutritionValue: {
    fontSize: 14,
    color: '#6200ea', // Purple accent for nutritional values
    fontWeight: '500',
  },
  benefitsContainer: {
    marginBottom: 10,
  },
  benefitsTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 5,
  },
  benefitItem: {
    fontSize: 14,
    color: '#666666',
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
  },
});
