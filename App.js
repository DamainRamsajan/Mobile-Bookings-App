import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import HomeScreen from './src/screens/Home';
import Listing from './src/components/Listing';
import feed from './assets/data/feed';
import SearchResults from './src/screens/SearchResults';
import DestinationSearch from './src/screens/DestinationSearch';

const listing1 = feed[0];

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <Listing listing = {listing1}/> */}
      {/* <SearchResults /> */}
      <DestinationSearch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
