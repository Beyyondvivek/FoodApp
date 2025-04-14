/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
// import Carousel from '../../components/Carousel';
import VideoFeed from './VideoFeed';

export default function FeedScreen() {
  return (
    <View style={{height:'100%', justifyContent:'center'}}>
      {/* <Text>Feed Screen</Text> */}
      <VideoFeed />
    </View>
  );
}
