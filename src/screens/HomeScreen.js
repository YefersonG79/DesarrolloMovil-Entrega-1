import react from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../constants/colors";

const HomeScreen = () => {
    return (
        
        <LinearGradient colors={colors.gradienteAccion} style={styles.container}>
            <Image source={require('../../assets/squirtle_home.gif')} style={styles.Image} />
            <Text style={styles.text}>Pantalla principal</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C71A6',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Image: {
        width: 100,
        height: 110,
    },
    text: {
        color: colors.texto,
        fontSize: 20
    }
})

export default HomeScreen;

