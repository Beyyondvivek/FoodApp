

/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {View, Animated, StyleSheet, StatusBar, Platform} from 'react-native';

import SearchBarWithMic from '../../components/SearchBar';
import GridRecipeCards from '../../components/IndianCuisine';
import SquareCarousel from '../../components/SquareCarousel';
import ChefListScreen from './LocalTrendingRecipe';
import BannerCarousel from '../../components/BannerCarousel';
import RecipeListScreen from './NutritionalCardList';
// import CalorieCalculatorScreen from './CalorieCalculator';
// import RecipeDetailScreen from './RecipePage';
import {SafeAreaView} from 'react-native-safe-area-context';
import IndianCuisine from '../../components/IndianCuisine';
import CustomHeader from '../../components/CustomHeader';
import CategoryChips from '../../components/chips/CategoryChips';

const HEADER_HEIGHT = Platform.OS === 'ios' ? 140 : 70;
const SEARCH_HEIGHT = 60;
const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 0;
const SEARCH_MARGIN_TOP = 0; // Margin below status bar

export default function RecipeScreen({navigation}) {
  const scrollY = useRef(new Animated.Value(0)).current;

  // Header animation
  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
    extrapolate: 'clamp',
  });

  // Search bar animation
  const searchTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT + STATUS_BAR_HEIGHT + SEARCH_MARGIN_TOP],
    extrapolate: 'clamp',
  });

  // Fade effect: Start at 1 (visible) and reduce opacity as header collapses
  const searchOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT / 2, HEADER_HEIGHT],
    outputRange: [1, 0.7, 0.9], // Visible initially, slight fade, then back to semi-opaque
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView
      style={{backgroundColor: 'white', flex: 1}}
      edges={['top', 'left', 'right']}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <CategoryChips />
      <CustomHeader />
      {/* Animated Header Background */}
      {/* <Animated.View
        style={[
          styles.headerBackground,
          {transform: [{translateY: headerTranslateY}]},
        ]}
      /> */}

      {/* Sticky Search Bar with Initial Visibility and Fade */}
      {/* <Animated.View
        style={[
          styles.searchBarContainer,
          {
            transform: [{translateY: searchTranslateY}],
            top: STATUS_BAR_HEIGHT + SEARCH_MARGIN_TOP,
          },
        ]}>
        <SearchBarWithMic navigation={navigation} />
      </Animated.View> */}

      {/* Scrollable Content */}
      <Animated.ScrollView
        contentContainerStyle={{paddingTop: HEADER_HEIGHT + 0}}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}>
        <View style={styles.sectionBanner}>
          <BannerCarousel />
        </View>
        <View style={styles.sectionSquareCarousel}>
          <SquareCarousel />
        </View>
        <RecipeListScreen />
        <ChefListScreen />
        <View style={styles.sectionTop}>
          <IndianCuisine />
        </View>
        {/* <CalorieCalculatorScreen /> */}
        {/* <RecipeDetailScreen /> */}
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    backgroundColor: '#6A5ACD',
    zIndex: 25,
  },
  searchBarContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 50,
    paddingHorizontal: 16,
    backgroundColor: 'white', // Semi-transparent white background
    paddingVertical: 10,
    borderRadius: 10, // Modern rounded corners
    // elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    paddingTop: 20,
  },
  sectionBanner: {
    backgroundColor: 'white',
    marginBottom: 0,
    marginTop: 50,
  },
  sectionSquareCarousel: {
    backgroundColor: 'white',
    borderRadius: 0,
    marginTop: 10,
  },
  sectionTop: {
    backgroundColor: 'white',
    borderRadius: 0,
    marginTop: 0,
    padding: 0,
    marginBottom: 20,
    // elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});

