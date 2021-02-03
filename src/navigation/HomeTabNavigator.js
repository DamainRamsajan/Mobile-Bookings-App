import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../screens/Home';
import { Fontisto } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions = {{
            activeTintColor: '#f15454',
            inactiveTintColor: "white",
            activeBackgroundColor: "#2A4E70",
            inactiveBackgroundColor: "#74A1B8"
        }}>
            <Tab.Screen 
                name = {"Explore"}
                component = {HomeScreen}
                options={{
                    tabBarIcon: ({color}) => (
                      <Fontisto name="search" size={25} color={color} />
                    ),
                  }}
            />

            <Tab.Screen 
                name = {"Saved"}
                component = {HomeScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="heart-o" size={25} color={color} />
                    ),
                  }}
            />

            <Tab.Screen 
                name = {"Airbnb"}
                component = {HomeScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome5 name="airbnb" size={25} color={color} />
                    ),
                  }}
            />

            <Tab.Screen 
                name = {"Messages"}
                component = {HomeScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <Feather name="message-square" size={25} color={color} />
                    ),
                  }}
            />
        </Tab.Navigator>
        
    )
}

export default HomeTabNavigator

const styles = StyleSheet.create({})
