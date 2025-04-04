import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Image } from "expo-image";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Importamos los iconos
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../services/firebaseConfig.js";

const RegisterScreen = () => {
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = () => {
        if (!name || !email || !password) {
            setError("Todos los campos son obligatorios");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, { displayName: name })
                    .then(() => {
                        Alert.alert("¡Éxito!", "Cuenta creada correctamente", [
                            { text: "OK", onPress: () => navigation.reset({ index: 0, routes: [{ name: 'Login' }] }) }
                        ]);
                    })
                    .catch((error) => setError(error.message));
            })
            .catch((error) => setError(error.message));
    };

    return (
        <View style={styles.container}>
            <Image source={require("../../../assets/Logo_Splash.gif")} style={styles.logo} />
            <Text style={styles.title}>Crear Cuenta</Text>

            <View style={styles.inputContainer}>
                <Icon name="account" size={24} color="#555" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    value={name}
                    onChangeText={setName}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="email" size={24} color="#555" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Correo electrónico"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="lock" size={24} color="#555" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>

            {error ? <Text style={styles.error}>{error}</Text> : null}

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.loginText}>¿Ya tienes cuenta? Inicia sesión</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F3F4F6",
        paddingHorizontal: 20
    },
    logo: {
        width: 120,
        height: 90,
        marginBottom: 20
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#FF6B00",
        marginBottom: 20
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#FFF",
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#CCC",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3 // Para Android
    },
    icon: {
        marginRight: 10
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 16
    },
    button: {
        width: "100%",
        height: 50,
        backgroundColor: "#FF6B00",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold"
    },
    loginText: {
        marginTop: 15,
        color: "#FF6B00",
        fontSize: 14,
        textDecorationLine: "underline"
    },
    error: {
        color: "#D32F2F",
        marginBottom: 10
    }
});

export default RegisterScreen;
