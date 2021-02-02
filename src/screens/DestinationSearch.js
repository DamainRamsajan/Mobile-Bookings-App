import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import searchResults from '../../assets/data/search';
import { Entypo } from '@expo/vector-icons';

const DestinationSearch = () => {

    const [inputText, setInputText] = useState("");
    
    return (
        <View style = {styles.container}>
            <TextInput 
                autoFocus
                style = {styles.textInput}
                placeholder = "Where are you going?"
                value = {inputText}     
                onChangeText = {setInputText}  
            />
            
            <FlatList 
                data = {searchResults}
                renderItem = {({item}) => (
                <View style = {styles.row}>
                    <View style = {styles.iconContainer}>
                        <Entypo name="location-pin" size={30} color="black" />
                    </View>

                    <Text style = {styles.locationText} >{item.description}</Text>
                </View> 
                )}
            />

        </View>
    )
}

export default DestinationSearch

const styles = StyleSheet.create({
    container: {
        width: "100%",
        top: 90,
        alignSelf: "flex-start"
    },
    textInput: {
        fontSize: 20,
        marginBottom: 15,
        marginLeft: 10,
    },
    iconContainer: {
        backgroundColor: "lightgrey",
        padding: 7,
        borderRadius: 14,
        marginRight: 15,
        marginLeft: 15,        
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey"
    },
    locationText: {

    }
})
