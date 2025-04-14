/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addUserAddress} from '../../src/redux/slices/user';
import Icon from 'react-native-vector-icons/AntDesign';
import {useColorScheme} from 'react-native';


import {pincodeAvailability} from '../../src/utils/PincodeAvailability';

export type AddressSelectProps = {
  visible: boolean;
  onClose: () => void;
};

const ModalAddAddress: React.FC<AddressSelectProps> = () => {
  const [address, setAddress] = useState({
    name: '',
    phoneNumber: '',
    addressLine1: '',
    addressLine2: '',
    areaCode: '',
    area: '',
    city: '',
    state: '',
  });
  const dispatch = useDispatch();

  const [errorAreacode, setErrorAreacode] = useState('');
  const [errorPhoneNumber, setErrorPhoneNumber] = useState('');
  const [errorstate, setErrorstate] = useState('');
  const [errorname, setErrorName] = useState('');
  const [errorArea, setErrorArea] = useState('');
  const [erroraddressLine2, setErroraddressLine2] = useState('');
  const [erroraddressLine1, setErroraddressLine1] = useState('');
  const [pincodeAvailabilityError, setpincodeAvailabilityError] = useState('');

  const handleInputChange = (key: any, value: any) => {
    setAddress({...address, [key]: value});
    setErrorArea('');
    setErrorAreacode('');
    setErrorName('');
    setErrorPhoneNumber('');
    setErrorstate('');
    setErroraddressLine1('');
    setErroraddressLine2('');

    if (key === 'areaCode') {
      checkPincodeAvailability(value);
    }
    setpincodeAvailabilityError('');
  };

  const validatePincode = (): boolean => {
    const pincodeRegex = /^[1-9][0-9]{5}$/;
    return pincodeRegex.test(address.areaCode);
  };

  const checkPincodeAvailability = (pincode: string) => {
    if (pincodeAvailability[pincode]) {
      setAddress(prevAddress => ({
        ...prevAddress,
        area: pincodeAvailability[pincode].area,
        state: pincodeAvailability[pincode].state,
        city: pincodeAvailability[pincode].city,
      }));
    } else {
      setAddress(prevAddress => ({
        ...prevAddress,
        area: '',
        state: '',
        city: '',
      }));
      setpincodeAvailabilityError('Invalid Pincode');
    }
  };

  const handleSubmit = async () => {
    if (!address.name.trim()) {
      setErrorName('Name is required');
      return;
    }
    if (!address.phoneNumber.trim()) {
      setErrorPhoneNumber('Phone number is required');
      return;
    }
    const phoneNumberRegex = /^\d{10}$/;
    if (!phoneNumberRegex.test(address.phoneNumber)) {
      setErrorPhoneNumber('Invalid phone number');
      return;
    }

    if (!address.addressLine1.trim()) {
      setErroraddressLine1('Address Line 1 is required');
      return;
    }

    if (!address.addressLine2.trim()) {
      setErroraddressLine2('Landmark is required');
      return;
    }
    if (!address.areaCode.trim()) {
      setErrorAreacode('pincode is required');
      return;
    }
    if (!validatePincode()) {
      setErrorAreacode('Invalid Pincode');
      return;
    }

    if (
      !pincodeAvailability[address.areaCode] ||
      pincodeAvailability[address.areaCode].area !== address.area
    ) {
      setpincodeAvailabilityError(' not valid for this pincode');
      return;
    }

    if (!address.area.trim()) {
      setErrorArea('Area is required');
      return;
    }

    if (!address.state.trim()) {
      setErrorstate('State is required');
      return;
    }

    dispatch(addUserAddress(address));
    console.log('Address added: ', address);
    setModalVisible(false);
  };

  const [modalVisible, setModalVisible] = useState(false);
  const colorScheme = useColorScheme();

  return (
    <>
      <View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={{paddingLeft: 20, fontSize: 14, color: 'blue'}}>
            Add New Address
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <ScrollView style={{backgroundColor: 'white'}}>
            <View
              style={{
                height: '100%',
                marginTop: 'auto',
              }}>
              <View style={styles.footer}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 15,
                  }}>
                  <View>
                    <Text style={styles.selecttext}>Add Address</Text>
                  </View>
                  <View>
                    <Pressable
                      style={styles.addButton}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={styles.closebtntext}>
                        <Icon name="close" size={22} color="black" />
                      </Text>
                    </Pressable>
                  </View>
                </View>
                <View style={styles.adresscontainer}>
                  <TextInput
                    style={[
                      styles.addressinput,
                      {color: colorScheme === 'dark' ? 'black' : 'black'},
                    ]}
                    placeholderTextColor="grey"
                    placeholder="Name"
                    onChangeText={text => handleInputChange('name', text)}
                  />
                  {errorname && <Text style={{color: 'red'}}>{errorname}</Text>}
                  <TextInput
                    style={[
                      styles.addressinput,
                      {color: colorScheme === 'dark' ? 'black' : 'black'},
                    ]}
                    placeholderTextColor="grey"
                    placeholder="Phone Number"
                    keyboardType="phone-pad"
                    onChangeText={text =>
                      handleInputChange('phoneNumber', text)
                    }
                    maxLength={10}
                  />
                  {errorPhoneNumber && (
                    <Text style={{color: 'red'}}>{errorPhoneNumber}</Text>
                  )}
                  <TextInput
                    style={[
                      styles.addressinput,
                      {color: colorScheme === 'dark' ? 'black' : 'black'},
                    ]}
                    placeholderTextColor="grey"
                    placeholder="Address Line1"
                    onChangeText={text =>
                      handleInputChange('addressLine1', text)
                    }
                  />
                  {erroraddressLine1 && (
                    <Text style={{color: 'red'}}>{erroraddressLine1}</Text>
                  )}
                  <TextInput
                    style={[
                      styles.addressinput,
                      {color: colorScheme === 'dark' ? 'black' : 'black'},
                    ]}
                    placeholderTextColor="grey"
                    placeholder="Landmark"
                    onChangeText={text =>
                      handleInputChange('addressLine2', text)
                    }
                  />
                  {erroraddressLine2 && (
                    <Text style={{color: 'red'}}>{erroraddressLine2}</Text>
                  )}
                </View>
                <View style={styles.addresscontainerrow2}>
                  <View style={{display: 'flex', flexDirection: 'column'}}>
                    <TextInput
                      style={[
                        styles.addressinputrow2,
                        {color: colorScheme === 'dark' ? 'black' : 'black'},
                      ]}
                      placeholderTextColor="grey"
                      placeholder="Pin Code"
                      keyboardType="numeric"
                      maxLength={6}
                      onChangeText={text => handleInputChange('areaCode', text)}
                    />
                    {errorAreacode && (
                      <Text style={[{color: 'red'}]}>{errorAreacode}</Text>
                    )}
                  </View>
                  <View style={{display: 'flex', flexDirection: 'column'}}>
                    <TextInput
                      style={[
                        styles.addressinputrow2,
                        {color: colorScheme === 'dark' ? 'black' : 'black'},
                      ]}
                      placeholderTextColor="grey"
                      placeholder="Area"
                      value={address.area}
                      onChangeText={text => handleInputChange('area', text)}
                    />
                    {pincodeAvailabilityError && (
                      <Text style={[{color: 'red'}]}>
                        {pincodeAvailabilityError}
                      </Text>
                    )}
                  </View>
                </View>
                <View style={styles.addresscontainer2}>
                  <TextInput
                    style={[
                      styles.addressinput2,
                      {color: colorScheme === 'dark' ? 'black' : 'black'},
                    ]}
                    placeholderTextColor="grey"
                    placeholder="City"
                    onChangeText={text => handleInputChange('city', text)}
                    value={address.city}
                  />
                  {errorArea && <Text style={{color: 'red'}}>{errorArea}</Text>}
                  <TextInput
                    style={[
                      styles.addressinput2,
                      {color: colorScheme === 'dark' ? 'black' : 'black'},
                    ]}
                    showSoftInputOnFocus
                    placeholderTextColor="grey"
                    placeholder="State"
                    onChangeText={text => handleInputChange('state', text)}
                    value={address.state}
                  />
                  {errorstate && (
                    <Text style={{color: 'red'}}>{errorstate}</Text>
                  )}
                </View>
                <View style={{paddingTop: 25}}>
                  <View style={styles.Buttoncontainer}>
                    <TouchableOpacity onPress={handleSubmit}>
                      <Text style={styles.SignUpText}>Save</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  itemText: {
    fontSize: 16,
    color: 'black',
  },
  addresstitle: {
    color: 'black',
    marginTop: 25,
    fontSize: 14,
    fontWeight: '500',
  },
  selecttext: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
    display: 'flex',
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    elevation: 11,
    display: 'flex',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  adresscontainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    paddingLeft: 12,
  },
  closebtntext: {
    display: 'flex',
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
  },
  addressinput: {
    width: '96%',

    fontSize: 14,
    fontWeight: '500',

    borderColor: 'black',
    borderWidth: 0.3,
    backgroundColor: 'white',
    borderRadius: 6,
    paddingLeft: 15,
    textTransform: 'capitalize',
  },
  addresscontainer2: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  addresscontainerrow2: {
    flexDirection: 'row',
    display: 'flex',
    marginTop: 15,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  addressinputrow2: {

    width: 174,
    fontSize: 14,
    fontWeight: '500',

    borderColor: 'black',
    borderWidth: 0.3,
    backgroundColor: 'white',
    borderRadius: 6,
    color: 'blue',
    paddingLeft: 15,
  },
  addressinput2: {
    width: '45%',
    fontSize: 16,
    fontWeight: '600',
    borderColor: 'black',
    borderWidth: 0.3,
    backgroundColor: 'white',
    borderRadius: 6,
    color: 'blue',
    paddingLeft: 15,
  },
  Buttoncontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    display: 'flex',
  },
  SignUpText: {
    color: 'white',
    fontSize: 18,
    backgroundColor: '#E1341E',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 6,
    fontWeight: '500',
  },
  addButton: {
    backgroundColor: '#f5f5f5',
    borderRadius: 150,
    padding: 8,
    elevation: 0.5,
    alignContent: 'center',
  },
});

export default ModalAddAddress;
