import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, ColorValue} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import HomeScreen from '../../screens/HomeScreen';
import FeedScreen from '../../screens/feed/FeedScreen';

// Import Screens
// import HomeScreen from '../screens/home';
// import CoursesScreen from '../screens/Courses';
// import PremiumScreen from '../screens/premium';
// import SettingsScreen from '../screens/setting';
// import LeagueScreen from '../screens/leagues';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: 'white',
    height: 90,
    borderTopWidth: 0,
    elevation: 5,
  },
});

const screens = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
    icon: (color: ColorValue, focused: boolean) => (
      <Icon name="home" size={20} color={focused ? 'black' : 'gray'} />
    ),
  },
  {
    name: 'FeedScreen',
    component: FeedScreen,
    icon: (color: ColorValue, focused: boolean) => (
      <Icon name="check-square" size={20} color={focused ? 'black' : 'gray'} />
    ),
  },
  // {
  //   name: 'Leagues',
  //   component: HomeScreen,
  //   icon: (color: ColorValue, focused: boolean) => (
  //     <Icon name="shield" size={20} color={focused ? 'black' : 'gray'} />
  //   ),
  // },
  {
    name: 'Create',
    component: HomeScreen,
    icon: (color: ColorValue, focused: boolean) => (
      <Icon name="award" size={20} color={focused ? 'black' : 'gray'} />
    ),
  },
  {
    name: 'Recipe',
    component: HomeScreen,
    icon: (color: ColorValue, focused: boolean) => (
      <Icon name="settings" size={20} color={focused ? 'black' : 'gray'} />
    ),
  },
];

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12, fontWeight: '600'},
        tabBarStyle: styles.barStyle,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      }}>
      {screens.map(({name, component, icon}) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            tabBarIcon: ({focused, color}) => icon(color, focused),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
