// /* eslint-disable react-native/no-inline-styles */
// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   FlatList,
//   StyleSheet,
//   Dimensions,
// } from 'react-native';

// const {width} = Dimensions.get('window');
// const ITEM_SIZE = width * 0.30;

// const data = [
//   {id: '1', title: 'Fruits', image: require('../assets/image/dish1.jpg')},
//   {id: '2', title: 'Snacks', image: require('../assets/image/dish2.jpg')},
//   {id: '3', title: 'Drinks', image: require('../assets/image/image1.jpg')},
//   {id: '4', title: 'Desserts', image: require('../assets/image/image2.jpg')},
// ];

// const SquareCarousel = () => {
//   return (
//     <>
//       <View style={{padding: 16}}>
//         <Text style={{fontSize: 18, fontWeight: '600'}}>
//           Specially for you
//         </Text>
//       </View>
//       <FlatList
//         horizontal
//         data={data}
//         keyExtractor={item => item.id}
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.listContent}
//         renderItem={({item}) => (
//           <View style={styles.card}>
//             <Image source={item.image} style={styles.image} />
//             <Text style={styles.title}>{item.title}</Text>
//           </View>
//         )}
//       />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   listContent: {
//     paddingHorizontal: 12,
//     marginTop: 0,
//   },
//   card: {
//     width: ITEM_SIZE,
//     marginRight: 16,
//     alignItems: 'center',
//   },
//   image: {
//     width: ITEM_SIZE,
//     height: ITEM_SIZE,
//     borderRadius: 12,
//     backgroundColor: '#f0f0f0',
//   },
//   title: {
//     marginTop: 8,
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#333',
//     textAlign: 'center',
//   },
// });

// export default SquareCarousel;

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');
const ITEM_SIZE = width * 0.3;

const data = [
  {
    id: '1',
    title: 'Fruits',
    image: require('../assets/image/dish1.jpg'),
    screen: 'RecipeCardSections',
  },
  {
    id: '2',
    title: 'Snacks',
    image: require('../assets/image/dish2.jpg'),
    screen: 'SnacksPage',
  },
  {
    id: '3',
    title: 'Drinks',
    image: require('../assets/image/image1.jpg'),
    screen: 'DrinksPage',
  },
  {
    id: '4',
    title: 'Desserts',
    image: require('../assets/image/image2.jpg'),
    screen: 'DessertsPage',
  },
];

const SquareCarousel = () => {
  const navigation = useNavigation();

  const handleCardPress = screen => {
    navigation.navigate(screen);
  };

  return (
    <>
      <View style={{padding: 16}}>
        <Text style={{fontSize: 18, fontWeight: '600'}}>Specially for you</Text>
      </View>
      <FlatList
        horizontal
        data={data}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({item}) => (
          <TouchableOpacity
          activeOpacity={0.7}
            onPress={() => handleCardPress(item.screen)}
            style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: 12,
    marginTop: 0,
  },
  card: {
    width: ITEM_SIZE,
    marginRight: 16,
    alignItems: 'center',
  },
  image: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    // borderRadius: 12,
    backgroundColor: '#f0f0f0',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  title: {
    marginTop: 0,
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#6A5ACD',
    width: '100%',
    padding: 2,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});

export default SquareCarousel;
