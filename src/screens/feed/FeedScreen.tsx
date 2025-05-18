/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {View, Animated} from 'react-native';
import React from 'react';
// import Carousel from '../../components/Carousel';
import VideoFeed from './VideoFeed';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRef} from 'react';

export default function FeedScreen() {
  return (
    <SafeAreaView
      style={{height: '100%', justifyContent: 'center', flex: 1}}
      edges={['top', 'left', 'right']}>
      <VideoFeed
        scrollY={new Animated.Value(0)}
        onScroll={() => {}}
        lastScrollY={useRef(0)}
        translateY={new Animated.Value(0)}
        animateTabBar={() => {}}
      />
    </SafeAreaView>
  );
}
