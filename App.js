import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import HomeScreen from './src/screens/Home';
import Listing from './src/components/Listing';
import feed from './assets/data/feed';

const listing1 = feed[0];
const listing2 = feed[1];

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <Listing listing = {listing1}/>
      {/* <Listing listing = {listing2}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
