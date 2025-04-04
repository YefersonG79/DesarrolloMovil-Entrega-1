import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from "../screens/SplashScreen";
import HomeScreen from "../screens/HomeScreen";
import UserScreen from "../screens/UserScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ColorsOptions from "../components/IconsNavigator";

const Tab= createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={ColorsOptions}>
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false}}/>
            <Tab.Screen name="User" component={UserScreen} options={{ headerShown: false}}/>
            <Tab.Screen name="Notifications" component={NotificationScreen} options={{ headerShown: false}}/>
        </Tab.Navigator>
    )
}


const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
            <Stack.Screen name="MainTabs" component={TabNavigator} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default AppNavigator;