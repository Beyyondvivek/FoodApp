/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../lib/Colors';
import useAuth from '../hooks/useAuth';
import Button from '../components/Button';
import {useColorScheme} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useNavigate from '../hooks/useNavigate';

const Logo = require('../assets/image/Dish.jpg');

type LoginScreenProps = {
  progress: boolean;
  error: boolean;
  onSignup: () => void;
};

function LoginScreen({error, progress}: LoginScreenProps) {
  // const {gotoForgotPassword} = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [pin, setPin] = useState('');
  const {login, errorMessage} = useAuth();

  const [phonenumberError, setPhoneNumberError] = useState('');

  const handlePhoneNumberChange = (text: string) => {
    setPhoneNumber(text);
    setPhoneNumberError('');
  };

  const handlePinchange = (text: string) => {
    setPin(text);
    setPhoneNumberError('');
  };

  const handleSubmit = () => {
    if (!phoneNumber.trim()) {
      setPhoneNumberError('Phone number is required');
      return;
    }
    const phoneNumberRegex = /^\d{10}$/; // Validates a 10-digit phone number
    if (!phoneNumberRegex.test(phoneNumber)) {
      setPhoneNumberError('Invalid phone number');
      return;
    }
    login(String(phoneNumber), String(pin));
  };
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: Colors.white,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <Image source={Logo} style={{width: 180, height: 100}} />
          {/* <Text style={styles.logotexts}>Logo</Text> */}
        </View>
        <View style={styles.login}>
          <Text style={styles.logintexts}>Log in / Sign up</Text>
        </View>
        {error ? <Text style={styles.error}>{errorMessage}</Text> : <></>}
        <View style={styles.innercontainer}>
          <View style={styles.inputBox}>
            {/* <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/1551/1551353.png',
              }}
              style={[styles.tinyLogo]}
            /> */}
            <Icon
              name="phone"
              size={18}
              color={'grey'}
              style={[styles.tinyLogo]}
            />
            <TextInput
              placeholder="Phone number"
              style={[
                styles.inputView,
                styles.inputText,
                {color: colorScheme === 'dark' ? 'black' : 'black'},
              ]}
              placeholderTextColor="grey"
              value={phoneNumber}
              onChangeText={handlePhoneNumberChange}
              keyboardType="numeric"
              maxLength={10}
            />
          </View>
          {phonenumberError ? (
            <Text style={styles.error}>{phonenumberError}</Text>
          ) : null}
          <View style={styles.inputBox}>
            <Icon
              name="lock"
              size={18}
              color={'grey'}
              style={[styles.tinyLogo]}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="PIN"
              style={[
                styles.inputView,
                styles.inputText,
                {color: colorScheme === 'dark' ? 'black' : 'black'},
              ]}
              value={pin}
              onChangeText={handlePinchange}
              placeholderTextColor="grey"
              maxLength={12}
            />
          </View>

          <View style={{paddingTop: 8}}>
            <Text style={{fontSize: 12, color: 'black'}}>
              By clicking you are agreeing{' '}
              <Text style={{color: 'blue'}}>terms</Text> and
              <Text style={{color: 'blue'}}> condition</Text>
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              paddingTop: 6,
            }}>
            <TouchableOpacity activeOpacity={0.6}>
              <Text style={{color: 'blue'}}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.action}>
            <Button
              style={styles.space}
              title="Login"
              onPress={handleSubmit}
              loader={progress}
            />
            {/* <Button
              style={[
                styles.space,
                {backgroundColor: '#feffd6', color: 'black'},
              ]}
              tertiary
              title="Sign up"
              onPress={onSignup}
            /> */}
          </View>
        </View>
      </View>
    </View>
  );
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  action: {
    marginVertical: 15,
  },
  space: {
    marginVertical: 10,
  },
  logotexts: {
    color: 'black',
    fontWeight: '500',
  },
  error: {
    color: 'red',
  },
  login: {
    display: 'flex',
    paddingBottom: 30,
  },
  logintexts: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  inputView: {
    paddingLeft: 25,
  },
  // innercontainer: {
  //   paddingBottom: 200,
  // },
  inputText: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  tinyLogo: {
    width: 20,
    height: 20,
    marginTop: 15,
    opacity: 0.5,
  },

  inputBox: {
    marginTop: 20,
    width: 300,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 0.2,
  },
  appButtonContainer: {
    backgroundColor: '#24DB61',
    marginTop: 30,
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
    alignSelf: 'center',
  },
});
