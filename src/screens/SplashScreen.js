import React, { useEffect } from "react";
import { Text, StyleSheet, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

const SplashScreen = () => {
    const navigation = useNavigation();
    const fadeAnim = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        }).start();

        const timer = setTimeout(() => {
            navigation.replace('Login');
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <LinearGradient 
            colors={["#FF0000", "#FFFFFF"]} // Degradado Rojo-Blanco tipo Pokébola
            style={styles.container}
        >
            <Animated.View style={{ opacity: fadeAnim }}>
                <Image source={require('../../assets/Logo_Splash.gif')} style={styles.image} />
            </Animated.View>
            <Text style={styles.txt}>Loading...</Text>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 150,
        height: 100,
    },
    txt: {
        color: "#000000", // Negro para buen contraste
        fontSize: 20,
        fontFamily: "PressStart2P-Regular",
        marginTop: 10,
    },
});

export default SplashScreen;


