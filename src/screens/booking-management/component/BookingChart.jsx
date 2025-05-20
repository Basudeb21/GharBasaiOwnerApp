import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getBookingStatusData } from '../../../data-helper/RoomDataHelper';
import NavigationStrings from '../../../constants/NavigationStrings';
import PieChartComponent from '../../../components/PieChartComponent';

const BookingChart = () => {
    const navigation = useNavigation();
    const roomData = getBookingStatusData();

    const handleRoomPress = (roomType) => {
        navigation.navigate(NavigationStrings.BOOKING_DETAILS, { roomType });
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingVertical: 10 }}>
            <PieChartComponent
                title="Hotel Room Distribution"
                data={roomData}
                onItemPress={handleRoomPress}
            />
        </ScrollView>
    );
};

export default BookingChart;