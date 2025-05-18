// /* eslint-disable react-native/no-inline-styles */
// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Image,
//   TouchableOpacity,
//   Dimensions,
// } from 'react-native';
// // import Ionicons from 'react-native-vector-icons/Ionicons';

// const {width: SCREEN_WIDTH} = Dimensions.get('window');
// const NUM_COLUMNS = 4;
// const CARD_SIZE = (SCREEN_WIDTH - 40) / NUM_COLUMNS; // 40 = total horizontal padding

// const recipeItems = [
//   {
//     id: '1',
//     title: 'Italian',
//     image: require('../assets/image/paasta.png'),
//   },
//   {
//     id: '2',
//     title: 'North',
//     image: require('../assets/image/north.png'),
//   },
//   {
//     id: '3',
//     title: 'South',
//     image: require('../assets/image/dosa.png'),
//   },
//   {
//     id: '4',
//     title: 'East',
//     image: require('../assets/image/east.png'),
//   },
//   {
//     id: '5',
//     title: 'West',
//     image: require('../assets/image/west.png'),
//   },
//   {
//     id: '6',
//     title: 'Home Made',
//     image: require('../assets/image/homemade.png'),
//   },
//   {
//     id: '7',
//     title: 'Chinese',
//     image: require('../assets/image/noodle.png'),
//   },
//   // {
//   //   id: '8',
//   //   title: 'Office cook',
//   //   image: require('../assets/image/coffee.jpg'),
//   // },

//   // Add 6 more items following the same structure
//   //   ...Array(6)
//   //     .fill(null)
//   //     .map((_, i) => ({
//   //       id: String(i + 3),
//   //       title: `Dish ${i + 3}`,
//   //       image: require('../assets/image/dish2.jpg'),
//   //     })),
// ];

// const IndianCuisine = () => {
//   const renderItem = ({item}) => (
//     <View
//       style={{
//         justifyContent: 'center',
//         alignContent: 'center',
//         alignItems: 'center',
//         marginTop: 0,
//       }}>
//       <TouchableOpacity style={styles.card}>
//         <Image source={item.image} style={styles.image} />
//       </TouchableOpacity>
//       <View style={styles.content}>
//         <Text style={styles.title}>{item.title}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.section}>
//       <View style={{padding: 12}}>
//         <Text style={{fontSize: 20, fontWeight: 'bold'}}>Indian Cuisine</Text>
//       </View>
//       <FlatList
//         data={recipeItems}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         numColumns={NUM_COLUMNS}
//         contentContainerStyle={styles.container}
//         columnWrapperStyle={styles.columnWrapper}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   section: {
//     width: '100%',
//     backgroundColor: '#FFF',
//     borderRadius: 6,
//     // marginBottom: 15,
//   },
//   container: {
//     padding: 10,
//     backgroundColor: '#FFF',
//   },
//   columnWrapper: {
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   card: {
//     width: CARD_SIZE,
//     height: CARD_SIZE * 1,
//     borderRadius: 12,
//     overflow: 'hidden',
//     backgroundColor: '#FFFFFF',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'contain',
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: '600',
//     // marginBottom: 4,
//     color: '#333',
//   },
// });

// export default IndianCuisine;

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
  ScrollView,
} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const CARD_WIDTH = 90; // Fixed 50px width for small cards
const CARD_HEIGHT = 70; // Fixed 50px height for small cards

interface RecipeItem {
  id: string;
  title: string;
  image: any; // Use ImageRequireSource for stricter typing if needed
}

const recipeItems: RecipeItem[] = [
  {
    id: '1',
    title: 'Italian',
    image: require('../assets/image/paasta.png'),
  },
  {
    id: '2',
    title: 'North',
    image: require('../assets/image/north.png'),
  },
  {
    id: '3',
    title: 'South',
    image: require('../assets/image/dosa.png'),
  },
  {
    id: '4',
    title: 'East',
    image: require('../assets/image/east.png'),
  },
  {
    id: '5',
    title: 'West',
    image: require('../assets/image/west.png'),
  },
  {
    id: '6',
    title: 'Home Made',
    image: require('../assets/image/homemade.png'),
  },
  {
    id: '7',
    title: 'Chinese',
    image: require('../assets/image/noodle.png'),
  },
  // {
  //   id: '8',
  //   title: 'Office cook',
  //   image: require('../assets/image/coffee.jpg'),
  // },
  // Add 6 more items following the same structure
  // ...Array(6)
  //   .fill(null)
  //   .map((_, i) => ({
  //     id: String(i + 3),
  //     title: `Dish ${i + 3}`,
  //     image: require('../assets/image/dish2.jpg'),
  //   })),
];

const IndianCuisine = () => {
  const renderItem = ({item}: {item: RecipeItem}) => (
    <View
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity style={styles.card} activeOpacity={0.6}>
        <Image source={item.image} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.section}>
      <View style={{padding: 12}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Indian Cuisine</Text>
      </View>
      <FlatList
        data={recipeItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        // snapToAlignment="center"
        snapToInterval={CARD_WIDTH + 16} // Card width + margin
        decelerationRate="fast"
        contentContainerStyle={styles.carousel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 6,
  },
  carousel: {
    // paddingHorizontal: 8,
    paddingBottom: 16,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 4 },
    // shadowOpacity: 0.2,
    // shadowRadius: 8,
    // elevation: 6,
    marginHorizontal: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 14, // Reduced for small cards
    fontWeight: '600',
    color: '#333',
  },
});

export default IndianCuisine;
