import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, View } from 'react-native';
import NavigationStrings from '../constants/NavigationStrings';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import { navigationRef } from './RootNavigation';  // <--- import here

const Stack = createNativeStackNavigator();

const Routes = () => {
    const { user, isLoading } = useSelector(state => state.auth);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <NavigationContainer ref={navigationRef}> {/* <--- pass ref here */}
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {user ? (
                    <Stack.Screen name={NavigationStrings.MAIN_STACK} component={MainStack} />
                ) : (
                    <Stack.Screen name={NavigationStrings.AUTH_STACK} component={AuthStack} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
