import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationStrings from '../constants/NavigationStrings';
import Expences from '../screens/others/screens/Expences';
import AddExpence from '../screens/others/screens/AddExpence';
const ExpenseStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NavigationStrings.EXPENCES} component={Expences} />
            <Stack.Screen name={NavigationStrings.ADD_EXPENCES} component={AddExpence} />

        </Stack.Navigator>
    )
}

export default ExpenseStack