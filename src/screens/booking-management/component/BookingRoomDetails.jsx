import React from 'react';
import { ScrollView, View } from 'react-native';
import Colors from '../../../constants/Colors';
import { getRoomStatusData } from '../../../data-helper/RoomDataHelper';
import Header from '../../../components/Header';
import PieChartComponent from '../../../components/PieChartComponent';

const BookingRoomDetails = ({ route }) => {
    const { roomType } = route.params;
    const roomDetails = getRoomStatusData(roomType);

    const roomData = [
        {
            name: 'Occupied',
            count: roomDetails.occupied,
            color: Colors.OCCUPIED,
        },
        {
            name: 'Available',
            count: roomDetails.available,
            color: Colors.RENTABLE,
        }
    ];

    return (
        <View>
            <Header title={roomDetails.name} />
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingVertical: 10 }}>
                <PieChartComponent
                    title={`${roomDetails.name} Status`}
                    data={roomData}
                    showTotal
                    totalCount={roomDetails.total}
                />
            </ScrollView>
        </View>
    );
};

export default BookingRoomDetails;