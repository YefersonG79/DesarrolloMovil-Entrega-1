import react from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";


const HomeScreen = () => {
    return (
        
        <View style={styles.container}>
            <Image source={require('../../assets/squirtle_home.gif')} style={styles.Image} />
            <Text style={styles.text}>Pantalla principal</Text>
        </View>
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
        color: '#ffff',
        fontSize: 20
    }
})

export default HomeScreen;

