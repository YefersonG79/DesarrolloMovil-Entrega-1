import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NotificationScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Notificaciones</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFCC00', // Amarillo intenso
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000', // Texto en negro para buen contraste
    }
});

export default NotificationScreen;
