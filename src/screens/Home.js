import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Pressable, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Home = ({navigation}) => {
    const height = Dimensions.get('window').height;
    return (
        <View style = {styles.container}>

            <Pressable 
                    style ={styles.searchButton}
                    onPress = {() => console.warn("search button clicked")}                
                >   
                    <FontAwesome5 name="search" size={24} color="black" />
                    <Text style = {styles.searchButtonText}>Where are you going?</Text>
            </Pressable>
            <ImageBackground source = {require("../../assets/wallpaper.jpg")} style={[styles.image]}>

                {/* Title */}
                <Text style = {styles.title}>Break Away</Text>
                <Pressable 
                    style ={styles.button}
                    onPress = {() => navigation.navigate("SearchResults")}                
                >
                    <Text style = {styles.buttonText}>Explore Vacations</Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        top: -5,
        // flex: 1,
        width: "100%",
        height: Dimensions.get("screen").height, 
        alignItems: 'center', 
        justifyContent: "center",
        resizeMode: 'cover',
        
    },
    title: {
        color: "white",
        fontSize: 96,
        fontWeight: "900",
        marginLeft: 10,
        // textAlign: 'center',         
    },
    button: {
        backgroundColor: "white",
        width: 240,
        height: 47,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginLeft: -140,
        marginBottom: 250,
    },
    searchButton: {
        backgroundColor: "white",
        width: Dimensions.get("screen").width -20,
        alignSelf: "center",
        height: 62,
        borderRadius: 35,
        alignItems: "center",
        justifyContent: "center",
        // marginTop: 20,
        display: "flex",
        flexDirection: "row",
        top: 80,
        zIndex: 100,
        // marginBottom: 110,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "700",
        color: "#12232E",
    },
    searchButtonText: {
        fontSize: 25,
        fontWeight: "700",
        color: "#12232E",
        marginLeft: 10,
    }
})
