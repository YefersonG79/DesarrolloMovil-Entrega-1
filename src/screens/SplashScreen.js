import react, {useEffect} from "react";
import { View, Text,StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";


const SplashScreen = () => {
    const navigation = useNavigation();

    // Tiempo de carga de la pantalla de inicio
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('MainTabs')},3000)
            return () => clearTimeout(timer);
    },[navigation])

    // Se muestra la pantalla Splash
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/Logo_Splash.gif')} style={styles.Image} />
            <Text style={styles.txt}>Loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4f4f4f',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Image: {
        width: 150,
        height: 100,
    },
    txt: {
        color: '#fff',
        fontSize: 20
    }
})

export default SplashScreen;

