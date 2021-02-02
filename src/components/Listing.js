import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const Listing = (props) => {

    const listing = props.listing;

    return (
        <View style = {styles.container}>
            <Image source = {{uri: listing.image}} style = {styles.image}/>
            
            <Text style = {styles.bedrooms}>{listing.bed} Bed {listing.bedroom} Bedroom</Text>
            <Text style = {styles.description} numberOfLines = {2}>{listing.type}, {listing.title} {listing.description}</Text>
            <Text style = {styles.prices}>
                <Text style = {styles.oldPrice}>${listing.oldPrice} </Text>
                <Text style = {styles.newPrice}> ${listing.newPrice} / night</Text>
            </Text>
            <Text style = {styles.totalPrice}>${listing.totalPrice} total</Text>
        </View>
    )
}

export default Listing

const styles = StyleSheet.create({
    container: {
        margin: 40,

        flex: 1,
    },
    image: {        
        top: 0,
        // width: "100%",
        width: Dimensions.get("screen").width -30,
        height: Dimensions.get("screen").height /3,
        // height: 300,
        // aspectRatio: 3 / 2,
        borderRadius: 15,
        resizeMode: 'cover',
    },
    bedrooms: {
        marginVertical: 10,
        fontSize: 16,
        color: "#565656",
    },
    description: {
        fontSize: 18,
        lineHeight: 26,

    },
    prices: {
        fontSize: 18,
        marginVertical: 10
    },
    oldPrice: {
        color: "#565656",
        textDecorationLine: "line-through",
        marginRight: 5,
    },
    newPrice: {
        fontWeight: 'bold',
    },
    totalPrice: {
        color: "#565656",
        textDecorationLine: "underline"
    },

})
