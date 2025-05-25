import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationStrings from '../constants/NavigationStrings';
import RegisterScreen from '../screens/auth/RegisterScreen';
import LoginScreen from '../screens/auth/LoginScreen';
const AuthStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NavigationStrings.REGISTER} component={RegisterScreen} />
            <Stack.Screen name={NavigationStrings.LOGIN} component={LoginScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack