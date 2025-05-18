import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

const CategoryChips = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = [
    'Fruits',
    'Snacks',
    'Drinks',
    'Desserts',
    'Indian',
    'Hostel Vibes',
  ];

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.chipsContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.chip,
              selectedCategory === category && styles.activeChip,
            ]}
            onPress={() =>
              setSelectedCategory(
                selectedCategory === category ? null : category,
              )
            }>
            <Text
              style={[
                styles.chipText,
                selectedCategory === category && styles.activeChipText,
              ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  chipsContainer: {
    marginBottom: 0,
    paddingVertical: 16,
    width: '100%',
    position: 'absolute',
    zIndex: 150,
    top: 100,
    left: 12,
    flex: 1,
    backgroundColor:'white'
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    backgroundColor: '#F7FAFC',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  activeChip: {
    backgroundColor: '#A064FF',
    borderColor: '#A064FF',
  },
  chipText: {
    fontSize: 14,
    color: '#2D3748',
    fontFamily: 'System',
  },
  activeChipText: {
    color: '#FFFFFF',
  },
});

export default CategoryChips;
