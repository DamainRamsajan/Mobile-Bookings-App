import React, { useState } from 'react'
import { Pressable } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

const Guests = () => {

    const [adults, setAdults] = useState(0);
    const [kids, setKids] = useState(0);
    const [infants, setInfants] = useState(0);

    return (
        <View style = {styles.container}>
            <View style = {styles.row}>
                <View>
                    <Text style = {{fontWeight: 'bold'}}>Adults</Text>
                    <Text style = {{color: 'lightgrey'}}>Ages 13 or above</Text>
                </View>

                <View style = {styles.buttonsContainer}>
                    <Pressable 
                    style = {styles.button}
                    onPress = {() => setAdults(Math.max(0, adults - 1))}>
                        <Text style = {{fontSize: 20}}>-</Text>
                    </Pressable>

                    <Text style = {{fontSize: 18}}>{adults}</Text>

                    <Pressable 
                    style = {styles.button} 
                    onPress = {() => setAdults(adults + 1)} >
                        <Text style = {{fontSize: 20}}>+</Text>
                    </Pressable>
                </View>
            </View>

            <View style = {styles.row}>
                <View>
                    <Text style = {{fontWeight: 'bold'}}>Children</Text>
                    <Text style = {{color: 'lightgrey'}}>Ages 2 to 12</Text>
                </View>

                <View style = {styles.buttonsContainer}>
                    <Pressable 
                    style = {styles.button}
                    onPress = {() => setKids(Math.max(0, kids - 1))}>
                        <Text style = {{fontSize: 20}}>-</Text>
                    </Pressable>

                    <Text style = {{fontSize: 18}}>{kids}</Text>

                    <Pressable 
                    style = {styles.button} 
                    onPress = {() => setKids(kids + 1)} >
                        <Text style = {{fontSize: 20}}>+</Text>
                    </Pressable>
                </View>
                
            </View>

            <View style = {styles.row}>
                <View>
                    <Text style = {{fontWeight: 'bold'}}>Infants</Text>
                    <Text style = {{color: 'lightgrey'}}>Under 2</Text>
                </View>

                <View style = {styles.buttonsContainer}>
                    <Pressable 
                    style = {styles.button}
                    onPress = {() => setInfants(Math.max(0, infants - 1))}>
                        <Text style = {{fontSize: 20}}>-</Text>
                    </Pressable>

                    <Text style = {{fontSize: 18}}>{infants}</Text>

                    <Pressable 
                    style = {styles.button} 
                    onPress = {() => setInfants(infants + 1)} >
                        <Text style = {{fontSize: 20}}>+</Text>
                    </Pressable>
                </View>
            </View>
            <View style = {{height:200}}></View>
        </View>
    )
}

export default Guests

const styles = StyleSheet.create({
    container: {
        top: 80,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        marginHorizontal: 18,
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey",     
    },
    buttonsContainer: {
        flexDirection: "row",
        alignItems: "center"
        
    },
    button: {
        borderWidth: 1,
        borderColor: "lightgrey",
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
        zIndex: 999,
    }
})
