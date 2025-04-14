import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import Loader from './Loader';

type ButtonProps = {
  onPress: () => void;
  title: string;
  sm?: boolean;
  tertiary?: boolean;
  loader?: boolean;
  style?: any;
  disabled?: boolean;
};

function Button({title, onPress, disabled, ...props}: ButtonProps) {
  let size = {};
  if (props.sm) {
    size = styles.sm;
  }
  const bgColor = props.tertiary ? {} : styles.primary;
  const color = props.tertiary ? styles.tertiaryTitle : styles.title;
  return (
    <Pressable
      style={[
        styles.button,
        size,
        bgColor,
        props.style ?? {},
        disabled ? styles.disabled : null,
      ]}
      onPress={onPress}
      disabled={disabled}>
      {props.loader ? (
        <Loader color="white" />
      ) : (
        <Text style={[color]}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 0,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderRadius: 8,
    height: 45,
    padding: 10,
  },
  sm: {
    width: 150,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  tertiaryTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  primary: {
    // backgroundColor: '#DD4A48',
    backgroundColor: '#4361EE',
    // backgroundColor: '#1877F2',
  },
  disabled: {
    backgroundColor: 'gray', // Example of disabled style (gray background)
    opacity: 0.7, // Reduced opacity for disabled state
  },
  disabled: {
    backgroundColor: 'gray', // Example of disabled style (gray background)
    opacity: 0.7, // Reduced opacity for disabled state
  },
});

export default Button;
