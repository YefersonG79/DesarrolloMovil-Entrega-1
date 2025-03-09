import React from "react";
import { Ionicons } from '@expo/vector-icons';


const tabColors = {
    Home: '#1C71A6',  
    User: '#008000',       
    Notifications: '#ff0000' 
};

const getTabBarIcon = (routeName, color, size) => {
    let iconName;

    switch (routeName) {
        case 'Home':
            iconName = 'home-outline';
            break;
        case 'User':
            iconName = 'person-outline';
            break;
        case 'Notifications':
            iconName = 'notifications-outline';
            break;
        default:
            iconName = 'ellipse-outline';
            break;
    }

    return <Ionicons name={iconName} size={size} color={color} />;
};


const ColorsOptions = ({ route }) => ({
    tabBarIcon: ({ color, size }) => getTabBarIcon(route.name, color, size),
    tabBarActiveTintColor: tabColors[route.name] || '#000', 
    tabBarInactiveTintColor: 'gray',
    tabBarLabelStyle: { textAlign: 'center', fontSize: 12 },
    headerTitleAlign: 'center',
});

export default ColorsOptions;