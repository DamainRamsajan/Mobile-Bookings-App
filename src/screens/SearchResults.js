import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import feed from '../../assets/data/feed'
import Listing from '../components/Listing'

const SearchResults = (props) => {
    return (
        <View>
            <FlatList 
                data ={feed}
                renderItem={({item}) => <Listing listing={item} />}
            />
            
        </View>
    )
}

export default SearchResults

const styles = StyleSheet.create({})
