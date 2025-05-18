import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Define filter options type
type FilterOption =
  | 'Relevance'
  | 'Top Rated'
  | 'Vegan'
  | 'Vegetarian'
  | 'Not Vegetarian';

const CustomHeader = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<FilterOption>('Relevance');
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const handleFilterToggle = () => {
    setShowFilterOptions(!showFilterOptions);
  };

  const handleFilterSelect = (option: FilterOption) => {
    setFilter(option);
    setShowFilterOptions(false);
  };

  return (
    <View style={styles.headerContainer}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={styles.headerContent}>
        <View style={styles.leftSection}>
          <MaterialIcons name="arrow-back" size={24} color="#2D3748" />
        </View>
        <View style={styles.searchContainer}>
          <MaterialIcons
            name="search"
            size={20}
            color="#718096"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search recipes..."
            placeholderTextColor="#718096"
          />
        </View>
        <View style={styles.rightSection}>
          <TouchableOpacity
            onPress={handleFilterToggle}
            style={styles.filterButton}>
            <Text style={styles.filterText}>{filter}</Text>
            <MaterialIcons name="arrow-drop-down" size={20} color="#2D3748" />
          </TouchableOpacity>
          {showFilterOptions && (
            <View style={styles.filterOptions}>
              {[
                'Relevance',
                'Top Rated',
                'Vegan',
                'Vegetarian',
                'Not Vegetarian',
              ].map(option => (
                <TouchableOpacity
                  key={option}
                  style={styles.filterOption}
                  onPress={() => handleFilterSelect(option as FilterOption)}>
                  <View style={styles.filterOptionContent}>
                    <Text
                      style={[
                        styles.filterOptionText,
                        filter === option && styles.activeFilterText,
                      ]}>
                      {option}
                    </Text>
                    {filter === option && (
                      <MaterialIcons
                        name="check"
                        size={16}
                        color="#A064FF"
                        style={styles.checkIcon}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#FFFFFF',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    position: 'absolute',
    zIndex: 150,
    width: '100%',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: StatusBar.currentHeight || 0, // Adjust for status bar height
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  leftSection: {
    marginRight: 12,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7FAFC',
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#2D3748',
    fontFamily: 'System',
  },
  rightSection: {
    position: 'relative',
    marginLeft: 12,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#F7FAFC',
    borderRadius: 12,
  },
  filterText: {
    fontSize: 16,
    color: '#2D3748',
    fontFamily: 'System',
    marginRight: 4,
  },
  filterOptions: {
    position: 'absolute',
    top: 40,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 10, // Increased elevation to ensure it stays above other components
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    padding: 8,
    width: 150,
    zIndex: 15, // High zIndex to prevent overlap
  },
  filterOption: {
    paddingVertical: 6,
  },
  filterOptionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkIcon: {
    marginLeft: 8,
  },
  activeFilterText: {
    color: '#8A4AF3', // Slightly lighter purple for active filter
  },
  filterOptionText: {
    fontSize: 14,
    color: '#2D3748',
    fontFamily: 'System',
  },
});

export default CustomHeader;
