import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from "../screens/SplashScreen";
import HomeScreen from "../screens/HomeScreen";
import UserScreen from "../screens/UserScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ColorsOptions from "../components/IconsNavigator";

const Tab= createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={ColorsOptions}>
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerTitleAlign: 'center' }}/>
            <Tab.Screen name="User" component={UserScreen} options={{ headerTitleAlign: 'center' }}/>
            <Tab.Screen name="Notifications" component={NotificationScreen} options={{ headerTitleAlign: 'center' }}/>
        </Tab.Navigator>
    )
}


const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
            <Stack.Screen name="MainTabs" component={TabNavigator} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default AppNavigator;