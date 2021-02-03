import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import {NavigationContainer, StackActions} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';


import Listing from './src/components/Listing';
import feed from './assets/data/feed';
import HomeScreen from './src/screens/Home';
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests';
import HomeTabNavigator from './src/navigation/HomeTabNavigator';

const listing1 = feed[0];
const Stack = createStackNavigator ();

const globalScreenOptions = {
  headerStyle: {backgroundColor: "#2A4E70"},
  headerTitleStyle: {color: "white"},
  headerTintColor: "white",
}

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions = {globalScreenOptions}>
        <Stack.Screen name = "Home" component = {HomeTabNavigator} options = {{headerShown:false}}/>
        {/* <Stack.Screen name = "Home" component = {HomeScreen} options = {{title: "Stretch Your Imagination"}}/> */}
        <Stack.Screen name = "SearchResults" component = {SearchResultsScreen} />
        <Stack.Screen name = "DestinationSearch" component = {DestinationSearchScreen} options = {{title: "Search Your Destination"}} />
        <Stack.Screen name = "Guests" component = {GuestsScreen} options = {{title: "Who's Comming?"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  
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
