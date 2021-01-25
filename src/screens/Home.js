import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

const Home = () => {
    return (
        <View>
            {/* Search Input */}

            <ImageBackground source = {require("../../assets/wallpaper.jpg")} style = {styles.image}>
                {/* Title */}
                {/* Button */}
                <Text style = {styles.title}>Stretch Your Imagination</Text>
            </ImageBackground>
            
            
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    image: {
        width: 415,
        height: 500, 
        alignItems: 'center', 
        // justifyContent: "center",

    },
    title: {
        color: "white",
        fontSize: 66,
        fontWeight: "900",
        textAlign: 'center', 
        
    }
})
