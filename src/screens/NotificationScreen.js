import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const NotificationScreen = () => {
    return (
        <ImageBackground source={require('../../assets/pochita_notifications.jpg')} // Ruta de tu imagen
        style={styles.background}
        resizeMode="cover">
        <View style={styles.container}>
            <Text style={styles.text}>Pantalla de notificaciones</Text>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1, 
        width: '100%', 
        height: '100%',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        alignContent: 'center',
        justifyContent: 'center',
    }
});


export default NotificationScreen;