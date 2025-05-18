/* eslint-disable react-hooks/exhaustive-deps */
// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const SearchBarWithMic = () => {
//   const [searchText, setSearchText] = useState('');

//   const handleVoicePress = () => {
//     // TODO: Integrate voice recognition here (e.g., using react-native-voice)
//     console.log('Mic pressed');
//   };

//   return (
//     <View style={styles.container}>
//       <Icon name="search" size={24} color="#888" style={styles.icon} />
//       <TextInput
//         style={styles.input}
//         placeholder="Search for 'Fruit Bowl'"
//         placeholderTextColor="#888"
//         value={searchText}
//         onChangeText={setSearchText}
//       />
//       <TouchableOpacity onPress={handleVoicePress}>
//         <Icon name="mic" size={24} color="#888" style={styles.icon} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     alignItems: 'center',
//     paddingHorizontal: 12,
//     height: 50,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     elevation: 4,
//     marginHorizontal: 16,
//     marginVertical: 8,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//     color: '#000',
//     paddingHorizontal: 8,
//     paddingVertical: Platform.OS === 'android' ? 0 : 10,
//   },
//   icon: {
//     marginHorizontal: 4,
//   },
// });

// export default SearchBarWithMic;

// import React, {useState} from 'react';
// import {
//   View,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   Platform,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const SearchBarWithMic = ({navigation}) => {
//   const [searchText, setSearchText] = useState('');

//   const handleVoicePress = () => {
//     // Placeholder for voice recognition
//     console.log('Mic pressed - Voice recognition placeholder');
//     // Simulate voice input (replace with actual voice recognition later)
//     setSearchText('Voice search example');
//   };

//   const handleSearchBarPress = () => {
//     // Navigate to SearchScreen with current search text
//     navigation.navigate('SearchScreen', {query: searchText});
//   };

//   return (
//     <TouchableOpacity onPress={handleSearchBarPress} style={styles.container}>
//       <Icon name="search" size={24} color="#888" style={styles.icon} />
//       <TextInput
//         style={styles.input}
//         placeholder="Search for 'Fruit Bowl'"
//         placeholderTextColor="#888"
//         value={searchText}
//         onChangeText={setSearchText}
//         editable={false} // Prevent direct typing here; typing happens in SearchScreen
//       />
//       <TouchableOpacity onPress={handleVoicePress}>
//         <Icon name="mic" size={24} color="#888" style={styles.icon} />
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     alignItems: 'center',
//     paddingHorizontal: 12,
//     height: 50,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: {width: 0, height: 2},
//     elevation: 4,
//     marginHorizontal: 16,
//     marginVertical: 8,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//     color: '#000',
//     paddingHorizontal: 8,
//     paddingVertical: Platform.OS === 'android' ? 0 : 10,
//   },
//   icon: {
//     marginHorizontal: 4,
//   },
// });

// export default SearchBarWithMic;

// import React, {useState, useEffect, useRef} from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   // Platform,
//   Animated,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const placeholderTexts = [
//   'Search for fruitcakes',
//   'Search for pancakes',
//   'Search for maggie',
//   'Search for chicken recipe',
//   'Search for more recipes',
// ];

// const SearchBarWithMic = ({navigation}) => {
//   const [searchText, setSearchText] = useState('');
//   const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
//   const [showText, setShowText] = useState(true);
//   const translateY = useRef(new Animated.Value(0)).current;

//   // Animation effect for text switch
//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Animate current text upward and hide
//       Animated.timing(translateY, {
//         toValue: -20, // Move up within bounds
//         duration: 400,
//         useNativeDriver: true,
//       }).start(() => {
//         setShowText(false); // Hide current text
//         setCurrentPlaceholderIndex(
//           prev => (prev + 1) % placeholderTexts.length,
//         );
//         translateY.setValue(20); // Start new text below
//         setShowText(true); // Show new text
//         // Animate new text up to center
//         Animated.timing(translateY, {
//           toValue: 0,
//           duration: 400,
//           useNativeDriver: true,
//         }).start();
//       });
//     }, 3000); // Switch every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const handleVoicePress = () => {
//     console.log('Mic pressed - Voice recognition placeholder');
//     setSearchText('Voice search example');
//   };

//   const handleSearchBarPress = () => {
//     navigation.navigate('SearchScreen', {query: searchText});
//   };

//   return (
//     <TouchableOpacity onPress={handleSearchBarPress} style={styles.container}>
//       <Icon name="search" size={24} color="#888" style={styles.icon} />
//       <View style={styles.inputContainer}>
//         {showText && (
//           <Animated.View
//             style={[
//               styles.placeholderOverlay,
//               {
//                 transform: [{translateY}],
//               },
//             ]}>
//             <Text style={styles.placeholderText} numberOfLines={1}>
//               {placeholderTexts[currentPlaceholderIndex]}
//             </Text>
//           </Animated.View>
//         )}
//       </View>
//       <TouchableOpacity onPress={handleVoicePress}>
//         <Icon name="mic" size={24} color="#888" style={styles.icon} />
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     alignItems: 'center',
//     paddingHorizontal: 12,
//     height: 50,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: {width: 0, height: 2},
//     elevation: 4,
//     marginHorizontal: 16,
//     marginVertical: 8,
//   },
//   inputContainer: {
//     flex: 1,
//     position: 'relative',
//     height: '100%',
//     justifyContent: 'center',
//   },
//   placeholderOverlay: {
//     position: 'absolute',
//     top: 0,
//     left: 8,
//     right: 8,
//     bottom: 0,
//     justifyContent: 'center',
//   },
//   placeholderText: {
//     fontSize: 16,
//     color: '#888',
//   },
//   icon: {
//     marginHorizontal: 4,
//   },
// });

// export default SearchBarWithMic;

import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const placeholderTexts = [
  'fruitcakes',
  'pancakes',
  'maggie',
  'chicken recipe',
  'more recipes',
];

const SearchBarWithMic = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [showText, setShowText] = useState(true);
  const translateY = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  // Animation effect for text switch
  useEffect(() => {
    const interval = setInterval(() => {
      // Animate current text upward and fade out
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: -10, // Small movement within search bar
          duration: 600, // Longer for smoother transition
          easing: Easing.out(Easing.cubic), // Smooth easing
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0, // Fade out to vanish
          duration: 600,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]).start(() => {
        setShowText(false); // Hide current text
        setCurrentPlaceholderIndex(
          prev => (prev + 1) % placeholderTexts.length,
        );
        translateY.setValue(10); // Start new text slightly below
        opacity.setValue(0); // Start invisible
        setShowText(true); // Show new text
        // Animate new text up to center and fade in
        Animated.parallel([
          Animated.timing(translateY, {
            toValue: 0,
            duration: 600,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 1,
            duration: 600,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: true,
          }),
        ]).start();
      });
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleVoicePress = () => {
    console.log('Mic pressed - Voice recognition placeholder');
    setSearchText('Voice search example');
  };

  const handleSearchBarPress = () => {
    navigation.navigate('SearchScreen', {query: searchText});
  };

  return (
    <TouchableOpacity onPress={handleSearchBarPress} style={styles.container}>
      <Icon name="search" size={24} color="#888" style={styles.icon} />
      <View style={styles.inputContainer}>
        {showText && (
          <Animated.View
            style={[
              styles.placeholderOverlay,
              {
                transform: [{translateY}],
                opacity,
              },
            ]}>
            <Text style={styles.placeholderText} numberOfLines={1}>
              Search for{' '}
              <Text style={{fontWeight: 'bold', color: 'grey'}}>
                {placeholderTexts[currentPlaceholderIndex]}
              </Text>
            </Text>
          </Animated.View>
        )}
      </View>
      <TouchableOpacity
        onPress={handleVoicePress}
        style={{
          borderTopLeftRadius: 2,

          borderColor: 'lightgrey',
          borderStartWidth: 1,
        }}>
        <Icon name="mic" size={24} color="#888" style={styles.icon} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 50,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    elevation: 4,
    marginHorizontal: 16,
    // marginVertical: 8,
  },
  inputContainer: {
    flex: 1,
    position: 'relative',
    height: '100%',
    justifyContent: 'center',
  },
  placeholderOverlay: {
    position: 'absolute',
    top: 0,
    left: 8,
    right: 8,
    bottom: 0,
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 16,
    color: '#888',
  },
  icon: {
    marginHorizontal: 4,
  },
});

export default SearchBarWithMic;
