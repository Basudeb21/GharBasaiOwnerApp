import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationStrings from '../constants/NavigationStrings';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import { AuthContext } from '../screens/auth/AuthProvider';

const Routes = () => {
    const Stack = createNativeStackNavigator();
    const { userSession, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return null;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {userSession ? (
                    <Stack.Screen name={NavigationStrings.MAIN_STACK} component={MainStack} />
                ) : (
                    <Stack.Screen name={NavigationStrings.AUTH_STACK} component={AuthStack} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
