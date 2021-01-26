import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import HomeScreen from './src/screens/Home';
import Listing from './src/components/Listing';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <Listing/>
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
