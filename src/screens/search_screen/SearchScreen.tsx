/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Mock search results for demonstration
const mockResults = [
  {id: '1', title: 'Fruit Bowl'},
  {id: '2', title: 'Fruit Salad'},
  {id: '3', title: 'Fruit Smoothie'},
  {id: '4', title: 'Fruit Tart'},
];

export default function SearchScreen({route, navigation}) {
  const [searchQuery, setSearchQuery] = useState(route.params?.query || '');
  const [results, setResults] = useState([]);

  // Simulate search functionality
  useEffect(() => {
    if (searchQuery) {
      // Filter mock results based on query
      const filtered = mockResults.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  const handleVoicePress = () => {
    // Simulate voice input
    console.log('Mic pressed - Voice search in SearchScreen');
    setSearchQuery('Voice search result');
  };

  return (
    <>
      <SafeAreaView style={{height: '100%'}}>
        {/* <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        /> */}
        <View style={styles.container}>
          <View style={{backgroundColor: 'white'}}>
            <View style={styles.searchBar}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  name="arrow-back"
                  size={24}
                  color="#888"
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TextInput
                style={styles.input}
                placeholder="Search for 'Fruit Bowl'"
                placeholderTextColor="#888"
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoFocus={true}
              />
              <TouchableOpacity onPress={handleVoicePress}>
                <Icon name="mic" size={24} color="#888" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={results}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.resultItem}>
                <Text style={styles.resultText}>{item.title}</Text>
              </View>
            )}
            ListEmptyComponent={() => (
              <Text style={styles.noResults}>
                {searchQuery ? 'No results found' : 'Start typing to search'}
              </Text>
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 50,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
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
  resultItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  resultText: {
    fontSize: 16,
  },
  noResults: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  },
});
