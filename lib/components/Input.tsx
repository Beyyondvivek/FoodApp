import React from 'react';
import {StyleSheet, Text, View, TextInput, useColorScheme} from 'react-native';

type InputProps = {
  type?: 'text' | 'phone' | 'email';
  label: string;
  value: string;
  disabled?: boolean;
  placeholder: string;
  onChange: (val: string) => void;
};

function Input({label, value, placeholder, onChange, ...props}: InputProps) {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.label]}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        editable={!props.disabled}
        placeholderTextColor={'grey'}
        onChangeText={val => onChange(val)}
        style={[
          styles.inputBox,
          styles.inputText,
          {color: colorScheme === 'dark' ? 'black' : 'black'},

          props.disabled ? styles.disabled : {},
        ]}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    marginVertical: 10,
  },
  label: {
    color: 'black',
    fontSize: 18,
  },
  disabled: {
    color: 'gray',
  },
  inputBox: {
    marginVertical: 5,
    width: 350,
    height: 50,
    borderWidth: 1,
    borderColor: '#D7D7D7',
    backgroundColor: 'white',
    fontSize: 12,
    borderRadius: 6,
  },
  inputText: {
    fontSize: 18,
    fontWeight: '500',
    padding: 12,
    color: 'black',
  },
});
