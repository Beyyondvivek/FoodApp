/* eslint-disable react/no-unstable-nested-components */
// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {StyleSheet, ColorValue} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import HomeScreen from '../../screens/HomeScreen';
// import FeedScreen from '../../screens/feed/FeedScreen';
// import RecipeScreen from '../../screens/recipe/RecipeScreen';
// import CreatePostScreen from '../../screens/create_post/CreatePostScreen';

// // Import Screens
// // import HomeScreen from '../screens/home';
// // import CoursesScreen from '../screens/Courses';
// // import PremiumScreen from '../screens/premium';
// // import SettingsScreen from '../screens/setting';
// // import LeagueScreen from '../screens/leagues';

// const Tab = createBottomTabNavigator();

// const styles = StyleSheet.create({
//   barStyle: {
//     backgroundColor: 'white',
//     height: 70,
//     borderTopWidth: 0,
//     elevation: 3,
//     shadowColor: 'grey',
//   },
// });

// const screens = [
//   {
//     name: 'HomeScreen',
//     component: HomeScreen,
//     icon: (color: ColorValue, focused: boolean) => (
//       <Icon name="home" size={28} color={focused ? '#FCCD2A' : 'gray'} />
//     ),
//   },
//   {
//     name: 'FeedScreen',
//     component: FeedScreen,
//     icon: (color: ColorValue, focused: boolean) => (
//       <Icon
//         name="newspaper-variant"
//         size={28}
//         color={focused ? '#FCCD2A' : 'gray'}
//       />
//     ),
//   },
//   // {
//   //   name: 'Leagues',
//   //   component: HomeScreen,
//   //   icon: (color: ColorValue, focused: boolean) => (
//   //     <Icon name="shield" size={20} color={focused ? '#FCCD2A' : 'gray'} />
//   //   ),
//   // },
//   {
//     name: 'Create',
//     component: CreatePostScreen,
//     icon: (color: ColorValue, focused: boolean) => (
//       <Icon
//         name="plus-circle-outline"
//         size={28}
//         color={focused ? '#FCCD2A' : 'gray'}
//       />
//     ),
//   },
//   {
//     name: 'RecipeScreen',
//     component: RecipeScreen,
//     icon: (color: ColorValue, focused: boolean) => (
//       <Icon name="chef-hat" size={28} color={focused ? '#FCCD2A' : 'gray'} />
//     ),
//   },
// ];

// function BottomTabNavigator() {
//   return (
//     <Tab.Navigator
//       initialRouteName="HomeScreen"
//       screenOptions={{
//         tabBarLabel: () => null, // Hide tab labels
//         tabBarLabelStyle: {fontSize: 12, fontWeight: '600'},
//         tabBarStyle: styles.barStyle,
//         tabBarActiveTintColor: '#FCCD2A',
//         tabBarInactiveTintColor: 'lightgrey',
//         headerShown: false,
//       }}>
//       {screens.map(({name, component, icon}) => (
//         <Tab.Screen
//           key={name}
//           name={name}
//           component={component}
//           options={{
//             tabBarIcon: ({focused, color}) => icon(color, focused),
//           }}
//         />
//       ))}
//     </Tab.Navigator>
//   );
// }

// export default BottomTabNavigator;

// import React, { useRef, useEffect } from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { StyleSheet, ColorValue, Animated, Easing } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import HomeScreen from '../../screens/HomeScreen';
// import FeedScreen from '../../screens/feed/FeedScreen';
// import RecipeScreen from '../../screens/recipe/RecipeScreen';
// import CreatePostScreen from '../../screens/create_post/CreatePostScreen';

// const Tab = createBottomTabNavigator();

// const styles = StyleSheet.create({
//   barStyle: {
//     backgroundColor: 'white',
//     height: 70,
//     borderTopWidth: 0,
//     elevation: 3,
//     shadowColor: 'grey',
//   },
// });

// const screens = [
//   {
//     name: 'HomeScreen',
//     component: HomeScreen,
//     icon: (color: ColorValue, focused: boolean) => (
//       <Icon name="home" size={28} color={focused ? '#FCCD2A' : 'gray'} />
//     ),
//   },
//   {
//     name: 'FeedScreen',
//     component: FeedScreen,
//     icon: (color: ColorValue, focused: boolean) => (
//       <Icon
//         name="newspaper-variant"
//         size={28}
//         color={focused ? '#FCCD2A' : 'gray'}
//       />
//     ),
//   },
//   {
//     name: 'Create',
//     component: CreatePostScreen,
//     icon: (color: ColorValue, focused: boolean) => (
//       <Icon
//         name="plus-circle-outline"
//         size={28}
//         color={focused ? '#FCCD2A' : 'gray'}
//       />
//     ),
//   },
//   {
//     name: 'RecipeScreen',
//     component: RecipeScreen,
//     icon: (color: ColorValue, focused: boolean) => (
//       <Icon name="chef-hat" size={28} color={focused ? '#FCCD2A' : 'gray'} />
//     ),
//   },
// ];

// function BottomTabNavigator() {
//   // Create an object to store Animated.Value for each tab
//   const animatedValues: { [key: string]: Animated.Value } = screens.reduce(
//     (acc, screen) => {
//       acc[screen.name] = new Animated.Value(1); // Initial scale is 1
//       return acc;
//     },
//     {} as { [key: string]: Animated.Value },
//   );

//   // Function to animate the icon
//   const animateIcon = (screenName: string) => {
//     // Reset all animations to scale 1
//     Object.keys(animatedValues).forEach(key => {
//       if (key !== screenName) {
//         Animated.timing(animatedValues[key], {
//           toValue: 1,
//           duration: 200,
//           useNativeDriver: true,
//         }).start();
//       }
//     });

//     // Animate the clicked icon: scale up to 1.3 and back to 1
//     Animated.sequence([
//       Animated.timing(animatedValues[screenName], {
//         toValue: 1.4,
//         duration: 150,
//         easing: Easing.out(Easing.ease),
//         useNativeDriver: true,
//       }),
//       Animated.timing(animatedValues[screenName], {
//         toValue: 1,
//         duration: 150,
//         easing: Easing.in(Easing.ease),
//         useNativeDriver: true,
//       }),
//     ]).start();
//   };

//   return (
//     <Tab.Navigator
//       initialRouteName="HomeScreen"
//       screenOptions={{
//         tabBarLabel: () => null,
//         tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
//         tabBarStyle: styles.barStyle,
//         tabBarActiveTintColor: 'white',
//         tabBarInactiveTintColor: 'lightgrey',
//         headerShown: false,
//       }}>
//       {screens.map(({ name, component, icon }) => (
//         <Tab.Screen
//           key={name}
//           name={name}
//           component={component}
//           options={{
//             tabBarIcon: ({ focused, color }) => (
//               <Animated.View
//                 style={{
//                   transform: [{ scale: animatedValues[name] }],
//                 }}>
//                 {icon(color, focused)}
//               </Animated.View>
//             ),
//           }}
//           listeners={{
//             tabPress: () => {
//               animateIcon(name);
//             },
//           }}
//         />
//       ))}
//     </Tab.Navigator>
//   );
// }

// export default BottomTabNavigator;

import React, {useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, ColorValue, Animated, Easing} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../../screens/HomeScreen';
import FeedScreen from '../../screens/feed/FeedScreen';
import RecipeScreen from '../../screens/recipe/RecipeScreen';
import CreatePostScreen from '../../screens/create_post/CreatePostScreen';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: 'white',
    height: 70,
    borderTopWidth: 0,
    elevation: 3,
    shadowColor: 'grey',
  },
});

const screens = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
    icon: (color: ColorValue, focused: boolean) => (
      <Icon name="home" size={28} color={focused ? '#FCCD2A' : 'gray'} />
    ),
  },
  {
    name: 'FeedScreen',
    component: FeedScreen,
    icon: (color: ColorValue, focused: boolean) => (
      <Icon
        name="newspaper-variant"
        size={28}
        color={focused ? '#FCCD2A' : 'gray'}
      />
    ),
  },
  {
    name: 'Create',
    component: CreatePostScreen,
    icon: (color: ColorValue, focused: boolean) => (
      <Icon
        name="plus-circle-outline"
        size={28}
        color={focused ? '#FCCD2A' : 'gray'}
      />
    ),
  },
  {
    name: 'RecipeScreen',
    component: RecipeScreen,
    icon: (color: ColorValue, focused: boolean) => (
      <Icon name="chef-hat" size={28} color={focused ? '#FCCD2A' : 'gray'} />
    ),
  },
];

function BottomTabNavigator() {
  // Create objects to store Animated.Value for scale and opacity for each tab
  const animatedScales: {[key: string]: Animated.Value} = screens.reduce(
    (acc, screen) => {
      acc[screen.name] = new Animated.Value(1);
      return acc;
    },
    {} as {[key: string]: Animated.Value},
  );

  const animatedOpacities: {[key: string]: Animated.Value} = screens.reduce(
    (acc, screen) => {
      acc[screen.name] = new Animated.Value(1);
      return acc;
    },
    {} as {[key: string]: Animated.Value},
  );

  // Function to animate the icon
  const animateIcon = (screenName: string) => {
    // Reset all animations to default values
    Object.keys(animatedScales).forEach(key => {
      if (key !== screenName) {
        Animated.parallel([
          Animated.timing(animatedScales[key], {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(animatedOpacities[key], {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }),
        ]).start();
      }
    });

    // Animate the clicked icon: scale up to 1.25 and back to 1 with a bounce, plus opacity pulse
    Animated.parallel([
      Animated.sequence([
        Animated.timing(animatedScales[screenName], {
          toValue: 1.25, // Reduced scale for a subtler effect
          duration: 200, // Slightly longer for smoothness
          easing: Easing.elastic(1), // Bounce effect on scale up
          useNativeDriver: true,
        }),
        Animated.timing(animatedScales[screenName], {
          toValue: 1,
          duration: 200,
          easing: Easing.inOut(Easing.ease), // Smooth return
          useNativeDriver: true,
        }),
      ]),
      Animated.sequence([
        Animated.timing(animatedOpacities[screenName], {
          toValue: 0.7, // Subtle opacity dip
          duration: 200,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(animatedOpacities[screenName], {
          toValue: 1,
          duration: 200,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarLabel: () => null,
        tabBarLabelStyle: {fontSize: 12, fontWeight: '600'},
        tabBarStyle: styles.barStyle,
        tabBarActiveTintColor: '#FCCD2A', // Updated to match icon color
        tabBarInactiveTintColor: 'lightgrey',
        headerShown: false,
      }}>
      {screens.map(({name, component, icon}) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            tabBarIcon: ({focused, color}) => (
              <Animated.View
                style={{
                  transform: [{scale: animatedScales[name]}],
                  opacity: animatedOpacities[name],
                }}>
                {icon(color, focused)}
              </Animated.View>
            ),
          }}
          listeners={{
            tabPress: () => {
              animateIcon(name);
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
