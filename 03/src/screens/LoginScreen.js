import React from 'react';
import { Text, StyleSheet, View, Button, TextInput } from 'react-native'; 


const LoginScreen = (props) => {
    const email = <Text>Email</Text>
    const password = <Text>Password</Text>
    console.log(props)
    const navigation = props.navigation

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{email}</Text>
            <TextInput style={styles.input} />
            <Text style={styles.textStyle}>{password}</Text>
            <TextInput style={styles.input} />
            <Button
                onPress={() => {
                    console.log('button pressed')
                    navigation.navigate('Home')
                }}
                title="Pagina inicial" />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontFamily: 'Georgia',
        fontSize: 15,
        color: 'black'
    },
    input: {
        justifyContent: 'center',
        borderBottomColor: '#808080'
      }
})


export default LoginScreen



