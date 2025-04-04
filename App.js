import React from 'react'; 
import AppNavigator from './src/navigation/AppNavigator.js';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext.js';

export default function App() {
  return (
    <AuthProvider>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    </AuthProvider>
  );
}

