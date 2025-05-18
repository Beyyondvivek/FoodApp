// import React, {useRef, useState} from 'react';
// import {
//   FlatList,
//   View,
//   StyleSheet,
//   Text,
//   Animated,
//   Dimensions,
// } from 'react-native';
// import VideoCard from './VideoCard';

// const {width: SCREEN_WIDTH} = Dimensions.get('window');
// const CARD_WIDTH = SCREEN_WIDTH * 0.6;
// const SPACING = 4;

// // Assuming you have video files in the following path
// const localVideos = {
//   thaiNoodles: require('../assets/image/video1.mp4'),
//   italianPasta: require('../assets/image/video2.mp4'),
//   veggiePizza: require('../assets/image/video1.mp4'),
// };

// const videos = [
//   {
//     uri: localVideos.thaiNoodles,
//     title: 'Spicy Thai Noodles 🌶️',
//     description: 'Easy 5-min Thai noodle recipe!',
//   },
//   {
//     uri: localVideos.italianPasta,
//     title: 'Classic Italian Pasta 🍝',
//     description: 'Rich, creamy & authentic flavors.',
//   },
//   {
//     uri: localVideos.veggiePizza,
//     title: 'Garden Veggie Pizza 🍕',
//     description: 'Healthy & cheesy homemade pizza.',
//   },
//   {
//     uri: localVideos.italianPasta,
//     title: 'Garden Veggie Pizza 🍕',
//     description: 'Healthy & cheesy homemade pizza.',
//   },
//   {
//     uri: localVideos.thaiNoodles,
//     title: 'Garden Veggie Pizza 🍕',
//     description: 'Healthy & cheesy homemade pizza.',
//   },
//   {
//     uri: localVideos.veggiePizza,
//     title: 'Garden Veggie Pizza 🍕',
//     description: 'Healthy & cheesy homemade pizza.',
//   },
//   {
//     uri: localVideos.thaiNoodles,
//     title: 'Garden Veggie Pizza 🍕',
//     description: 'Healthy & cheesy homemade pizza.',
//   },
// ];

// const VideoCarousel = () => {
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const [currentIndex, setCurrentIndex] = useState(0);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Today's Featured Recipes</Text>

//       <Animated.FlatList
//         data={videos}
//         horizontal
//         keyExtractor={(_, index) => index.toString()}
//         showsHorizontalScrollIndicator={false}
//         pagingEnabled
//         snapToInterval={CARD_WIDTH + SPACING}
//         snapToAlignment="start"
//         decelerationRate={0.95}
//         onScroll={Animated.event(
//           [{nativeEvent: {contentOffset: {x: scrollX}}}],
//           {useNativeDriver: true},
//         )}
//         onMomentumScrollEnd={e => {
//           const offsetX = e.nativeEvent.contentOffset.x;
//           setCurrentIndex(Math.round(offsetX / (CARD_WIDTH + SPACING)));
//         }}
//         contentContainerStyle={styles.listContent}
//         renderItem={({item, index}) => {
//           const inputRange = [
//             (index - 1) * (CARD_WIDTH + SPACING),
//             index * (CARD_WIDTH + SPACING),
//             (index + 1) * (CARD_WIDTH + SPACING),
//           ];

//           const scale = scrollX.interpolate({
//             inputRange,
//             outputRange: [0.92, 1, 0.92],
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
//                 styles.cardWrapper,
//                 {
//                   transform: [{scale}],
//                   opacity,
//                   // marginHorizontal: SPACING / 0,
//                   justifyContent: 'center',
//                   alignContent: 'center',
//                   alignSelf: 'center',
//                 },
//               ]}>
//               <VideoCard
//                 uri={item.uri}
//                 title={item.title}
//                 description={item.description}
//                 onPress={() => console.log(`Play full video: ${item.title}`)}
//               />
//             </Animated.View>
//           );
//         }}
//       />

//       {/* Minimal Pagination */}
//       {/* <View style={styles.pagination}>
//         {videos.map((_, index) => (
//           <Animated.View
//             key={index}
//             style={[
//               styles.paginationDot,
//               currentIndex === index && styles.activeDot,
//             ]}
//           />
//         ))}
//       </View> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//   },
//   heading: {
//     color: 'black',
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     paddingHorizontal: SPACING,
//   },
//   // listContent: {
//   //   paddingHorizontal: SPACING,
//   // },
//   cardWrapper: {
//     // width: CARD_WIDTH,
//     // marginRight: SPACING,
//     borderRadius: 16,
//     overflow: 'hidden',
//   },
//   pagination: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 16,
//   },
//   paginationDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#ddd',
//     marginHorizontal: 4,
//     // transitionDuration: '300ms',
//   },
//   activeDot: {
//     backgroundColor: '#4CAF50',
//     width: 20,
//   },
// });

// export default VideoCarousel;

import React from 'react';
import {FlatList, View, StyleSheet, Text, Dimensions} from 'react-native';
import VideoCard from './VideoCard';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH * 0.5;
const SPACING = 8;

const videos = [
  {
    uri: require('../assets/image/video1.mp4'),
    title: 'Spicy Thai Noodles 🌶️',
    description: 'Easy 5-min Thai noodle recipe!',
  },
  {
    uri: require('../assets/image/video2.mp4'),
    title: 'Classic Italian Pasta 🍝',
    description: 'Rich, creamy & authentic flavors.',
  },
  {
    uri: require('../assets/image/video1.mp4'),
    title: 'Garden Veggie Pizza 🍕',
    description: 'Healthy & cheesy homemade pizza.',
  },
  {
    uri: require('../assets/image/video1.mp4'),
    title: 'Spicy Thai Noodles 🌶️',
    description: 'Easy 5-min Thai noodle recipe!',
  },
  {
    uri: require('../assets/image/video2.mp4'),
    title: 'Classic Italian Pasta 🍝',
    description: 'Rich, creamy & authentic flavors.',
  },
  {
    uri: require('../assets/image/video1.mp4'),
    title: 'Garden Veggie Pizza 🍕',
    description: 'Healthy & cheesy homemade pizza.',
  },
];

const VideoCarousel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Today's Featured Recipes</Text>
      <FlatList
        data={videos}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + SPACING}
        decelerationRate="fast"
        contentContainerStyle={styles.listContent}
        renderItem={({item}) => (
          <View style={styles.cardWrapper}>
            <VideoCard
              uri={item.uri}
              title={item.title}
              description={item.description}
              onPress={() => console.log(`Play full video: ${item.title}`)}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  heading: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal: SPACING,
  },
  listContent: {
    paddingHorizontal: SPACING,
  },
  cardWrapper: {
    width: CARD_WIDTH,
    // marginRight: SPACING,
    borderRadius: 16,
    overflow: 'hidden',
  },
});

export default VideoCarousel;
