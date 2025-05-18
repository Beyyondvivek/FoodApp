/* eslint-disable @typescript-eslint/no-unused-vars */
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

// import React, {useRef, useEffect} from 'react';
// import {
//   View,
//   Text,
//   Animated,
//   StyleSheet,
//   TouchableOpacity,
//   StatusBar,
//   Platform,
//   SafeAreaView,
//   NativeSyntheticEvent,
//   NativeScrollEvent,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import CategoryCarousel from '../components/CategoryCarousel';
// import CarouselScreen from '../components/CarouselScreen';
// import BannerCarousel from '../components/BannerCarousel';
// import SearchBarWithMic from '../components/SearchBar';
// import GridRecipeCards from '../components/IndianCuisine';
// import StaticBanner from '../components/StaticBanner';
// import SquareCarousel from '../components/SquareCarousel';
// import useNavigate from '../hooks/useNavigate';
// import InternationalCuisine from '../components/InternationalCuisine';
// import IndianCuisine from '../components/IndianCuisine';
// import RecipeCarousel from '../components/RecipeCard';
// import VideoCarousel from '../components/VideoCarousel';
// import HorizontalCarousel from '../components/HorizontalCarousel';

// // interface HomeScreenProps {
// //   scrollY: Animated.Value;
// //   onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
// //   lastScrollY: React.MutableRefObject<number>;
// //   translateY: Animated.Value;
// //   animateTabBar: (show: boolean) => void;
// // }

// const HEADER_HEIGHT = 100;
// const SEARCH_HEIGHT = 80;

// export default function HomeScreen({navigation}) {
//   const scrollY = useRef(new Animated.Value(0)).current;
//   const {gotoProfileScreen} = useNavigate();
//   const headerTranslateY = scrollY.interpolate({
//     inputRange: [0, HEADER_HEIGHT],
//     outputRange: [0, -HEADER_HEIGHT],
//     extrapolate: 'clamp',
//   });

//   const searchTranslateY = scrollY.interpolate({
//     inputRange: [0, HEADER_HEIGHT],
//     outputRange: [HEADER_HEIGHT, 0],
//     extrapolate: 'clamp',
//   });

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <StatusBar
//         translucent
//         backgroundColor="transparent"
//         barStyle="dark-content"
//       />
//       <View style={{backgroundColor: 'black', height: 100, flex: 1}}>
//         {/* Search Bar */}
//         <Animated.View
//           style={[
//             styles.searchBarWrapper,
//             {
//               transform: [{translateY: searchTranslateY}],
//             },
//           ]}>
//           <SearchBarWithMic navigation={navigation} />
//         </Animated.View>

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
//           <Text style={styles.headerTitle}>Beyyond</Text>
//           <View style={styles.iconContainer}>
//             <TouchableOpacity onPress={gotoProfileScreen}>
//               <MaterialCommunityIcons name="account" size={24} color="white" />
//               {/* <Image
//                 required={ '../assets/image/image1.jpg'}
//                 style={styles.profileIcon}
//               /> */}
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => console.log('Notification')}>
//               <Icon name="notifications-outline" size={24} color="white" />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => console.log('Chat')}>
//               <Icon name="chatbox-outline" size={24} color="white" />
//             </TouchableOpacity>
//           </View>
//         </Animated.View>
//       </View>
//       {/* Scrollable Content */}
//       <Animated.ScrollView
//         scrollEventThrottle={16}
//         onScroll={Animated.event(
//           [{nativeEvent: {contentOffset: {y: scrollY}}}],
//           {useNativeDriver: true},
//         )}
//         contentContainerStyle={{
//           paddingTop: HEADER_HEIGHT + SEARCH_HEIGHT,
//         }}>
//         {/* <View style={styles.sectionTop}>
//           <Carousel />
//         </View> */}
//         <View style={styles.section}>
//           <StaticBanner
//             imageUrl={require('../assets/image/image2.jpg')}
//             height={200}
//             onPress={() => console.log('Banner tapped')}
//             showLoader={true}
//           />
//         </View>
//         <HorizontalCarousel />
//         <View style={styles.sectionSquareCarousel}>
//           <SquareCarousel />
//         </View>
//         <View style={styles.sectionTop}>
//           <IndianCuisine />
//         </View>
//         <View style={styles.sectionTop}>
//           <InternationalCuisine />
//         </View>
//         <View style={styles.section}>
//           <CategoryCarousel />
//         </View>
//         <View style={styles.section}>
//           <BannerCarousel />
//         </View>
//         <View style={styles.sectionVideo}>
//           <VideoCarousel />
//         </View>

//         <View style={styles.section}>
//           <View style={{padding: 16}}>
//             <Text style={{fontSize: 22, fontWeight: 'bold'}}>
//               Explore Recipes
//             </Text>
//           </View>
//           <RecipeCarousel />
//         </View>
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
//     // position: 'absolute',
//     // left: 0,
//     // right: 0,
//     height: SEARCH_HEIGHT,
//     backgroundColor: '#6A5ACD',
//     zIndex: 150,
//     justifyContent: 'center',
//     // borderBottomEndRadius: 16,
//     // borderBottomStartRadius: 18,
//   },
//   section: {
//     backgroundColor: 'white',
//     borderRadius: 0,
//     // elevation: 0.5,
//     // borderWidth: 0.3,
//     borderColor: 'lightgrey',
//     marginTop: 0,
//   },
//   sectionVideo: {
//     backgroundColor: 'white',
//     borderRadius: 0,
//     // elevation: 0.5,
//     // borderWidth: 0.3,
//     borderColor: 'lightgrey',
//     marginTop: 10,
//     marginBottom: 16,
//   },
//   sectionSquareCarousel: {
//     backgroundColor: 'white',
//     borderRadius: 0,
//     // elevation: 0.5,
//     // borderWidth: 0.3,
//     borderColor: 'lightgrey',
//     marginTop: 0,
//   },
//   sectionTop: {
//     backgroundColor: 'white',
//     borderRadius: 0,
//     // elevation: 0.5,
//     // borderWidth: 0.3,
//     borderColor: 'lightgrey',
//     marginTop: 10,
//   },
// });

import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  SafeAreaView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CategoryCarousel from '../components/CategoryCarousel';
import CarouselScreen from '../components/CarouselScreen';
import BannerCarousel from '../components/BannerCarousel';
import SearchBarWithMic from '../components/SearchBar';
import GridRecipeCards from '../components/IndianCuisine';
import StaticBanner from '../components/StaticBanner';
import SquareCarousel from '../components/SquareCarousel';
import useNavigate from '../hooks/useNavigate';
import InternationalCuisine from '../components/InternationalCuisine';
import IndianCuisine from '../components/IndianCuisine';
import RecipeCarousel from '../components/RecipeCard';
import VideoCarousel from '../components/VideoCarousel';
import HorizontalCarousel from '../components/HorizontalCarousel';
import NotificationScreen from './notification.tsx/NotificationScreen';

const HEADER_HEIGHT = 100;
const SEARCH_HEIGHT = 100;

export default function HomeScreen({
  navigation,
  onScroll,
}: {
  navigation: any;
  onScroll?: (y: number) => void;
}) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const {gotoProfileScreen} = useNavigate();
  const { gotoNotificationScreen } = useNavigate();
  // Header translateY: Move up and out of view when scrolling up
  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
    extrapolate: 'clamp',
  });

  // Header content opacity: Fade out title and icons when scrolling up
  const headerContentOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  // Search bar translateY: Start below header (HEADER_HEIGHT) and move to top (0) when scrolling up
  const searchTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [HEADER_HEIGHT, 0],
    extrapolate: 'clamp',
  });

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const y = event.nativeEvent.contentOffset.y;
    if (onScroll) {
      onScroll(y);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#6A5ACD'}}>
      <StatusBar
        // translucent
        backgroundColor="black"
        barStyle="dark-content"
      />
      {/* Header with static background and fading content */}
      <Animated.View
        style={[
          styles.header,
          {
            transform: [{translateY: headerTranslateY}],
            paddingTop:
              Platform.OS === 'ios' ? 0 : StatusBar.currentHeight || 25,
          },
        ]}>
        <View style={styles.headerBackground} />
        <Animated.View style={{opacity: headerContentOpacity, flex: 1}}>
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>Beyyond</Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={gotoProfileScreen}>
                <MaterialCommunityIcons
                  name="account"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
              <TouchableOpacity
                // onPress={() => console.log('Notification')}
                onPress={() => navigation.navigate('NotificationScreen')}>
                <Icon name="notifications-outline" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('Chat')}>
                <Icon name="chatbox-outline" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </Animated.View>

      {/* Search Bar */}
      <Animated.View
        style={[
          styles.searchBarWrapper,
          {
            transform: [{translateY: searchTranslateY}],
          },
        ]}>
        <SearchBarWithMic navigation={navigation} />
      </Animated.View>

      {/* Scrollable Content */}
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: true,
            listener: handleScroll,
          },
        )}
        contentContainerStyle={{
          paddingTop: HEADER_HEIGHT + SEARCH_HEIGHT,
        }}
        style={{backgroundColor: 'white'}}>
        <View style={styles.section}>
          <StaticBanner
            imageUrl={require('../assets/image/image2.jpg')}
            height={200}
            onPress={() => console.log('Banner tapped')}
            showLoader={true}
          />
        </View>
        <HorizontalCarousel />
        <View style={styles.sectionSquareCarousel}>
          <SquareCarousel />
        </View>
        <View style={styles.sectionTop}>
          <IndianCuisine />
        </View>
        <View style={styles.sectionTop}>
          <InternationalCuisine />
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
    zIndex: 200,
    paddingHorizontal: 16,
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#6A5ACD',
  },
  headerContent: {
    flex: 1,
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
    top: 0,
    height: SEARCH_HEIGHT,
    backgroundColor: '#6A5ACD',
    zIndex: 150,
    justifyContent: 'center',
    paddingTop: 35,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 0,
    borderColor: 'lightgrey',
    marginTop: 0,
  },
  sectionVideo: {
    backgroundColor: 'white',
    borderRadius: 0,
    borderColor: 'lightgrey',
    marginTop: 10,
    marginBottom: 16,
  },
  sectionSquareCarousel: {
    backgroundColor: 'white',
    borderRadius: 0,
    borderColor: 'lightgrey',
    marginTop: 0,
  },
  sectionTop: {
    backgroundColor: 'white',
    borderRadius: 0,
    borderColor: 'lightgrey',
    marginTop: 10,
  },
});
