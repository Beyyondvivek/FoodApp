/* eslint-disable react-native/no-inline-styles */
// /* eslint-disable react-native/no-inline-styles */
// import React, {useRef} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Dimensions,
//   Animated,
//   Image,
//   TouchableOpacity,
// } from 'react-native';

// const {width: SCREEN_WIDTH} = Dimensions.get('window');
// const CARD_WIDTH = SCREEN_WIDTH * 0.5; // Each card takes 70% of screen width
// const SPACING = 10;
// const VISIBLE_ITEMS = 2; // Show 2 cards at once

// const carouselData = [
//   {
//     id: '1',
//     image: require('../assets/image/image.png'),
//     title: 'Dhokla',
//     ingredients: 11,
//   },
//   {
//     id: '2',
//     image: {uri: 'https://picsum.photos/600/400?random=1'},
//     title: 'Sweet Pea Burger',
//     ingredients: 14,
//   },
//   {
//     id: '3',
//     image: {uri: 'https://picsum.photos/600/400?random=1'},
//     title: 'Veg Pizza',
//     ingredients: 8,
//   },
//   {
//     id: '4',
//     image: {uri: 'https://picsum.photos/600/400?random=1'},
//     title: 'Chole Kulche',
//     ingredients: 9,
//   },
// ];

// const CenteredCarousel = () => {
//   const scrollX = useRef(new Animated.Value(0)).current;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Tailored for you</Text>
//       <Text style={styles.subheader}>Picks just for you</Text>

//       <Animated.FlatList
//         data={carouselData}
//         keyExtractor={item => item.id}
//         horizontal
//         contentContainerStyle={styles.flatListContent}
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

//           const translateY = scrollX.interpolate({
//             inputRange,
//             outputRange: [0, 0, 0],
//             extrapolate: 'clamp',
//           });

//           const opacity = scrollX.interpolate({
//             inputRange,
//             outputRange: [0.7, 1, 0.7],
//             extrapolate: 'clamp',
//           });

//           return (
//             <Animated.View
//               style={[
//                 styles.card,
//                 {
//                   opacity,
//                   transform: [{translateY}],
//                   width: CARD_WIDTH,
//                   marginRight: index === carouselData.length - 1 ? 0 : SPACING,
//                 },
//               ]}>
//               <Image
//                 source={item.image}
//                 style={styles.image}
//                 resizeMode="cover"
//               />
//               <View style={styles.textContainer}>
//                 <Text style={styles.title}>{item.title}</Text>
//                 <Text style={styles.ingredients}>
//                   {item.ingredients} ingredients
//                 </Text>
//               </View>
//             </Animated.View>
//           );
//         }}
//       />

//       {/* <TouchableOpacity style={styles.tryButton}>
//         <Text style={styles.tryButtonText}>Try next</Text>
//       </TouchableOpacity> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: 10,
//   },
//   subheader: {
//     fontWeight: 'normal',
//     marginTop: -20,
//     alignSelf: 'flex-start',
//     color: 'grey',
//   },
//   header: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     alignSelf: 'flex-start',
//     paddingLeft: (SCREEN_WIDTH - (CARD_WIDTH * VISIBLE_ITEMS + SPACING)) / 1,
//   },
//   flatListContent: {
//     paddingHorizontal:
//       (SCREEN_WIDTH - (CARD_WIDTH * VISIBLE_ITEMS + SPACING)) / 1,
//   },
//   card: {
//     borderRadius: 16,
//     overflow: 'hidden',
//     backgroundColor: 'white',
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 4},
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//     marginBottom: 4,
//   },
//   image: {
//     width: '100%',
//     height: 180,
//   },
//   textContainer: {
//     padding: 15,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   ingredients: {
//     fontSize: 14,
//     color: '#666',
//   },
//   // tryButton: {
//   //   backgroundColor: '#4CAF50',
//   //   paddingVertical: 12,
//   //   paddingHorizontal: 30,
//   //   borderRadius: 25,
//   //   marginTop: 20,
//   // },
//   // tryButtonText: {
//   //   color: 'white',
//   //   fontWeight: 'bold',
//   //   fontSize: 16,
//   // },
// });

// export default CenteredCarousel;

import React, {useRef} from 'react';
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

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH * 0.5;
const SPACING = 10;
const VISIBLE_ITEMS = 2;

const carouselData = [
  {
    id: '1',
    image: require('../assets/image/image.png'),
    title: 'Dhokla',
    ingredients: 11,
    rating: 4.5,
    thumbsUp: '53k',
  },
  {
    id: '2',
    image: {uri: 'https://picsum.photos/600/400?random=1'},
    title: 'Sweet Pea Burger',
    ingredients: 14,
    rating: 4.2,
    thumbsUp: '42k',
  },
  {
    id: '3',
    image: {uri: 'https://picsum.photos/600/400?random=1'},
    title: 'Veg Pizza',
    ingredients: 8,
    rating: 4.7,
    thumbsUp: '68k',
  },
  {
    id: '4',
    image: {uri: 'https://picsum.photos/600/400?random=1'},
    title: 'Chole Kulche',
    ingredients: 9,
    rating: 4.3,
    thumbsUp: '37k',
  },
];

const CenteredCarousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [wishlist, setWishlist] = React.useState<Record<string, boolean>>({});

  const toggleWishlist = (id: string) => {
    setWishlist(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <Ionicons key={`full-${i}`} name="star" size={14} color="#FFD700" />,
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <Ionicons
            key={`half-${i}`}
            name="star-half"
            size={14}
            color="#FFD700"
          />,
        );
      } else {
        stars.push(
          <Ionicons
            key={`empty-${i}`}
            name="star-outline"
            size={14}
            color="#FFD700"
          />,
        );
      }
    }

    return (
      <View style={styles.starContainer}>
        {stars}
        <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tailored for you</Text>
        {/* <Text style={styles.subheader}>Picks just for you</Text> */}
      </View>

      <Animated.FlatList
        data={carouselData}
        keyExtractor={item => item.id}
        horizontal
        contentContainerStyle={styles.flatListContent}
        snapToInterval={CARD_WIDTH + SPACING}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * (CARD_WIDTH + SPACING),
            index * (CARD_WIDTH + SPACING),
            (index + 1) * (CARD_WIDTH + SPACING),
          ];

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.7, 1, 0.7],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              style={[
                styles.card,
                {
                  opacity,
                  width: CARD_WIDTH,
                  marginRight: index === carouselData.length - 1 ? 0 : SPACING,
                },
              ]}>
              <View style={styles.wishlistContainer}>
                <TouchableOpacity
                  onPress={() => toggleWishlist(item.id)}
                  style={styles.wishlistButton}>
                  <Ionicons
                    name={wishlist[item.id] ? 'heart' : 'heart-outline'}
                    size={24}
                    color={wishlist[item.id] ? '#FF0000' : '#FFF'}
                  />
                </TouchableOpacity>
              </View>

              <Image
                source={item.image}
                style={styles.image}
                resizeMode="cover"
              />

              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.ingredients}>
                  {item.ingredients} ingredients
                </Text>

                {renderStars(item.rating)}

                <View style={styles.thumbsContainer}>
                  <Ionicons name="thumbs-up" size={14} color="#666" />
                  <Text style={styles.thumbsText}>
                    {item.thumbsUp} thumbs up
                  </Text>
                </View>
              </View>
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  subheader: {
    fontWeight: 'normal',
    marginTop: -10,
    alignSelf: 'flex-start',
    color: 'grey',
    paddingLeft: 2,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'flex-start',
    padding: 12,
  },
  flatListContent: {
    paddingHorizontal:
      (SCREEN_WIDTH - (CARD_WIDTH * VISIBLE_ITEMS + SPACING)) / 1,
  },
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    marginBottom: 4,
  },
  wishlistContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 2,
  },
  wishlistButton: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    padding: 5,
  },
  image: {
    width: '100%',
    height: 180,
  },
  textContainer: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  ingredients: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  ratingText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 5,
  },
  thumbsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbsText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 5,
  },
});

export default CenteredCarousel;
