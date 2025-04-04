import react from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";


const EditProfileScreen = (navigator) => {

    return (
        <View style={styles.container}>
            <View>
                <Text>Foto de perfil</Text>
            </View>
            <View>
                <Text>Nombre de usuario:</Text>
                <TextInput 

                />
            </View>
        </View>
    )    
}

const styles = {
    container: {

    }
}



export default EditProfileScreen;