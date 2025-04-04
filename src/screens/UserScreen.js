import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useAuth } from '../context/AuthContext.js'

const UserScreen = ({ navigation }) => {
    const { user } = useAuth();

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/bulbasaur_user.gif')} style={styles.Image} />
            
            <Text style={styles.userName}>{user?.displayName || "Usuario"}</Text>

            <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
                <Text style={styles.editProfile}>Editar perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("About")}>
                <Text style={styles.aboutText}>Acerca de</Text>
            </TouchableOpacity>
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
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginVertical: 8,
    },
    editProfile: {
        fontSize: 16,
        color: '#fff',
        textDecorationLine: 'underline',
        marginVertical: 4,
    },
    aboutText: {
        fontSize: 16,
        color: '#fff',
        marginTop: 10,
    }
});

export default UserScreen;
