/* eslint-disable @typescript-eslint/no-unused-vars */


import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigator from './src/components/navigation/BottomTabNavigator';
import SplashScreen from './src/components/SplashScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import FeedScreen from './src/screens/feed/FeedScreen';

export type RootStackParamList = {
  SplashScreen: undefined;
  TabbedScreens: undefined;
  Search: undefined;
  CategoryProductListing: {serverParams?: {category?: string}};
  ProductPage: undefined;
  Checkout: undefined;
  PlaceOrderPage: undefined;
  Cart: undefined;
  PersonalProfilePage: undefined;
  ShopDetail: undefined;
  SignUpPage: undefined;
  OrdersScreen: undefined;
  OrderDetailsScreen: undefined;
  LoginForAccountPage: undefined;
  AddressChange: undefined;
  OTP: undefined;
  Details: undefined;
  'My Addresses': undefined;
  BusinessDetail: undefined;
  Contact: undefined;
  Splash: undefined;
  ReferScreen: undefined;
  BottomTabNavigator: undefined;
  CouponScreen: undefined;
  HomeScreen: undefined;
  FeedScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
// const generatePDF = async () => {
//   try {
//     const options = {
//       html: `<h1>Billing Details</h1><p>This is a sample PDF content.</p>`,
//       fileName: 'Bill_Invoice',
//       directory: 'Documents',
//     };

//     const file = await RNHTMLtoPDF.convert(options);
//     Alert.alert('Download Complete', `Saved to: ${file.filePath}`);
//   } catch (error) {
//     Alert.alert('Error', 'Failed to generate PDF');
//   }
// };
const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4361EE', // Change this to your preferred color
    background: '#FFFFFF',
    text: '#4361EE',
    border: '#DDDDDD',
    card: '#FFFFFF',
  },
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer theme={CustomTheme}>
      <Stack.Navigator
        // initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen
          name="HomeScreen"
          component={BottomTabNavigator}
          options={{
            // title: 'Home',
            // headerShown: true,
            // headerTransparent: true,
            // headerTitleStyle: {
            //   fontSize: 20,
            //   fontWeight: 'bold',
            //   color: '#000',
            // },
            // headerRight: () => (
            //   <View style={{flexDirection: 'row', gap: 16}}>
            //     <TouchableOpacity onPress={() => console.log('Notifications')}>
            //       <Icon name="bell" size={22} color="black" />
            //     </TouchableOpacity>
            //     <TouchableOpacity onPress={() => console.log('Chat')}>
            //       <Icon name="message-circle" size={22} color="black" />
            //     </TouchableOpacity>
            //   </View>
            // ),
            // headerLeft: () => (
            //   <View style={{marginLeft: 12}}>
            //     <Text style={{fontSize: 18, fontWeight: '600'}}>Hello 👋</Text>
            //   </View>
            // ),
          }}
        />
        <Stack.Screen
          name="FeedScreen"
          component={FeedScreen}
          options={{headerShown: false, title: 'Login'}}
        />

        <Stack.Screen name="Splash" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
