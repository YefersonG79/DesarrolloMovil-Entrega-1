import React, { useState } from "react";
import { Image } from "expo-image";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig.js";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const navigation = useNavigation();

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log(`Usuario ha iniciado sesión`);
                setError("");
                navigation.navigate('MainTabs', { screen: 'Home' });
            })
            .catch((error) => {
                setError("Correo o contraseña incorrectos. Inténtalo de nuevo.");
            });
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/Logo_Splash.gif')} style={styles.logo} />
            <Text style={styles.title}>Inicio de sesión</Text>
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>
            <View style={styles.registerContainer}>
                <Text>¿No tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.registerText}> Regístrate</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
    },
    logo: {
        width: 120,
        height: 90,
        marginBottom: 20,
        resizeMode: "contain",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        width: "80%",
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        marginBottom: 15,
        backgroundColor: "#fff",
    },
    button: {
        width: "80%",
        height: 50,
        backgroundColor: "#ffcc00",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 15,
    },
    buttonText: {
        color: "#000",
        fontWeight: "bold",
    },
    error: {
        color: "red",
        marginBottom: 10,
    },
    registerContainer: {
        flexDirection: "row",
        marginTop: 20,
    },
    registerText: {
        color: "#007bff",
        fontWeight: "bold",
    },
});

export default LoginScreen;
