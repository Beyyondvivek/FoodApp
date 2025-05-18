// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   FlatList,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
//   Dimensions,
// } from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// // Define the recipe type
// interface Recipe {
//   id: string;
//   name: string;
//   image: any; // Use ImageRequireSource for stricter typing if needed
//   description: string;
// }

// // Define the state types
// interface LikesState {
//   [key: string]: number;
// }

// interface SavedState {
//   [key: string]: boolean;
// }

// const {width: SCREEN_WIDTH} = Dimensions.get('window');
// const CARD_WIDTH = SCREEN_WIDTH * 0.4; // 60% of screen width for each card

// const HorizontalCarousel = () => {
//   const [likes, setLikes] = useState<LikesState>({
//     '1': 10,
//     '2': 15,
//     '3': 8,
//     '4': 20,
//     '5': 10,
//     '6': 15,
//     '7': 8,
//     '8': 20,
//   });
//   const [saved, setSaved] = useState<SavedState>({
//     '1': false,
//     '2': false,
//     '3': false,
//     '4': false,
//     '5': false,
//     '6': false,
//     '7': false,
//     '8': false,
//   });

//   const fruitRecipes: Recipe[] = [
//     {
//       id: '1',
//       name: 'Mango Smoothie',
//       image: require('../assets/image/image1.jpg'),
//       description: 'A refreshing mango-yogurt blend.',
//     },
//     {
//       id: '2',
//       name: 'Berry Salad',
//       image: require('../assets/image/image2.jpg'),
//       description: 'Mixed berries with honey dressing.',
//     },
//     {
//       id: '3',
//       name: 'Pineapple Salsa',
//       image: require('../assets/image/image3.jpg'),
//       description: 'Spicy pineapple salsa for chips.',
//     },
//     {
//       id: '4',
//       name: 'Apple Crisp',
//       image: require('../assets/image/image1.jpg'),
//       description: 'Warm apples with cinnamon topping.',
//     },
//     {
//       id: '5',
//       name: 'Mango Smoothie',
//       image: require('../assets/image/image1.jpg'),
//       description: 'A refreshing mango-yogurt blend.',
//     },
//     {
//       id: '6',
//       name: 'Berry Salad',
//       image: require('../assets/image/image2.jpg'),
//       description: 'Mixed berries with honey dressing.',
//     },
//     {
//       id: '7',
//       name: 'Pineapple Salsa',
//       image: require('../assets/image/image3.jpg'),
//       description: 'Spicy pineapple salsa for chips.',
//     },
//     {
//       id: '8',
//       name: 'Apple Crisp',
//       image: require('../assets/image/image1.jpg'),
//       description: 'Warm apples with cinnamon topping.',
//     },
//   ];

//   const handleLike = (id: string) => {
//     setLikes(prev => ({...prev, [id]: prev[id] + 1}));
//   };

//   const handleSave = (id: string) => {
//     setSaved(prev => ({...prev, [id]: !prev[id]}));
//   };

//   const renderRecipeCard = ({item}: {item: Recipe}) => (
//     <View style={styles.card}>
//       <View style={styles.cardInner}>
//         <Image source={item.image} style={styles.cardImage} />
//         <View style={styles.iconOverlay}>
//           <View style={styles.iconButton}>
//             <TouchableOpacity onPress={() => handleLike(item.id)}>
//               <View style={styles.likeContainer}>
//                 <MaterialIcons name="thumb-up" size={20} color="#f5f5f5" />
//                 <Text style={styles.likeText}>{likes[item.id]}</Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//           <TouchableOpacity
//             onPress={() => handleSave(item.id)}
//             style={styles.iconButton}>
//             <MaterialIcons
//               name={saved[item.id] ? 'bookmark' : 'bookmark-border'}
//               size={24}
//               color={saved[item.id] ? '#A064FF' : '#f5f5f5'}
//             />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.cardContent}>
//           <Text style={styles.cardTitle}>{item.name}</Text>
//           <Text style={styles.cardDescription}>{item.description}</Text>
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <SafeAreaView style={{}}>
//       {/* <FilterChips /> */}
//       <View style={styles.container}>
//         <Text style={styles.header}>Fruit Recipes</Text>
//         <FlatList
//           data={fruitRecipes}
//           renderItem={renderRecipeCard}
//           keyExtractor={item => item.id}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           snapToAlignment="center"
//           snapToInterval={CARD_WIDTH + 16} // Card width + margin
//           decelerationRate="fast"
//           contentContainerStyle={styles.carousel}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // padding: 16,
//     backgroundColor: 'white',
//   },
//   header: {
//     fontSize: 22,
//     fontWeight: '700',
//     textAlign: 'left',
//     marginBottom: 10,
//     color: '#1A202C',
//     fontFamily: 'System',
//     letterSpacing: 0,
//     padding: 12,
//   },
//   carousel: {
//     paddingHorizontal: 8,
//     paddingBottom: 16,
//   },
//   card: {
//     width: CARD_WIDTH, // Dynamic width based on screen size
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     overflow: 'hidden',
//     marginHorizontal: 8, // Space between cards
//     // borderWidth: 0.5,
//     // borderColor: 'lightgry',
//   },
//   cardInner: {
//     borderRadius: 16,
//     backgroundColor: '#FFF',
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 4},
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 4,
//   },
//   cardImage: {
//     width: '100%',
//     height: 120, // Increased for carousel prominence
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//   },
//   iconOverlay: {
//     position: 'absolute',
//     top: 8,
//     right: 0,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     paddingBottom: 8,
//   },
//   iconButton: {
//     padding: 4,
//   },
//   likeContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent for better contrast
//     borderRadius: 12,
//     padding: 4,
//   },
//   likeText: {
//     fontSize: 16,
//     color: '#f5f5f5',
//     marginLeft: 4,
//     fontFamily: 'System',
//   },
//   cardContent: {
//     padding: 12,
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: 'black',
//     marginBottom: 4,
//     fontFamily: 'System',
//   },
//   cardDescription: {
//     fontSize: 14,
//     color: 'black',
//     fontFamily: 'System',
//     lineHeight: 16,
//   },
// });

// export default HorizontalCarousel;

import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Define the recipe type
interface Recipe {
  id: string;
  name: string;
  image: any; // Use ImageRequireSource for stricter typing if needed
  description: string;
}

// Define the state types
interface LikesState {
  [key: string]: number;
}

interface SavedState {
  [key: string]: boolean;
}

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH * 0.4; // 40% of screen width for each card

const HorizontalCarousel = () => {
  const [likes] = useState<LikesState>({
    '1': 10,
    '2': 15,
    '3': 8,
    '4': 20,
    '5': 10,
    '6': 15,
    '7': 8,
    '8': 20,
  });
  const [saved, setSaved] = useState<SavedState>({
    '1': false,
    '2': false,
    '3': false,
    '4': false,
    '5': false,
    '6': false,
    '7': false,
    '8': false,
  });

  const fruitRecipes: Recipe[] = [
    {
      id: '1',
      name: 'Mango Smoothie',
      image: require('../assets/image/noodle.png'),
      description: 'A refreshing mango-yogurt blend.',
    },
    {
      id: '2',
      name: 'Berry Salad',
      image: require('../assets/image/image2.jpg'),
      description: 'Mixed berries with honey dressing.',
    },
    {
      id: '3',
      name: 'Pineapple Salsa',
      image: require('../assets/image/image3.jpg'),
      description: 'Spicy pineapple salsa for chips.',
    },
    {
      id: '4',
      name: 'Apple Crisp',
      image: require('../assets/image/image1.jpg'),
      description: 'Warm apples with cinnamon topping.',
    },
    {
      id: '5',
      name: 'Mango Smoothie',
      image: require('../assets/image/image1.jpg'),
      description: 'A refreshing mango-yogurt blend.',
    },
    {
      id: '6',
      name: 'Berry Salad',
      image: require('../assets/image/image2.jpg'),
      description: 'Mixed berries with honey dressing.',
    },
    {
      id: '7',
      name: 'Pineapple Salsa',
      image: require('../assets/image/image3.jpg'),
      description: 'Spicy pineapple salsa for chips.',
    },
    {
      id: '8',
      name: 'Apple Crisp',
      image: require('../assets/image/image1.jpg'),
      description: 'Warm apples with cinnamon topping.',
    },
  ];

  const handleSave = (id: string) => {
    setSaved(prev => ({...prev, [id]: !prev[id]}));
  };

  const renderRecipeCard = ({item}: {item: Recipe}) => (
    <View style={styles.card}>
      <View style={styles.cardInner}>
        <Image source={item.image} style={styles.cardImage} />
        <View style={styles.iconOverlay}>
          <View style={styles.iconButton}>
            <View style={styles.likeContainer}>
              <MaterialIcons name="thumb-up" size={20} color="#f5f5f5" />
              <Text style={styles.likeText}>{likes[item.id]}</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => handleSave(item.id)}
            style={styles.iconButton}>
            <MaterialIcons
              name={saved[item.id] ? 'bookmark' : 'bookmark-border'}
              size={24}
              color={saved[item.id] ? '#A064FF' : '#f5f5f5'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <FilterChips /> */}
      <View style={styles.container}>
        <Text style={styles.header}>Fruit Recipes</Text>
        <FlatList
          data={fruitRecipes}
          renderItem={renderRecipeCard}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          snapToInterval={CARD_WIDTH + 42} // Card width + margin
          decelerationRate="fast"
          contentContainerStyle={styles.carousel}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'left',
    marginBottom: 10,
    color: '#1A202C',
    fontFamily: 'System',
    letterSpacing: 0,
    padding: 12,
  },
  carousel: {
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    marginHorizontal: 8,
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
  },
  cardInner: {
    borderRadius: 16,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    // shadowOpacity: 0.2,
    // shadowRadius: 12,
    // elevation: 8,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  iconOverlay: {
    position: 'absolute',
    top: 8,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 8,
  },
  iconButton: {
    padding: 4,
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent for better contrast
    borderRadius: 12,
    padding: 4,
  },
  likeText: {
    fontSize: 16,
    color: '#f5f5f5',
    marginLeft: 4,
    fontFamily: 'System',
  },
  cardContent: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    marginBottom: 4,
    fontFamily: 'System',
  },
  cardDescription: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'System',
    lineHeight: 16,
  },
});

export default HorizontalCarousel;
