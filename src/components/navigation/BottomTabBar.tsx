// /* eslint-disable react-native/no-inline-styles */
// import React from 'react';
// import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// type TabItem = {
//   name: string;
//   icon: string;
//   label: string;
// };

// type BottomTabBarProps = {
//   state: any;
//   descriptors: any;
//   navigation: any;
// };

// export const BottomTabBar: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
//   const tabs: TabItem[] = [
//     { name: 'HomeScreen', icon: 'home-outline', label: 'Home' },
//     { name: 'Search', icon: 'search-outline', label: 'Search' },
//     { name: 'Favorites', icon: 'heart-outline', label: 'Favorites' },
//     { name: 'Profile', icon: 'person-outline', label: 'Profile' },
//   ];

//   return (
//     <View style={styles.container}>
//       {tabs.map((tab, index) => {
//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: tab.name,
//             canPreventDefault: true,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(tab.name);
//           }
//         };

//         return (
//           <TouchableOpacity
//             key={tab.name}
//             accessibilityRole="button"
//             accessibilityState={isFocused ? { selected: true } : {}}
//             onPress={onPress}
//             style={styles.tab}
//           >
//             <Ionicons
//               name={tab.icon}
//               size={24}
//               color={isFocused ? '#673ab7' : '#757575'}
//             />
//             <Text style={[styles.label, { color: isFocused ? '#673ab7' : '#757575' }]}>
//               {tab.label}
//             </Text>
//             {isFocused && <View style={styles.activeIndicator} />}
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     height: 70,
//     backgroundColor: 'white',
//     borderTopWidth: 1,
//     borderTopColor: '#f0f0f0',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   tab: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: 8,
//   },
//   label: {
//     fontSize: 12,
//     marginTop: 4,
//     fontWeight: '500',
//   },
//   activeIndicator: {
//     position: 'absolute',
//     top: 0,
//     height: 3,
//     width: '50%',
//     backgroundColor: '#673ab7',
//     borderBottomRightRadius: 2,
//     borderBottomLeftRadius: 2,
//   },
// });
