/* eslint-disable react-native/no-inline-styles */
// /* eslint-disable react-native/no-inline-styles */
// import React, {useRef, useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Dimensions,
//   Animated,
//   Image,
//   TouchableOpacity,
//   //   FlatList,
// } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
// const CARD_WIDTH = SCREEN_WIDTH * 0.8;
// const SPACING = 20;

// const recipeData = [
//   {
//     id: '1',
//     title: 'Creamy Garlic Pasta',
//     cookTime: '25 min',
//     rating: 4.8,
//     likes: '12.4k',
//     image: require('../assets/image/Dish.jpg'),
//     difficulty: 'Easy',
//     isBookmarked: false,
//   },
//   {
//     id: '2',
//     title: 'Avocado Toast',
//     cookTime: '10 min',
//     rating: 4.5,
//     likes: '8.7k',
//     image: require('../assets/image/dish1.jpg'),
//     difficulty: 'Easy',
//     isBookmarked: true,
//   },
//   {
//     id: '3',
//     title: 'Chole Bhature',
//     cookTime: '1h 30min',
//     rating: 4.9,
//     likes: '15.2k',
//     image: require('../assets/image/dish2.jpg'),
//     difficulty: 'Hard',
//     isBookmarked: false,
//   },
//   {
//     id: '4',
//     title: 'Vada Pav',
//     cookTime: '1h 30min',
//     rating: 4.9,
//     likes: '15.2k',
//     image: require('../assets/image/dish2.jpg'),
//     difficulty: 'Hard',
//     isBookmarked: false,
//   },
// ];

// const RecipeCarousel = () => {
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const [recipes, setRecipes] = useState(recipeData);

//   const toggleBookmark = (id: string) => {
//     setRecipes(
//       recipes.map(recipe =>
//         recipe.id === id
//           ? {...recipe, isBookmarked: !recipe.isBookmarked}
//           : recipe,
//       ),
//     );
//   };

//   const renderStars = (rating: number) => {
//     return (
//       <View style={styles.starContainer}>
//         {[1, 2, 3, 4, 5].map(star => (
//           <Ionicons
//             key={star}
//             name={star <= rating ? 'star' : 'star-outline'}
//             size={16}
//             color={star <= rating ? '#FFD700' : '#ccc'}
//           />
//         ))}
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Animated.FlatList
//         data={recipes}
//         keyExtractor={item => item.id}
//         horizontal
//         contentContainerStyle={[
//           styles.flatListContent,
//           {
//             paddingHorizontal: (SCREEN_WIDTH - CARD_WIDTH) / 2 - SPACING,
//           },
//         ]}
//         snapToInterval={CARD_WIDTH + SPACING}
//         decelerationRate="fast"
//         showsHorizontalScrollIndicator={false}
//         onScroll={Animated.event(
//           [{nativeEvent: {contentOffset: {x: scrollX}}}],
//           {useNativeDriver: true},
//         )}
//         scrollEventThrottle={16}
//         renderItem={({item, index}) => {
//           const inputRange = [
//             (index - 1) * (CARD_WIDTH + SPACING),
//             index * (CARD_WIDTH + SPACING),
//             (index + 1) * (CARD_WIDTH + SPACING),
//           ];

//           const scale = scrollX.interpolate({
//             inputRange,
//             outputRange: [0.9, 1, 0.9],
//             extrapolate: 'clamp',
//           });

//           return (
//             <Animated.View
//               style={[
//                 styles.card,
//                 {
//                   transform: [{scale}],
//                   width: CARD_WIDTH,
//                   marginHorizontal: SPACING / 2,
//                 },
//               ]}>
//               <Image
//                 source={item.image}
//                 style={styles.image}
//                 resizeMode="cover"
//               />

//               <TouchableOpacity
//                 style={styles.bookmarkButton}
//                 onPress={() => toggleBookmark(item.id)}>
//                 <Ionicons
//                   name={item.isBookmarked ? 'bookmark' : 'bookmark-outline'}
//                   size={24}
//                   color={item.isBookmarked ? '#FF6B6B' : '#fff'}
//                 />
//               </TouchableOpacity>

//               <View
//                 style={[
//                   styles.difficultyBadge,
//                   {
//                     backgroundColor:
//                       item.difficulty === 'Easy'
//                         ? '#4CAF50'
//                         : item.difficulty === 'Medium'
//                         ? '#FFC107'
//                         : '#F44336',
//                   },
//                 ]}>
//                 <Text style={styles.difficultyText}>{item.difficulty}</Text>
//               </View>

//               <View style={styles.contentContainer}>
//                 <Text style={styles.title}>{item.title}</Text>

//                 <View style={styles.metaContainer}>
//                   <View style={styles.metaItem}>
//                     <Ionicons name="time-outline" size={16} color="#666" />
//                     <Text style={styles.metaText}>{item.cookTime}</Text>
//                   </View>

//                   <View style={styles.metaItem}>
//                     <Ionicons name="heart" size={16} color="#FF6B6B" />
//                     <Text style={styles.metaText}>{item.likes}</Text>
//                   </View>
//                 </View>

//                 {renderStars(item.rating)}
//               </View>
//             </Animated.View>
//           );
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   flatListContent: {
//     alignItems: 'center',
//   },
//   card: {
//     borderRadius: 24,
//     overflow: 'hidden',
//     backgroundColor: 'white',
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 10},
//     shadowOpacity: 0.1,
//     shadowRadius: 12,
//     height: SCREEN_HEIGHT * 0.6,
//   },
//   image: {
//     width: '100%',
//     height: '60%',
//   },
//   bookmarkButton: {
//     position: 'absolute',
//     top: 16,
//     right: 16,
//     backgroundColor: 'rgba(0,0,0,0.3)',
//     borderRadius: 20,
//     padding: 6,
//   },
//   difficultyBadge: {
//     position: 'absolute',
//     top: 16,
//     left: 16,
//     paddingVertical: 4,
//     paddingHorizontal: 12,
//     borderRadius: 12,
//   },
//   difficultyText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 12,
//   },
//   contentContainer: {
//     padding: 16,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 12,
//   },
//   metaContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 12,
//   },
//   metaItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   metaText: {
//     fontSize: 14,
//     color: '#666',
//     marginLeft: 6,
//   },
//   starContainer: {
//     flexDirection: 'row',
//     marginTop: 8,
//   },
// });

// export default RecipeCarousel;

import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH * 0.7;
const SPACING = 20;

const recipeData = [
  {
    id: '1',
    title: 'Creamy Garlic Pasta',
    subtitle: 'Italian Classic',
    description: 'Creamy pasta with roasted garlic and parmesan',
    author: 'Chef Maria',
    cookTime: '25 min',
    rating: 4.8,
    likes: 12400,
    image: require('../assets/image/Dish.jpg'),
    difficulty: 'Easy',
    isBookmarked: false,
    isLiked: false,
  },
  {
    id: '2',
    title: 'Creamy Garlic Pasta',
    subtitle: 'Italian Classic',
    description: 'Creamy pasta with roasted garlic and parmesan',
    author: 'Chef Maria',
    cookTime: '25 min',
    rating: 4.8,
    likes: 12400,
    image: require('../assets/image/dish1.jpg'),
    difficulty: 'Easy',
    isBookmarked: false,
    isLiked: false,
  },
  {
    id: '3',
    title: 'Creamy Garlic Pasta',
    subtitle: 'Italian Classic',
    description: 'Creamy pasta with roasted garlic and parmesan',
    author: 'Chef Maria',
    cookTime: '25 min',
    rating: 4.8,
    likes: 12400,
    image: require('../assets/image/dish2.jpg'),
    difficulty: 'Easy',
    isBookmarked: false,
    isLiked: false,
  },
  {
    id: '4',
    title: 'Creamy Garlic Pasta',
    subtitle: 'Italian Classic',
    description: 'Creamy pasta with roasted garlic and parmesan',
    author: 'Chef Maria',
    cookTime: '25 min',
    rating: 4.8,
    likes: 12400,
    image: require('../assets/image/dish2.jpg'),
    difficulty: 'Easy',
    isBookmarked: false,
    isLiked: false,
  },
  {
    id: '5',
    title: 'Creamy Garlic Pasta',
    subtitle: 'Italian Classic',
    description: 'Creamy pasta with roasted garlic and parmesan',
    author: 'Chef Maria',
    cookTime: '25 min',
    rating: 4.8,
    likes: 12400,
    image: require('../assets/image/dish2.jpg'),
    difficulty: 'Easy',
    isBookmarked: false,
    isLiked: false,
  },
  {
    id: '6',
    title: 'Creamy Garlic Pasta',
    subtitle: 'Italian Classic',
    description: 'Creamy pasta with roasted garlic and parmesan',
    author: 'Chef Maria',
    cookTime: '25 min',
    rating: 4.8,
    likes: 12400,
    image: require('../assets/image/dish1.jpg'),
    difficulty: 'Easy',
    isBookmarked: false,
    isLiked: false,
  },

  // ... other recipe items
];

const RecipeCarousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [recipes, setRecipes] = useState(recipeData);
  const [loading, setLoading] = useState(true);
  const shimmerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 2000);

    // Shimmer animation
    Animated.loop(
      Animated.timing(shimmerAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const toggleBookmark = (id: string) => {
    setRecipes(
      recipes.map(recipe =>
        recipe.id === id
          ? {...recipe, isBookmarked: !recipe.isBookmarked}
          : recipe,
      ),
    );
  };

  const toggleLike = (id: string) => {
    setRecipes(
      recipes.map(recipe =>
        recipe.id === id
          ? {
              ...recipe,
              isLiked: !recipe.isLiked,
              likes: recipe.isLiked ? recipe.likes - 1 : recipe.likes + 1,
            }
          : recipe,
      ),
    );
  };

  const renderStars = (rating: number) => {
    return (
      <View style={styles.starContainer}>
        {[1, 2, 3, 4, 5].map(star => (
          <Ionicons
            key={star}
            name={star <= rating ? 'star' : 'star-outline'}
            size={16}
            color={star <= rating ? '#FFD700' : '#ccc'}
          />
        ))}
      </View>
    );
  };

  const renderShimmer = () => {
    const shimmerColor = 'rgba(255,255,255,0.7)';

    return (
      <Animated.View
        style={[
          styles.shimmerOverlay,
          {
            transform: [
              {
                translateX: shimmerAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-200, 200],
                }),
              },
            ],
          },
        ]}>
        <View style={[styles.shimmer, {backgroundColor: shimmerColor}]} />
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={recipes}
        keyExtractor={item => item.id}
        horizontal
        contentContainerStyle={styles.flatListContent}
        snapToInterval={CARD_WIDTH + SPACING}
        decelerationRate={0.9}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={20}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * (CARD_WIDTH + SPACING),
            index * (CARD_WIDTH + SPACING),
            (index + 1) * (CARD_WIDTH + SPACING),
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.9, 1, 0.9],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              style={[
                styles.card,
                {
                  transform: [{scale}],
                  width: CARD_WIDTH,
                  marginHorizontal: SPACING / 2,
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignSelf: 'center',
                },
              ]}>
              {loading ? (
                renderShimmer()
              ) : (
                <>
                  <Image
                    source={item.image}
                    style={styles.image}
                    resizeMode="cover"
                  />

                  <View style={styles.headerActions}>
                    <TouchableOpacity
                      style={styles.actionButton}
                      onPress={() => toggleBookmark(item.id)}>
                      <Ionicons
                        name={
                          item.isBookmarked ? 'bookmark' : 'bookmark-outline'
                        }
                        size={24}
                        color={item.isBookmarked ? '#A064FF' : '#fff'}
                      />
                    </TouchableOpacity>

                    {/* <TouchableOpacity
                      style={styles.actionButton}
                      onPress={() => toggleLike(item.id)}>
                      <Ionicons
                        name={item.isLiked ? 'heart' : 'heart-outline'}
                        size={24}
                        color={item.isLiked ? '#FF6B6B' : '#fff'}
                      />
                    </TouchableOpacity> */}
                  </View>

                  <View style={styles.difficultyContainer}>
                    <View
                      style={[
                        styles.difficultyBadge,
                        {
                          backgroundColor:
                            item.difficulty === 'Easy'
                              ? '#4CAF50'
                              : item.difficulty === 'Medium'
                              ? '#FFC107'
                              : '#F44336',
                        },
                      ]}>
                      <Text style={styles.difficultyText}>
                        {item.difficulty}
                      </Text>
                    </View>
                    <Text style={styles.author}>By {item.author}</Text>
                  </View>

                  <View style={styles.contentContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subtitle}>{item.subtitle}</Text>
                    <Text style={styles.description}>{item.description}</Text>

                    <View style={styles.metaContainer}>
                      <View style={styles.metaItem}>
                        <Ionicons name="time-outline" size={16} color="#666" />
                        <Text style={styles.metaText}>{item.cookTime}</Text>
                      </View>

                      <View style={styles.metaItem}>
                        <Ionicons name="heart" size={16} color="#FF6B6B" />
                        <Text style={styles.metaText}>
                          {item.likes.toLocaleString()}
                        </Text>
                      </View>
                    </View>
                    {renderStars(item.rating)}
                  </View>

                  <TouchableOpacity style={styles.recipeButton}>
                    <Text style={styles.recipeButtonText}>See Full Recipe</Text>
                    <Ionicons name="arrow-forward" size={16} color="white" />
                  </TouchableOpacity>
                </>
              )}
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Changed from 0 to take full height
    justifyContent: 'center',
    alignItems: 'center', // Added for horizontal centering
    width: '100%',
    backgroundColor: 'white',
  },
  card: {
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.1,
    shadowRadius: 12,
    height: SCREEN_HEIGHT * 0.4, // Increased height for better proportions
    borderColor: 'lightgrey',
    borderWidth: 1,
    marginHorizontal: SPACING / 2, // Fixed margin calculation
    alignSelf: 'center', // Ensure card self-centering
  },
  headerActions: {
    position: 'absolute',
    top: 16,
    right: 16,
    flexDirection: 'row',
    gap: 8,
    zIndex: 2,
  },
  actionButton: {
    // backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    padding: 6,
  },
  difficultyContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    zIndex: 2,
  },
  difficultyBadge: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  difficultyText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  author: {
    color: 'white',
    fontSize: 12,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },
  contentContainer: {
    padding: 16,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#888',
    marginBottom: 12,
    lineHeight: 20,
  },
  recipeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#6A5ACD',
  },
  recipeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  shimmerOverlay: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
  shimmer: {
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },

  flatListContent: {
    alignItems: 'center',
    paddingHorizontal: (SCREEN_WIDTH - CARD_WIDTH) / 2 - SPACING, // Center first item
    paddingVertical: 20, // Add vertical padding
  },

  image: {
    width: '100%',
    height: '40%',
  },
  bookmarkButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    padding: 6,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 6,
  },
  starContainer: {
    flexDirection: 'row',
    marginTop: -10,
  },
  // ... keep other styles from previous implementation
});

export default RecipeCarousel;
