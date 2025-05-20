import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavbar from '../components/BottomNavbar';
import NavigationStrings from '../constants/NavigationStrings';
import ChatStack from './ChatStack';
import { ChatScreen } from '../screens/chat';
import RoomDetailsStack from './RoomDetailsStack';
import { Booking, Dashboard, Others, RoomManagement } from '../screens';
import ExpenseStack from './ExpancesStack';
const MainStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTabs" component={BottomNavbar} />
            <Stack.Screen name={NavigationStrings.BOOKING} component={Booking} />
            <Stack.Screen name={NavigationStrings.CHAT} component={ChatScreen} />
            <Stack.Screen name={NavigationStrings.DASHBOARD} component={Dashboard} />
            <Stack.Screen name={NavigationStrings.OTHERS} component={Others} />
            <Stack.Screen name={NavigationStrings.ROOM} component={RoomManagement} />
            <Stack.Screen name={NavigationStrings.CHAT_STACK} component={ChatStack} />
            <Stack.Screen name={NavigationStrings.ROOM_DETAILS_STACK} component={RoomDetailsStack} />
            <Stack.Screen name={NavigationStrings.EXPENCE_STACK} component={ExpenseStack} />


        </Stack.Navigator>
    )
}

export default MainStack