// /* eslint-disable react-native/no-inline-styles */
// import React, {useRef, useState} from 'react';
// import {
//   View,
//   Text,
//   Animated,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
//   StatusBar,
//   Platform,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// import Carousel from '../components/Carousel';
// import StaticBanner from '../components/StaticBanner';
// import CategoryCarousel from '../components/CategoryCarousel';
// import FoodCards from '../components/FoodCards';
// import CarouselScreen from '../components/CarouselScreen';
// import BannerCarousel from '../components/BannerCarousel';
// import CustomHeaderWithBanner from '../components/Bg';
// import TopBackground from '../components/Bg';
// import SearchBarWithMic from '../components/SearchBar';

// export default function HomeScreen() {
//   const scrollY = useRef(new Animated.Value(0)).current;
//   const currentOffset = useRef(0);
//   const [headerVisible, setHeaderVisible] = useState(true);
//   const HEADER_HEIGHT = Platform.OS === 'ios' ? 100 : 100;

//   const headerTranslateY = useRef(new Animated.Value(0)).current;

//   const handleScroll = (event: any) => {
//     const offsetY = event.nativeEvent.contentOffset.y;
//     const diff = offsetY - currentOffset.current;

//     if (diff > 5 && headerVisible) {
//       // scroll down → hide
//       setHeaderVisible(false);
//       Animated.timing(headerTranslateY, {
//         toValue: -HEADER_HEIGHT,
//         duration: 200,
//         useNativeDriver: true,
//       }).start();
//     } else if (diff < -5 && !headerVisible) {
//       // scroll up → show
//       setHeaderVisible(true);
//       Animated.timing(headerTranslateY, {
//         toValue: 0,
//         duration: 200,
//         useNativeDriver: true,
//       }).start();
//     }

//     currentOffset.current = offsetY;
//   };

//   return (
//     <View style={{flex: 1}}>
//       <StatusBar
//         translucent
//         backgroundColor="transparent"
//         barStyle="dark-content"
//       />

//       {/* Animated Header */}
//       <Animated.View
//         style={[
//           styles.header,
//           {
//             height: HEADER_HEIGHT,
//             transform: [{translateY: headerTranslateY}],
//             paddingTop:
//               Platform.OS === 'ios' ? 50 : StatusBar.currentHeight || 25,
//           },
//         ]}>
//         <Text style={styles.headerTitle}>Food</Text>
//         <View style={styles.iconContainer}>
//           <TouchableOpacity onPress={() => console.log('Notification')}>
//             <Icon name="notifications-outline" size={22} color="white" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => console.log('Chat')}>
//             <Icon name="chatbox-outline" size={22} color="white" />
//           </TouchableOpacity>
//         </View>
//       </Animated.View>

//       <ScrollView
//         contentContainerStyle={{paddingTop: 0}} //paddingTop: HEADER_HEIGHT + 10
//         scrollEventThrottle={16}
//         onScroll={handleScroll}>
//         {/* <View>
//           <CustomHeaderWithBanner />
//         </View> */}
//         {/* <View style={styles.section}>
//           <StaticBanner
//             imageUrl={require('../assets/image/image.png')}
//             height={300}
//             onPress={() => console.log('Banner tapped')}
//           />
//         </View> */}
//         <View style={{flex: 0}}>
//           <TopBackground />

//           <SearchBarWithMic />
//         </View>
//         <View style={styles.sectionTop}>
//           <Carousel />
//         </View>
//         <View style={styles.section}>
//           <CategoryCarousel />
//         </View>
//         <View style={styles.section}>
//           <BannerCarousel />
//         </View>

//         <View style={styles.section}>
//           <Text style={{fontSize: 20, fontWeight: '600', padding: 12}}>
//             Explore our taste
//           </Text>
//           <FoodCards />
//         </View>
//         <View style={styles.section}>
//           <CarouselScreen />
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: 'transparent',
//     zIndex: 100,
//     paddingHorizontal: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     // elevation: 0,
//     // shadowColor: '#000',
//     // shadowOpacity: 0.1,
//     // shadowOffset: {height: 2, width: 0},
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   iconContainer: {
//     flexDirection: 'row',
//     gap: 16,
//   },
//   section: {
//     backgroundColor: 'white',
//     // marginHorizontal: 12,
//     // marginVertical: 8,
//     // padding: 8,
//     borderRadius: 0,
//     elevation: 0.5,
//     borderWidth: 0.3,
//     borderColor: 'lightgrey',
//     display: 'flex',
//     marginTop: 10,
//   },
//   sectionTop: {
//     backgroundColor: 'white',
//     // marginHorizontal: 12,
//     // marginVertical: 8,
//     // padding: 8,
//     borderRadius: 0,
//     elevation: 0.5,
//     borderWidth: 0.3,
//     borderColor: 'lightgrey',
//     display: 'flex',
//     marginTop: 10,
//   },
// });

/* eslint-disable react-native/no-inline-styles */
// import React, {useRef, useState} from 'react';
// import {
//   View,
//   Text,
//   Animated,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
//   StatusBar,
//   Platform,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// import Carousel from '../components/Carousel';
// import StaticBanner from '../components/StaticBanner';
// import CategoryCarousel from '../components/CategoryCarousel';
// import FoodCards from '../components/FoodCards';
// import CarouselScreen from '../components/CarouselScreen';
// import BannerCarousel from '../components/BannerCarousel';
// import SearchBarWithMic from '../components/SearchBar';

// export default function HomeScreen() {
//   const scrollY = useRef(new Animated.Value(0)).current;
//   const currentOffset = useRef(0);
//   const [headerVisible, setHeaderVisible] = useState(true);

//   const HEADER_HEIGHT = 100;
//   const SEARCH_BAR_HEIGHT = 60;

//   const headerTranslateY = useRef(new Animated.Value(0)).current;
//   const searchTranslateY = useRef(new Animated.Value(HEADER_HEIGHT)).current;

//   const handleScroll = (event: any) => {
//     const offsetY = event.nativeEvent.contentOffset.y;
//     const diff = offsetY - currentOffset.current;

//     if (diff > 5 && headerVisible) {
//       // Scroll down → hide header, move search bar up
//       setHeaderVisible(false);
//       Animated.parallel([
//         Animated.timing(headerTranslateY, {
//           toValue: -HEADER_HEIGHT,
//           duration: 200,
//           useNativeDriver: true,
//         }),
//         Animated.timing(searchTranslateY, {
//           toValue: 0,
//           duration: 200,
//           useNativeDriver: true,
//         }),
//       ]).start();
//     } else if (diff < -5 && !headerVisible && offsetY <= 50) {
//       // Scroll up and near top → show header, move search bar back down
//       setHeaderVisible(true);
//       Animated.parallel([
//         Animated.timing(headerTranslateY, {
//           toValue: 0,
//           duration: 200,
//           useNativeDriver: true,
//         }),
//         Animated.timing(searchTranslateY, {
//           toValue: HEADER_HEIGHT,
//           duration: 200,
//           useNativeDriver: true,
//         }),
//       ]).start();
//     }

//     currentOffset.current = offsetY;
//   };

//   return (
//     <View style={{flex: 1}}>
//       <StatusBar
//         translucent
//         backgroundColor="transparent"
//         barStyle="dark-content"
//       />

//       {/* Header */}
//       <Animated.View
//         style={[
//           styles.header,
//           {
//             height: HEADER_HEIGHT,
//             transform: [{translateY: headerTranslateY}],
//             paddingTop:
//               Platform.OS === 'ios' ? 50 : StatusBar.currentHeight || 25,
//           },
//         ]}>
//         <Text style={styles.headerTitle}>Food</Text>
//         <View style={styles.iconContainer}>
//           <TouchableOpacity onPress={() => console.log('Notification')}>
//             <Icon name="notifications-outline" size={22} color="white" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => console.log('Chat')}>
//             <Icon name="chatbox-outline" size={22} color="white" />
//           </TouchableOpacity>
//         </View>
//       </Animated.View>

//       {/* Animated Search Bar */}
//       <Animated.View
//         style={[
//           styles.searchBarWrapper,
//           {
//             height: SEARCH_BAR_HEIGHT,
//             transform: [{translateY: searchTranslateY}],
//           },
//         ]}>
//         <SearchBarWithMic />
//       </Animated.View>

//       {/* ScrollView */}
//       <Animated.ScrollView
//         contentContainerStyle={{
//           paddingTop: HEADER_HEIGHT + SEARCH_BAR_HEIGHT,
//         }}
//         scrollEventThrottle={16}
//         onScroll={Animated.event(
//           [{nativeEvent: {contentOffset: {y: scrollY}}}],
//           {
//             useNativeDriver: false,
//             listener: handleScroll,
//           },
//         )}>
//         <View style={styles.sectionTop}>
//           <Carousel />
//         </View>
//         <View style={styles.section}>
//           <CategoryCarousel />
//         </View>
//         <View style={styles.section}>
//           <BannerCarousel />
//         </View>

//         <View style={styles.section}>
//           <Text style={{fontSize: 20, fontWeight: '600', padding: 12}}>
//             Explore our taste
//           </Text>
//           <FoodCards />
//         </View>
//         <View style={styles.section}>
//           <CarouselScreen />
//         </View>
//       </Animated.ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: 'transparent',
//     zIndex: 100,
//     paddingHorizontal: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   iconContainer: {
//     flexDirection: 'row',
//     gap: 16,
//   },
//   searchBarWrapper: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     zIndex: 99,
//     backgroundColor: 'white',
//     paddingHorizontal: 16,
//     justifyContent: 'center',
//   },
//   section: {
//     backgroundColor: 'white',
//     borderRadius: 0,
//     elevation: 0.5,
//     borderWidth: 0.3,
//     borderColor: 'lightgrey',
//     marginTop: 10,
//   },
//   sectionTop: {
//     backgroundColor: 'white',
//     borderRadius: 0,
//     elevation: 0.5,
//     borderWidth: 0.3,
//     borderColor: 'lightgrey',
//     marginTop: 10,
//   },
// });

// import React, {useRef, useState} from 'react';
// import {
//   View,
//   Text,
//   Animated,
//   StyleSheet,
//   TouchableOpacity,
//   StatusBar,
//   Platform,
//   SafeAreaView,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// import Carousel from '../components/Carousel';
// import CategoryCarousel from '../components/CategoryCarousel';
// import FoodCards from '../components/FoodCards';
// import CarouselScreen from '../components/CarouselScreen';
// import BannerCarousel from '../components/BannerCarousel';
// import SearchBarWithMic from '../components/SearchBar';
// import TopBackground from '../components/Bg';
// import RecipeCarousel from '../components/RecipeCard';
// import GridRecipeCards from '../components/GridCards';
// import VideoCarousel from '../components/VideoCarousel';

// const HEADER_HEIGHT = 100;
// const SEARCH_HEIGHT = 80;

// export default function HomeScreen() {
//   const currentOffset = useRef(0);
//   const headerTranslateY = useRef(new Animated.Value(0)).current;
//   const searchTranslateY = useRef(new Animated.Value(HEADER_HEIGHT)).current;
//   const [headerVisible, setHeaderVisible] = useState(true);

//   const handleScroll = (event: any) => {
//     const offsetY = event.nativeEvent.contentOffset.y;
//     const diff = offsetY - currentOffset.current;

//     if (diff > 5 && headerVisible) {
//       // Scroll down: hide header, move search bar up
//       setHeaderVisible(false);
//       Animated.parallel([
//         Animated.timing(headerTranslateY, {
//           toValue: -HEADER_HEIGHT,
//           duration: 200,
//           useNativeDriver: true,
//         }),
//         Animated.timing(searchTranslateY, {
//           toValue: 0,
//           duration: 200,
//           useNativeDriver: true,
//         }),
//       ]).start();
//     } else if (diff < -5 && !headerVisible && offsetY <= 5) {
//       // Scroll to top: show header, move search bar down
//       setHeaderVisible(true);
//       Animated.parallel([
//         Animated.timing(headerTranslateY, {
//           toValue: 0,
//           duration: 200,
//           useNativeDriver: true,
//         }),
//         Animated.timing(searchTranslateY, {
//           toValue: HEADER_HEIGHT,
//           duration: 200,
//           useNativeDriver: true,
//         }),
//       ]).start();
//     }

//     currentOffset.current = offsetY;
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <StatusBar
//         translucent
//         backgroundColor="transparent"
//         barStyle="dark-content"
//       />
//       {/* Animated Search Bar */}
//       <Animated.View
//         style={[
//           styles.searchBarWrapper,
//           {
//             transform: [{translateY: searchTranslateY}],
//           },
//         ]}>
//         <SearchBarWithMic />
//       </Animated.View>
//       {/* Animated Header */}
//       <Animated.View
//         style={[
//           styles.header,
//           {
//             transform: [{translateY: headerTranslateY}],
//             paddingTop:
//               Platform.OS === 'ios' ? 50 : StatusBar.currentHeight || 25,
//           },
//         ]}>
//         <Text style={styles.headerTitle}>Food</Text>
//         <View style={styles.iconContainer}>
//           <TouchableOpacity onPress={() => console.log('Notification')}>
//             <Icon name="notifications-outline" size={24} color="white" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => console.log('Chat')}>
//             <Icon name="chatbox-outline" size={24} color="white" />
//           </TouchableOpacity>
//         </View>
//       </Animated.View>

//       {/* Scrollable Content */}
//       <Animated.ScrollView
//         scrollEventThrottle={16}
//         onScroll={handleScroll}
//         contentContainerStyle={{
//           paddingTop: HEADER_HEIGHT + SEARCH_HEIGHT,
//         }}>
//         {/* <TopBackground /> */}

//         <View style={styles.sectionTop}>
//           <Carousel />
//         </View>
//         <View style={styles.sectionTop}>
//           <GridRecipeCards />
//         </View>
//         <View style={styles.section}>
//           <CategoryCarousel />
//         </View>
//         <View style={styles.section}>
//           <BannerCarousel />
//         </View>
//         <View style={styles.section}>
//           <VideoCarousel />
//         </View>
//         <View style={styles.section}>
//           <View>
//             <Text>Explore Recipes</Text>
//             <RecipeCarousel />
//           </View>
//         </View>
//         {/* <View style={styles.section}>
//           <Text style={{fontSize: 20, fontWeight: '600', padding: 12}}>
//             Explore our taste
//           </Text>
//           <FoodCards />
//         </View> */}
//         <View style={styles.section}>
//           <CarouselScreen />
//         </View>
//       </Animated.ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     height: HEADER_HEIGHT,
//     backgroundColor: '#6A5ACD',
//     zIndex: 200,
//     paddingHorizontal: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     // elevation: 5,
//   },
//   headerTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   iconContainer: {
//     flexDirection: 'row',
//     gap: 16,
//   },
//   searchBarWrapper: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     height: SEARCH_HEIGHT,
//     // backgroundColor: 'white',
//     backgroundColor: '#6A5ACD',
//     zIndex: 150,
//     justifyContent: 'center',
//     // paddingHorizontal: 12,
//     // elevation: 4,
//     // backgroundColor: 'transparent',
//   },
//   section: {
//     backgroundColor: 'white',
//     borderRadius: 0,
//     elevation: 0.5,
//     borderWidth: 0.3,
//     borderColor: 'lightgrey',
//     display: 'flex',
//     marginTop: 10,
//   },
//   sectionTop: {
//     backgroundColor: 'white',
//     borderRadius: 0,
//     elevation: 0.5,
//     borderWidth: 0.3,
//     borderColor: 'lightgrey',
//     display: 'flex',
//     marginTop: 26,
//   },
// });

//og above one

import React, {useRef} from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  SafeAreaView,
  Image,
  // ScrollView,
  // NativeSyntheticEvent,
  // NativeScrollEvent,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Carousel from '../components/Carousel';
import CategoryCarousel from '../components/CategoryCarousel';
import FoodCards from '../components/FoodCards';
import CarouselScreen from '../components/CarouselScreen';
import BannerCarousel from '../components/BannerCarousel';
import SearchBarWithMic from '../components/SearchBar';
import RecipeCarousel from '../components/RecipeCard';
import GridRecipeCards from '../components/GridCards';
import VideoCarousel from '../components/VideoCarousel';
import StaticBanner from '../components/StaticBanner';
import SquareCarousel from '../components/SquareCarousel';
import useNavigate from '../hooks/useNavigate';

const HEADER_HEIGHT = 100;
const SEARCH_HEIGHT = 80;

export default function HomeScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const {gotoHomeScreen} = useNavigate();
  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
    extrapolate: 'clamp',
  });

  const searchTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [HEADER_HEIGHT, 0],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={{backgroundColor: 'black', height: 100, flex: 1}}>
        {/* Search Bar */}
        <Animated.View
          style={[
            styles.searchBarWrapper,
            {
              transform: [{translateY: searchTranslateY}],
            },
          ]}>
          <SearchBarWithMic />
        </Animated.View>

        {/* Header */}
        <Animated.View
          style={[
            styles.header,
            {
              transform: [{translateY: headerTranslateY}],
              paddingTop:
                Platform.OS === 'ios' ? 50 : StatusBar.currentHeight || 25,
            },
          ]}>
          <Text style={styles.headerTitle}>Food</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity
               onPress={gotoHomeScreen}
              style={styles.profileIconContainer}>
               <Icon name="profile" size={24} color="white" />
              {/* <Image
                required={ '../assets/image/image1.jpg'}
                style={styles.profileIcon}
              /> */}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Notification')}>
              <Icon name="notifications-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Chat')}>
              <Icon name="chatbox-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
      {/* Scrollable Content */}
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={{
          paddingTop: HEADER_HEIGHT + SEARCH_HEIGHT,
        }}>
        {/* <View style={styles.sectionTop}>
          <Carousel />
        </View> */}
        <View style={styles.section}>
          <StaticBanner
            imageUrl={require('../assets/image/image2.jpg')}
            height={200}
            onPress={() => console.log('Banner tapped')}
            showLoader={true}
          />
        </View>
        <View style={styles.sectionTop}>
          <GridRecipeCards />
        </View>
        <View style={styles.section}>
          <CategoryCarousel />
        </View>
        <View style={styles.section}>
          <BannerCarousel />
        </View>
        <View style={styles.sectionVideo}>
          <VideoCarousel />
        </View>
        <View style={styles.sectionSquareCarousel}>
          <SquareCarousel />
        </View>
        <View style={styles.section}>
          <View style={{padding: 16}}>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>
              Explore Recipes
            </Text>
          </View>
          <RecipeCarousel />
        </View>
        <View style={styles.section}>
          <CarouselScreen />
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    backgroundColor: '#6A5ACD',
    zIndex: 200,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  searchBarWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: SEARCH_HEIGHT,
    backgroundColor: '#6A5ACD',
    zIndex: 150,
    justifyContent: 'center',
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 0,
    // elevation: 0.5,
    // borderWidth: 0.3,
    borderColor: 'lightgrey',
    marginTop: 0,
  },
  sectionVideo: {
    backgroundColor: 'white',
    borderRadius: 0,
    // elevation: 0.5,
    // borderWidth: 0.3,
    borderColor: 'lightgrey',
    marginTop: 10,
    marginBottom: 16,
  },
  sectionSquareCarousel: {
    backgroundColor: 'white',
    borderRadius: 0,
    // elevation: 0.5,
    // borderWidth: 0.3,
    borderColor: 'lightgrey',
    marginTop: 10,
  },
  sectionTop: {
    backgroundColor: 'white',
    borderRadius: 0,
    // elevation: 0.5,
    // borderWidth: 0.3,
    borderColor: 'lightgrey',
    marginTop: 26,
  },
});

// import React, {useRef, useState} from 'react';
// import {
//   View,
//   Text,
//   Animated,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
//   StatusBar,
//   Platform,
//   ImageBackground,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// import Carousel from '../components/Carousel';
// import StaticBanner from '../components/StaticBanner';
// import CategoryCarousel from '../components/CategoryCarousel';
// import FoodCards from '../components/FoodCards';
// import CarouselScreen from '../components/CarouselScreen';
// import BannerCarousel from '../components/BannerCarousel';
// import SearchBarWithMic from '../components/SearchBar';

// export default function HomeScreen() {
//   const scrollY = useRef(new Animated.Value(0)).current;
//   const currentOffset = useRef(0);
//   const [headerVisible, setHeaderVisible] = useState(true);

//   const HEADER_HEIGHT = 100;
//   const headerTranslateY = useRef(new Animated.Value(0)).current;
//   const searchTranslateY = useRef(new Animated.Value(HEADER_HEIGHT)).current;

//   const handleScroll = (event: any) => {
//     const offsetY = event.nativeEvent.contentOffset.y;
//     const diff = offsetY - currentOffset.current;

//     if (diff > 5 && headerVisible) {
//       setHeaderVisible(false);

//       Animated.parallel([
//         Animated.timing(headerTranslateY, {
//           toValue: -HEADER_HEIGHT,
//           duration: 300,
//           useNativeDriver: true,
//         }),
//         Animated.timing(searchTranslateY, {
//           toValue: 0,
//           duration: 300,
//           useNativeDriver: true,
//         }),
//       ]).start();
//     } else if (diff < -5 && !headerVisible && offsetY <= 0) {
//       setHeaderVisible(true);

//       Animated.parallel([
//         Animated.timing(headerTranslateY, {
//           toValue: 0,
//           duration: 300,
//           useNativeDriver: true,
//         }),
//         Animated.timing(searchTranslateY, {
//           toValue: HEADER_HEIGHT,
//           duration: 300,
//           useNativeDriver: true,
//         }),
//       ]).start();
//     }

//     currentOffset.current = offsetY;
//   };

//   return (
//     <View style={{flex: 1}}>
//       <StatusBar
//         translucent
//         backgroundColor="transparent"
//         barStyle="light-content"
//       />

//       {/* Background Image Behind Header + SearchBar */}
//       <ImageBackground
//         source={require('../assets/image/dish2.jpg')} // change path as needed
//         style={styles.backgroundImage}
//         resizeMode="cover">
//         {/* Header */}
//         <Animated.View
//           style={[
//             styles.header,
//             {
//               transform: [{translateY: headerTranslateY}],
//               paddingTop:
//                 Platform.OS === 'ios' ? 50 : StatusBar.currentHeight || 25,
//             },
//           ]}>
//           <Text style={styles.headerTitle}>Food</Text>
//           <View style={styles.iconContainer}>
//             <TouchableOpacity>
//               <Icon name="notifications-outline" size={22} color="white" />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Icon name="chatbox-outline" size={22} color="white" />
//             </TouchableOpacity>
//           </View>
//         </Animated.View>

//         {/* Animated Search Bar */}
//         <Animated.View
//           style={[
//             styles.searchBarWrapper,
//             {
//               transform: [{translateY: searchTranslateY}],
//             },
//           ]}>
//           <SearchBarWithMic />
//         </Animated.View>
//       </ImageBackground>

//       {/* Scrollable content */}
//       <ScrollView
//         contentContainerStyle={{paddingTop: HEADER_HEIGHT + 60}}
//         scrollEventThrottle={16}
//         onScroll={handleScroll}>
//         <View style={styles.sectionTop}>
//           <Carousel />
//         </View>
//         <View style={styles.section}>
//           <CategoryCarousel />
//         </View>
//         <View style={styles.section}>
//           <BannerCarousel />
//         </View>
//         <View style={styles.section}>
//           <FoodCards />
//         </View>
//         <View style={styles.section}>
//           <CarouselScreen />
//         </View>
//       </ScrollView>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   backgroundImage: {
//     position: 'absolute',
//     width: '100%',
//     height: 200,
//     top: 0,
//     zIndex: 100,
//   },
//   header: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     height: 100,
//     paddingHorizontal: 16,
//     backgroundColor: 'transparent',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     zIndex: 150,
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   iconContainer: {
//     flexDirection: 'row',
//     gap: 16,
//   },
//   searchBarWrapper: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     height: 60,
//     zIndex: 140,
//     justifyContent: 'center',
//     paddingHorizontal: 12,
//   },
//   section: {
//     backgroundColor: 'white',
//     borderRadius: 0,
//     elevation: 0.5,
//     borderWidth: 0.3,
//     borderColor: 'lightgrey',
//     marginTop: 10,
//   },
//   sectionTop: {
//     backgroundColor: 'white',
//     borderRadius: 0,
//     elevation: 0.5,
//     borderWidth: 0.3,
//     borderColor: 'lightgrey',
//     marginTop: 10,
//   },
// });
