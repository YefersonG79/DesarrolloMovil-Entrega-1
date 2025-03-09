import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

const UserScreen = () => {
    return (
    <View style={styles.container}>
        <Image source={require('../../assets/bulbasaur_user.gif')} style={styles.Image} />
        <Text style={styles.text}>Pantalla de usuario</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#008000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Image: {
        width: 110,
        height: 100,
    },
    text: {
        color: '#fff',
        fontSize: 20
    }
})

export default UserScreen;