import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = () => {
    return (
        <LinearGradient colors={["#FFA500", "#FFD700"]} style={styles.container}>
            <Text style={styles.text}>Pantalla principal</Text>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default HomeScreen;
