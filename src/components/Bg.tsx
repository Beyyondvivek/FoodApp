import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const TopBackground = () => {
  return (
    <View style={styles.container}>
      <Svg
        width={SCREEN_WIDTH}
        height={400} // 👈 manually increase here
        viewBox={`0 0 ${SCREEN_WIDTH} 400`} // 👈 match here
      >
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#6366f1" stopOpacity="1" />
            <Stop offset="1" stopColor="#8b5cf6" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Path
          d={`
      M0,0
      H${SCREEN_WIDTH}
      V300           
      Q${SCREEN_WIDTH / 2},400 0,300 
      Z`}
          fill="url(#grad)"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'static',
    height: 200,
  },
});

export default TopBackground;
