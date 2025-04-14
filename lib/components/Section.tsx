import React from 'react';
import type {PropsWithChildren} from 'react';

import {StyleSheet, View} from 'react-native';
import Heading from './Heading';
import Colors from '../Colors';

const sectionStyles = StyleSheet.create({
  sectionContainer: {
    margin: 10,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'gray',
    // borderWidth: 1,
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 10,
    elevation: 3,
  },
  sectionTitleContainer: {
    borderBottomColor: Colors.divider,
    borderBottomWidth: 1,
    width: '100%',
    padding: 5,
  },
  sectionTitle: {
    fontSize: 24,
    color: 'black',
    fontWeight: '600',
  },
  sectionBody: {
    padding: 10,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

type SectionProps = PropsWithChildren<{
  title?: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  return (
    <View style={sectionStyles.sectionContainer}>
      {title ? (
        <View style={sectionStyles.sectionTitleContainer}>
          <Heading>{title}</Heading>
        </View>
      ) : null}
      <View style={sectionStyles.sectionBody}>{children}</View>
    </View>
  );
}

export default Section;
