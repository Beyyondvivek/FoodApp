/* eslint-disable react-native/no-inline-styles */
// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   FlatList,
//   StyleSheet,
//   SafeAreaView,
// } from 'react-native';

// const RecipeCardSections = () => {
//   const fruitRecipes = [
//     {
//       id: '1',
//       name: 'Mango Smoothie',
//       image: require('../../assets/image/image1.jpg'),
//       description: 'A refreshing mango-yogurt blend.',
//     },
//     {
//       id: '2',
//       name: 'Berry Salad',
//       image: require('../../assets/image/image2.jpg'),
//       description: 'Mixed berries with honey dressing.',
//     },
//     {
//       id: '3',
//       name: 'Pineapple Salsa',
//       image: require('../../assets/image/image3.jpg'),
//       description: 'Spicy pineapple salsa for chips.',
//     },
//     {
//       id: '4',
//       name: 'Apple Crisp',
//       image: require('../../assets/image/biscuits.jpg'),
//       description: 'Warm apples with cinnamon topping.',
//     },
//   ];

//   const renderRecipeCard = ({item}) => (
//     <View style={styles.card}>
//       <View style={styles.cardInner}>
//         <Image source={item.image} style={styles.cardImage} />
//         <View style={styles.cardContent}>
//           <Text style={styles.cardTitle}>{item.name}</Text>
//           <Text style={styles.cardDescription}>{item.description}</Text>
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <Text style={styles.header}>Fruit Recipes</Text>
//         <FlatList
//           data={fruitRecipes}
//           renderItem={renderRecipeCard}
//           keyExtractor={item => item.id}
//           numColumns={2}
//           columnWrapperStyle={styles.row}
//           contentContainerStyle={styles.list}
//           showsVerticalScrollIndicator={false}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F9FAFB',
//     padding: 16,
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: '700',
//     textAlign: 'center',
//     marginBottom: 24,
//     color: '#1A202C',
//     fontFamily: 'System',
//     letterSpacing: 0.5,
//   },
//   list: {
//     paddingBottom: 16,
//   },
//   row: {
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   card: {
//     width: '48.5%', // Adjusted for modern spacing
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     overflow: 'hidden',
//     marginBottom: 8,
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
//     height: 120,
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//   },
//   cardContent: {
//     padding: 12,
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#2D3748',
//     marginBottom: 4,
//     fontFamily: 'System',
//   },
//   cardDescription: {
//     fontSize: 12,
//     color: '#718096',
//     fontFamily: 'System',
//     lineHeight: 16,
//   },
// });

// export default RecipeCardSections;

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   FlatList,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
// } from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// // Define the recipe type
// interface Recipe {
//   id: string;
//   name: string;
//   image: any; // Replace with specific type if image source is typed
//   description: string;
// }

// // Define the state types
// interface LikesState {
//   [key: string]: number;
// }

// interface SavedState {
//   [key: string]: boolean;
// }

// const RecipeCardSections = () => {
//   const [likes, setLikes] = useState<LikesState>({
//     '1': 10,
//     '2': 15,
//     '3': 8,
//     '4': 20,
//   });
//   const [saved, setSaved] = useState<SavedState>({
//     '1': false,
//     '2': false,
//     '3': false,
//     '4': false,
//   });

//   const fruitRecipes: Recipe[] = [
//     {
//       id: '1',
//       name: 'Mango Smoothie',
//       image: require('../../assets/image/image1.jpg'),
//       description: 'A refreshing mango-yogurt blend.',
//     },
//     {
//       id: '2',
//       name: 'Berry Salad',
//       image: require('../../assets/image/image2.jpg'),
//       description: 'Mixed berries with honey dressing.',
//     },
//     {
//       id: '3',
//       name: 'Pineapple Salsa',
//       image: require('../../assets/image/image3.jpg'),
//       description: 'Spicy pineapple salsa for chips.',
//     },
//     {
//       id: '4',
//       name: 'Apple Crisp',
//       image: require('../../assets/image/biscuits.jpg'),
//       description: 'Warm apples with cinnamon topping.',
//     },
//   ];

//   const handleLike = (id: string) => {
//     setLikes(prev => ({ ...prev, [id]: prev[id] + 1 }));
//   };

//   const handleSave = (id: string) => {
//     setSaved(prev => ({ ...prev, [id]: !prev[id] }));
//   };

//   const renderRecipeCard = ({ item }: { item: Recipe }) => (
//     <View style={styles.card}>
//       <View style={styles.cardInner}>
//         <Image source={item.image} style={styles.cardImage}>
//           <View style={styles.iconOverlay}>
//             <TouchableOpacity onPress={() => handleSave(item.id)} style={styles.iconButton}>
//               <MaterialIcons
//                 name={saved[item.id] ? 'bookmark' : 'bookmark-border'}
//                 size={20}
//                 color={saved[item.id] ? '#A064FF' : '#718096'}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => handleLike(item.id)} style={styles.iconButton}>
//               <View style={styles.likeContainer}>
//                 <MaterialIcons name="thumb-up" size={16} color="#A064FF" />
//                 <Text style={styles.likeText}>{likes[item.id]}</Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//         </Image>
//         <View style={styles.cardContent}>
//           <Text style={styles.cardTitle}>{item.name}</Text>
//           <Text style={styles.cardDescription}>{item.description}</Text>
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <Text style={styles.header}>Fruit Recipes</Text>
//         <FlatList
//           data={fruitRecipes}
//           renderItem={renderRecipeCard}
//           keyExtractor={item => item.id}
//           numColumns={2}
//           columnWrapperStyle={styles.row}
//           contentContainerStyle={styles.list}
//           showsVerticalScrollIndicator={false}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F9FAFB',
//     padding: 16,
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: '700',
//     textAlign: 'center',
//     marginBottom: 24,
//     color: '#1A202C',
//     fontFamily: 'System',
//     letterSpacing: 0.5,
//   },
//   list: {
//     paddingBottom: 16,
//   },
//   row: {
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   card: {
//     width: '48.5%',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     overflow: 'hidden',
//     marginBottom: 8,
//   },
//   cardInner: {
//     borderRadius: 16,
//     backgroundColor: '#FFF',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 4,
//   },
//   cardImage: {
//     width: '100%',
//     height: 120,
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//   },
//   iconOverlay: {
//     position: 'absolute',
//     top: 8,
//     right: 8,
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     height: '100%',
//     paddingBottom: 8,
//   },
//   iconButton: {
//     padding: 4,
//   },
//   likeContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     borderRadius: 12,
//     padding: 4,
//   },
//   likeText: {
//     fontSize: 12,
//     color: '#A064FF',
//     marginLeft: 4,
//     fontFamily: 'System',
//   },
//   cardContent: {
//     padding: 12,
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#2D3748',
//     marginBottom: 4,
//     fontFamily: 'System',
//   },
//   cardDescription: {
//     fontSize: 12,
//     color: '#718096',
//     fontFamily: 'System',
//     lineHeight: 16,
//   },
// });

// export default RecipeCardSections;

import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomHeader from '../../components/CustomHeader';
import FilterChips from '../../components/chips/FilterChips';
import CategoryChips from '../../components/chips/CategoryChips';

// Define the recipe type
interface Recipe {
  id: string;
  name: string;
  image: any; // Replace with ImageRequireSource if stricter typing is needed
  description: string;
}

// Define the state types
interface LikesState {
  [key: string]: number;
}

interface SavedState {
  [key: string]: boolean;
}

const RecipeCardSections = () => {
  const [likes] = useState<LikesState>({
    '1': 10,
    '2': 15,
    '3': 8,
    '4': 20,
  });
  const [saved, setSaved] = useState<SavedState>({
    '1': false,
    '2': false,
    '3': false,
    '4': false,
  });

  const fruitRecipes: Recipe[] = [
    {
      id: '1',
      name: 'Mango Smoothie',
      image: require('../../assets/image/image1.jpg'),
      description: 'A refreshing mango-yogurt blend.',
    },
    {
      id: '2',
      name: 'Berry Salad',
      image: require('../../assets/image/image2.jpg'),
      description: 'Mixed berries with honey dressing.',
    },
    {
      id: '3',
      name: 'Pineapple Salsa',
      image: require('../../assets/image/image3.jpg'),
      description: 'Spicy pineapple salsa for chips.',
    },
    {
      id: '4',
      name: 'Apple Crisp',
      image: require('../../assets/image/image1.jpg'),
      description: 'Warm apples with cinnamon topping.',
    },
    {
      id: '5',
      name: 'Mango Smoothie',
      image: require('../../assets/image/image1.jpg'),
      description: 'A refreshing mango-yogurt blend.',
    },
    {
      id: '6',
      name: 'Berry Salad',
      image: require('../../assets/image/image2.jpg'),
      description: 'Mixed berries with honey dressing.',
    },
    {
      id: '7',
      name: 'Pineapple Salsa',
      image: require('../../assets/image/image3.jpg'),
      description: 'Spicy pineapple salsa for chips.',
    },
    {
      id: '8',
      name: 'Apple Crisp',
      image: require('../../assets/image/image1.jpg'),
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
              <MaterialIcons name="thumb-up" size={16} color="#f5f5f5" />
              <Text style={styles.likeText}>{likes[item.id]}</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => handleSave(item.id)}
            style={styles.iconButton}>
            <MaterialIcons
              name={saved[item.id] ? 'bookmark' : 'bookmark-border'}
              size={20}
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
    <>
      <CategoryChips />
      <CustomHeader />
      <SafeAreaView style={{marginTop: 0, flex: 1}}>
        {/* <FilterChips /> */}
        {/* <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        /> */}
        <View style={styles.container}>
          <Text style={styles.header}>Fruit Recipes</Text>
          <FlatList
            data={fruitRecipes}
            renderItem={renderRecipeCard}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F9FAFB',
    padding: 16,
    marginTop: 150,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'left',
    marginBottom: 10,
    color: '#1A202C',
    fontFamily: 'System',
    letterSpacing: 0.5,
  },
  list: {
    paddingBottom: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    width: '48.5%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 8,
    elevation: 4,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
  },
  cardInner: {
    borderRadius: 16,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
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
    // backgroundColor: 'rgba(255, 255, 255, 0.8)',
    // borderRadius: 12,
    // padding: 4,
  },
  likeText: {
    fontSize: 12,
    color: '#f5f5f5',
    marginLeft: 4,
    fontFamily: 'System',
  },
  cardContent: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 4,
    fontFamily: 'System',
  },
  cardDescription: {
    fontSize: 12,
    color: '#718096',
    fontFamily: 'System',
    lineHeight: 16,
  },
});

export default RecipeCardSections;
