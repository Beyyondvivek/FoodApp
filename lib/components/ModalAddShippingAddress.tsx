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
import {addShipingAddress} from '../../src/redux/slices/cart';
import Address from '../../src/types/Address';

export type AddressSelectProps = {
  visible: boolean;

  onClose: () => void;
};

const ModalAddShippingAddress: React.FC<AddressSelectProps> = () => {
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
  // const userId = useSelector(selectUserId);
  const dispatch = useDispatch();

  const [errorAreacode, setErrorAreacode] = useState('');
  const [errorPhoneNumber, setErrorPhoneNumber] = useState('');
  const [errorstate, setErrorstate] = useState('');
  const [errorname, setErrorName] = useState('');
  const [errorArea, setErrorArea] = useState('');
  const [erroraddressLine2, setaddressLine2] = useState('');
  const [erroraddressLine1, setaddressLine1] = useState('');

  const handleInputChange = (key: any, value: any) => {
    setAddress({...address, [key]: value});
    setErrorArea('');
    setErrorAreacode('');
    setErrorName('');
    setErrorPhoneNumber('');
    setErrorstate('');
    setaddressLine1('');
    setaddressLine2('');
  };

  const validatePincode = (): boolean => {
    // Regular expression for Indian pincode
    const pincodeRegex = /^[1-9][0-9]{5}$/;
    return pincodeRegex.test(address.areaCode);
  };

  const handleSubmit = async () => {
    if (!address.name.trim()) {
      setErrorName('name must be field');
      return;
    }
    if (!address.phoneNumber.trim()) {
      setErrorPhoneNumber('name must be field');
      return;
    }
    const phoneNumberRegex = /^\d{10}$/; // Validates a 10-digit phone number
    if (!phoneNumberRegex.test(address.phoneNumber)) {
      setErrorPhoneNumber('Invalid phone number');
      return;
    }

    if (!address.addressLine1.trim()) {
      setaddressLine1('address must be field');
      return;
    }

    if (!address.addressLine2.trim()) {
      setaddressLine2('address must be field');
      return;
    }
    if (!address.areaCode.trim()) {
      setErrorAreacode('areaCode Required');
      return;
    }
    if (!validatePincode()) {
      setErrorAreacode('Invalid Pincode/Pincode must be 6 digits');
      return;
    }

    if (!address.area.trim()) {
      setErrorArea('area Required');
      return;
    }

    if (!address.state.trim()) {
      setErrorstate('State Required');
      return;
    }

    dispatch(addShipingAddress(address));
    console.log('add POST ADDresss:: ', address);
    setModalVisible(false);
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView>
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
                  <Text style={styles.selecttext}>Add New Address</Text>
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
                  style={styles.addressinput}
                  placeholder="Name"
                  onChangeText={text => handleInputChange('name', text)}
                />
                {errorname && <Text style={{color: 'red'}}>{errorname}</Text>}
                <TextInput
                  style={styles.addressinput}
                  placeholder="PhoneNumber"
                  keyboardType="phone-pad"
                  onChangeText={text => handleInputChange('phoneNumber', text)}
                />
                {errorPhoneNumber && (
                  <Text style={{color: 'red'}}>{errorPhoneNumber}</Text>
                )}
                <TextInput
                  style={styles.addressinput}
                  placeholder="AddressLine1"
                  onChangeText={text => handleInputChange('addressLine1', text)}
                />
                {erroraddressLine1 && (
                  <Text style={{color: 'red'}}>{erroraddressLine1}</Text>
                )}
                <TextInput
                  style={styles.addressinput}
                  placeholder="AddressLine2"
                  onChangeText={text => handleInputChange('addressLine2', text)}
                />
                {erroraddressLine2 && (
                  <Text style={{color: 'red'}}>{erroraddressLine2}</Text>
                )}
              </View>
              <View style={styles.addresscontainerrow2}>
                <TextInput
                  style={styles.addressinputrow2}
                  placeholder="PinCode"
                  keyboardType="numeric"
                  onChangeText={text => handleInputChange('areaCode', text)}
                />
                {errorAreacode && (
                  <Text style={{color: 'red'}}>{errorAreacode}</Text>
                )}
                <TextInput
                  style={styles.addressinputrow2}
                  placeholder="Area"
                  onChangeText={text => handleInputChange('area', text)}
                />
              </View>
              <View style={styles.addresscontainer2}>
                <TextInput
                  style={styles.addressinput2}
                  placeholder="City"
                  onChangeText={text => handleInputChange('city', text)}
                />
                {errorArea && <Text style={{color: 'red'}}>{errorArea}</Text>}
                <TextInput
                  style={styles.addressinput2}
                  placeholder="State"
                  onChangeText={text => handleInputChange('state', text)}
                />
                {errorstate && <Text style={{color: 'red'}}>{errorstate}</Text>}
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
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // paddingTop: 25,
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
    // borderTopWidth: 0.5,
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
    // borderBottomWidth: 0.5,
    // borderBottomColor: 'gray',
    width: '96%',
    fontSize: 14,
    fontWeight: '500',
    // backgroundColor: '#fafafa',
    borderColor: 'black',
    borderWidth: 0.3,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  addresscontainer2: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: 30,
  },
  addresscontainerrow2: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: 30,
  },
  addressinputrow2: {
    // borderBottomWidth: 0.5,
    // borderBottomColor: 'gray',
    width: '45%',
    fontSize: 14,
    fontWeight: '500',
    borderColor: 'black',
    borderWidth: 0.3,
    backgroundColor: 'white',
    borderRadius: 6,
    color: 'blue',
  },
  addressinput2: {
    // borderBottomWidth: 0.5,
    // borderBottomColor: 'gray',
    width: '45%',
    fontSize: 14,
    fontWeight: '500',
    borderColor: 'black',
    borderWidth: 0.3,
    backgroundColor: 'white',
    borderRadius: 6,
    color: 'blue',
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
    // position: 'absolute',
    // zIndex: 1,
    // right: 20,
    // bottom: 350,
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end',
    backgroundColor: '#f5f5f5',
    borderRadius: 150,
    padding: 8,
    elevation: 0.5,
    alignContent: 'center',
  },
});

export default ModalAddShippingAddress;
