import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getRoomTypeData } from '../../../data-helper/RoomDataHelper';
import NavigationStrings from '../../../constants/NavigationStrings';
import PieChartComponent from '../../../components/PieChartComponent';

const RoomStats = () => {
    const navigation = useNavigation();
    const roomData = getRoomTypeData();

    const handleRoomPress = (roomType) => {
        navigation.navigate(NavigationStrings.ROOM_DETAILS, { roomType });
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

export default RoomStats;