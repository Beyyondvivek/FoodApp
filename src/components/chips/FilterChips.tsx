import React, {useState} from 'react';
import {Text, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';

const FilterChips = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const filters = ['Vegan', 'Vegetarian', 'Not Vegetarian'];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.chipsContainer}>
      {filters.map(filter => (
        <TouchableOpacity
          key={filter}
          style={[styles.chip, selectedFilter === filter && styles.activeChip]}
          onPress={() =>
            setSelectedFilter(selectedFilter === filter ? null : filter)
          }>
          <Text
            style={[
              styles.chipText,
              selectedFilter === filter && styles.activeChipText,
            ]}>
            {filter}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  chipsContainer: {
    marginBottom: 16,
    paddingVertical: 8,
    position: 'absolute',
    zIndex: 100,
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

export default FilterChips;
