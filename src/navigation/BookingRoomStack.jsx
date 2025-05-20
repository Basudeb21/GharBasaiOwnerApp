import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import NavigationStrings from '../constants/NavigationStrings';
import { Booking } from '../screens';
import BookingRoomDetails from '../screens/booking-management/component/BookingRoomDetails';
import { RoomDetailsPage } from '../screens/room-management/components';
const BookingRoomStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NavigationStrings.BOOKING} component={Booking} />
            <Stack.Screen name={NavigationStrings.BOOKING_DETAILS} component={BookingRoomDetails} />
            <Stack.Screen name={NavigationStrings.ROOM_DETAIL_PAGE} component={RoomDetailsPage} />

        </Stack.Navigator>
    )
}

export default BookingRoomStack