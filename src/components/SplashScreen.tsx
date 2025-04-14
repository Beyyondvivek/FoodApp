// import React, {useRef, useState} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   Dimensions,
//   StyleSheet,
//   TouchableOpacity,
//   Animated,
// } from 'react-native';
// import useNavigate from '../hooks/useNavigate';
// import Button from './Button';

// const {width, height} = Dimensions.get('window');

// const data = [
//   {
//     id: '1',
//     image:
//       'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
//     // title: 'Craving for more',
//   },
//   {
//     id: '2',
//     image:
//       'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80',
//     // title: 'Taste the magic',
//   },
//   {
//     id: '3',
//     image:
//       'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
//     // title: 'Bite into happiness',
//   },
// ];

// const SplashScreen = () => {
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const {gotoHomeScreen} = useNavigate();
//   const onViewableItemsChanged = useRef(({viewableItems}: any) => {
//     if (viewableItems.length > 0) {
//       setCurrentIndex(viewableItems[0].index || 0);
//     }
//   });

//   return (
//     <View style={styles.container}>
//       {/* Bottom Container */}
//       <View style={styles.bottomContainer}>
//         <View style={styles.dotContainer}>
//           {data.map((_, i) => (
//             <View
//               key={i}
//               style={[styles.dot, currentIndex === i && styles.activeDot]}
//             />
//           ))}
//         </View>

//         <Button
//           // mode="contained"
//           //   onPress={handleRegister}
//           style={styles.button}
//           onPress={() => gotoHomeScreen()}
//           title="Register"
//         />

//         {/* <TouchableOpacity style={styles.button} onPress={gotoHomeScreen}>
//           <Text style={styles.buttonText}>Craving for more</Text>
//         </TouchableOpacity> */}
//       </View>
//       <Animated.FlatList
//         data={data}
//         horizontal
//         keyExtractor={item => item.id}
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         onScroll={Animated.event(
//           [{nativeEvent: {contentOffset: {x: scrollX}}}],
//           {useNativeDriver: false},
//         )}
//         onViewableItemsChanged={onViewableItemsChanged.current}
//         viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
//         renderItem={({item}) => (
//           <View style={styles.card}>
//             <Image source={{uri: item.image}} style={styles.image} />
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default SplashScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 0,
//     backgroundColor: '#fff',
//   },
//   card: {
//     width,
//     height: height,
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   },
//   image: {
//     width: width,
//     height: height * 0.8,
//     resizeMode: 'cover',
//     borderBottomLeftRadius: 40,
//     borderBottomRightRadius: 40,
//   },
//   bottomContainer: {
//     position: 'absolute',
//     bottom: 0,
//     width,
//     backgroundColor: '#B983FF',
//     // borderTopLeftRadius: 50,
//     // borderTopRightRadius: 50,
//     paddingTop: 100,
//     paddingBottom: 80,
//     alignItems: 'center',
//   },
//   dotContainer: {
//     flexDirection: 'row',
//     marginBottom: 16,
//   },
//   dot: {
//     height: 8,
//     width: 8,
//     borderRadius: 4,
//     backgroundColor: '#ddd',
//     marginHorizontal: 5,
//   },
//   activeDot: {
//     backgroundColor: '#000',
//     width: 16,
//   },
//   button: {
//     backgroundColor: '#fff',
//     paddingVertical: 12,
//     paddingHorizontal: 40,
//     borderRadius: 8,
//     // elevation: 0.5,
//   },
//   buttonText: {
//     color: '#000',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Animated,
  SafeAreaView,
} from 'react-native';
import useNavigate from '../hooks/useNavigate';
import LoginScreen from '../screens/LoginScreen';
import Button from './Button';

const {width, height} = Dimensions.get('window');

const data = [
  {
    id: '1',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    image:
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
  },
];

const SplashScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const {gotoHomeScreen} = useNavigate();

  const onViewableItemsChanged = useRef(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index || 0);
    }
  });

  return (
    <>
    {/* <LoginScreen/> */}
      <SafeAreaView style={styles.container}>
        {/* Bottom Container */}
        <View style={styles.bottomContainer}>
          <View style={styles.dotContainer}>
            {data.map((_, i) => (
              <View
                key={i}
                style={[styles.dot, currentIndex === i && styles.activeDot]}
              />
            ))}
          </View>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.9}
            onPress={gotoHomeScreen}>
            <Text style={styles.buttonText}>Craving for more</Text>
          </TouchableOpacity>
        </View>
        {/* FlatList Carousel */}
        <View style={styles.carouselContainer}>
          <Animated.FlatList
            data={data}
            horizontal
            keyExtractor={item => item.id}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}
            onViewableItemsChanged={onViewableItemsChanged.current}
            viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
            renderItem={({item}) => (
              <View style={styles.card}>
                <Image source={{uri: item.image}} style={styles.image} />
              </View>
            )}
          />
        </View>

        {/* Bottom Container */}
        <View style={styles.bottomContainer2} />
        {/* <View style={styles.dotContainer}>
          {data.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, currentIndex === i && styles.activeDot]}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={gotoHomeScreen}>
          <Text style={styles.buttonText}>Craving for more</Text>
        </TouchableOpacity> */}
      </SafeAreaView>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  carouselContainer: {
    height: height * 0.9,
  },
  card: {
    width,
    height: height * 0.9,
  },
  image: {
    width: width,
    height: height * 0.8,
    resizeMode: 'cover',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width,
    backgroundColor: '#B983FF',
    paddingTop: 120,
    paddingBottom: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer2: {
    position: 'absolute',
    bottom: 0,
    width,
    // backgroundColor: '#B983FF',
    paddingTop: 90,
    paddingBottom: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#ddd',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#000',
    width: 16,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    elevation: 2,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
