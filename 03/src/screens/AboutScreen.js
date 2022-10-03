import React from 'react'
// IMPORT FlatList
import { Text, View, StyleSheet, FlatList, ViewPagerAndroidBase } from 'react-native'

const AboutScreen = () => {

    return (
        <View>
            <Text style={styles.textStyle}>About</Text>
            <Text style={styles.text}>Developed by: Samara da Conceição</Text>
            <Text style={styles.textStyle}>Version</Text>
            <Text style={styles.text}>FirstApp version 1.0</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontFamily:'Georgia',
        fontSize: 18,
        color: 'black'
    },
    text: {
        fontFamily:'Arial',
        fontSize: 16,
        color: 'black'
    }
})

export default AboutScreen