import React, {PropsWithChildren} from 'react';

import {Text, StyleSheet, useColorScheme} from 'react-native';
import Colors from '../Colors';

const headingStyles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: '600',
  },
  h2: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
    paddingHorizontal: 10,
    color: 'black',
  },
});

export const H1 = ({children}: PropsWithChildren) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Text
      style={[
        headingStyles.h1,
        {
          color: isDarkMode ? Colors.dark : Colors.dark,
        },
      ]}>
      {children}
    </Text>
  );
};

export const H2 = ({children}: PropsWithChildren) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Text
      style={[
        headingStyles.h2,
        {
          color: isDarkMode ? Colors.dark : Colors.dark,
        },
      ]}>
      {children}
    </Text>
  );
};

export default function Heading({children}: PropsWithChildren) {
  return <H2>{children}</H2>;
}
