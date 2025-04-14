import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

interface VariantCardProps {
  title: string;
  quantity: number;
  uom: string;
  isSelected: boolean;
  onSelect: () => void;
}

const VariantCard: React.FC<VariantCardProps> = ({
  title,
  uom,
  quantity,
  isSelected,
  onSelect,
}) => {
  return (
    <Pressable onPress={onSelect}>
      <View style={styles.maincontainer}>
        <View
          style={[styles.container, isSelected && styles.selectedContainer]}>
          <Text style={styles.pricecontainer}>{`${quantity}`}</Text>
          <Text style={styles.pricecontainer}>{`${uom}`}</Text>

          <Text style={[styles.title, isSelected && styles.selectedTitle]}>
            {title}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    marginLeft: 25,
    marginTop: 0,
  },
  container: {
    backgroundColor: '#fafafa',
    // padding: 8,
    borderRadius: 8,
    // marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    width: 80,
    elevation: 0,
    height: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  selectedContainer: {
    backgroundColor: '#e8e8e8',
  },
  title: {
    fontSize: 10,
    fontWeight: '400',
    textAlign: 'center',
    color: 'black',
  },
  selectedTitle: {
    color: '#007bff', // Change the color for selected state
  },
  pricecontainer: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '400',
    fontSize: 16,
  },
});

export default VariantCard;
