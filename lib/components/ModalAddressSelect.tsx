// AddressSelect.js
import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {addressToString} from '../../src/utils/Address';
import ModalAddAddress from './ModalAddAddress';
import {pincodeAvailability} from '../../src/utils/PincodeAvailability'; // Import the pincode availability
import Address from '../../src/types/Address';
import Icon from 'react-native-vector-icons/AntDesign';

interface AddressSelectProps {
  visible: boolean;
  data: any;
  onClose: () => void;
  onSelectAddress: (address: Address, isDeliverable: boolean) => void; // Updated prop
}
const MAX_LENGTH = 3;

const AddressSelect: React.FC<AddressSelectProps> = ({
  visible,
  data,
  onSelectAddress,
}) => {
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [maxLength, setMaxLength] = useState(MAX_LENGTH);
  const [showMore, setShowMore] = useState(true);

  const useraddress = data || [];
  const handleSelectAddress = (address: Address) => {
    setSelectedAddress(address.addressId);
    const isDeliverable = !!pincodeAvailability[address.areaCode]; // Check pincode availability
    onSelectAddress(address, isDeliverable); // Pass the deliverability status
    setModalVisible(false);
  };

  const [modalVisible, setModalVisible] = useState(visible);

  const toggleShowAll = () => {
    setShowMore(showMoreFlag => !showMoreFlag);
    showMore ? setMaxLength(data.length) : setMaxLength(MAX_LENGTH);
  };

  return (
    <View>
      <View style={styles.logincontainer}>
        <Pressable
          style={styles.btncontainer}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.btntext}>Add</Text>
        </Pressable>
      </View>

      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <SafeAreaView style={styles.modalcontainer}>
            <View style={styles.footer}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 30,
                  paddingVertical: 20,
                }}>
                <View>
                  <Text style={styles.selecttext}>Select Address</Text>
                </View>
                <View>
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.closebtntext}>
                      <Icon name="close" size={22} color="black" />
                    </Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.contentcontainer}>
                <View style={styles.content}>
                  <View
                    style={
                      {
                        // flexDirection: 'row',
                        // alignItems: 'center',
                        // justifyContent: 'center',
                      }
                    }>
                    <ScrollView contentContainerStyle={styles.scrollContent}>
                      {useraddress.slice(0, maxLength).map(add => (
                        <Pressable onPress={() => handleSelectAddress(add)}>
                          <View
                            key={add.addressId}
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              marginBottom: 15,
                              gap: 4,
                            }}>
                            <RadioButton
                              value={add.addressId}
                              status={
                                selectedAddress === add.addressId
                                  ? 'checked'
                                  : 'unchecked'
                              }
                              onPress={() => handleSelectAddress(add)}
                            />
                            <View>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                }}>
                                <Text
                                  style={{
                                    fontWeight: '500',
                                    color: 'black',
                                    fontSize: 18,
                                    textTransform: 'capitalize',
                                  }}>
                                  {add.name}
                                </Text>
                                <Text
                                  style={{
                                    fontWeight: '400',
                                    color: 'black',
                                    fontSize: 16,
                                    marginLeft: 10,
                                  }}>
                                  {add.areaCode}
                                </Text>
                              </View>
                              <View
                                style={{width: '98%', paddingHorizontal: -15}}>
                                <Text
                                  style={{
                                    color: 'grey',
                                    fontSize: 14,
                                    fontWeight: '500',
                                    // width: '90%',
                                    textTransform: 'capitalize',
                                  }}
                                  numberOfLines={1}>
                                  {addressToString(add)}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </Pressable>
                      ))}
                      {useraddress.length > MAX_LENGTH && (
                        <View key={'view-all'}>
                          <TouchableOpacity
                            onPress={toggleShowAll}
                            style={{alignSelf: 'center', marginTop: 10}}>
                            <Text style={{color: 'blue'}}>
                              {showMore ? 'View more' : 'View less'}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      )}
                    </ScrollView>
                  </View>
                </View>
                <View>
                  <ModalAddAddress
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                  />
                </View>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // gap: 10,
    // padding: 20,
  },
  contentcontainer: {
    padding: 0,
  },
  modalcontainer: {
    flex: 1,
    justifyContent: 'flex-end',
    height: '80%',
    marginTop: 'auto',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  logincontainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btncontainer: {
    display: 'flex',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 8,
    borderColor: 'green',
    borderWidth: 1,
  },
  btntext: {
    display: 'flex',
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
  },
  closebtntext: {
    display: 'flex',
    color: 'black',
  },

  footer: {
    flex: 1,
    backgroundColor: 'white',
    elevation: 11,
    display: 'flex',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  selecttext: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
    display: 'flex',
  },
});

export default AddressSelect;
