import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBarWithMic = () => {
  const [searchText, setSearchText] = useState('');

  const handleVoicePress = () => {
    // TODO: Integrate voice recognition here (e.g., using react-native-voice)
    console.log('Mic pressed');
  };

  return (
    <View style={styles.container}>
      <Icon name="search" size={24} color="#888" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search for 'Fruit Bowl'"
        placeholderTextColor="#888"
        value={searchText}
        onChangeText={setSearchText}
      />
      <TouchableOpacity onPress={handleVoicePress}>
        <Icon name="mic" size={24} color="#888" style={styles.icon} />
      </TouchableOpacity>
    </View>
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
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingHorizontal: 8,
    paddingVertical: Platform.OS === 'android' ? 0 : 10,
  },
  icon: {
    marginHorizontal: 4,
  },
});

export default SearchBarWithMic;
