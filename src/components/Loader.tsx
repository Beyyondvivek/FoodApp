import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

type LoaderProps = {
  color?: string;
};

export default function Loader({color}: LoaderProps) {
  return (
    <View style={[loaderStyles.container, loaderStyles.horizontal]}>
      <ActivityIndicator size="large" color={color ?? '#00ff00'} />
    </View>
  );
}

const loaderStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
