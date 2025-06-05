import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import NavigationStrings from '../constants/NavigationStrings';
import { Room, RoomDetails, RoomDetailsPage } from '../screens/room-management/components';
import EditRoomDetails from '../screens/room-management/components/EditRoomDetails';
import AddNewRoom from '../screens/room-management/components/AddNewRoom';
const RoomDetailsStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NavigationStrings.ROOM_DETAILS} component={RoomDetails} />
            <Stack.Screen name={NavigationStrings.ROOM_DETAIL_PAGE} component={RoomDetailsPage} />
            <Stack.Screen name={NavigationStrings.ROOM_DETAILS_EDIT} component={EditRoomDetails} />
            <Stack.Screen name={NavigationStrings.ADD_NEW_ROOM} component={AddNewRoom} />

        </Stack.Navigator>
    )
}

export default RoomDetailsStack