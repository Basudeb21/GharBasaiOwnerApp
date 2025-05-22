import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import RoomPrimaryDetailsCard from '../../components/RoomPrimaryDetailsCard';
import Colors from '../../constants/Colors';
import SmallPieChart from '../../components/SmallPieChart';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const RoomManagement = () => {
    const [selectedType, setSelectedType] = useState(null);

    const roomData = [
        { roomNo: '101', capacity: 2, color: Colors.DELUX_ROOM, type: 'deluxe', rent: 2500, status: 'paid' },
        { roomNo: '102', capacity: 3, color: Colors.LUXURY_ROOM, type: 'luxury', rent: 4000, status: 'unpaid' },
        { roomNo: '103', capacity: 1, color: Colors.NORMAL_ROOM, type: 'normal', rent: 1500, status: 'vacant' },
        { roomNo: '104', capacity: 2, color: Colors.DELUX_ROOM, type: 'deluxe', rent: 2500, status: 'paid' },
        { roomNo: '105', capacity: 3, color: Colors.LUXURY_ROOM, type: 'luxury', rent: 4000, status: 'paid' },
        { roomNo: '106', capacity: 1, color: Colors.NORMAL_ROOM, type: 'normal', rent: 1500, status: 'unpaid' },
        { roomNo: '107', capacity: 5, color: Colors.DELUX_ROOM, type: 'deluxe', rent: 5500, status: 'paid' },
        { roomNo: '108', capacity: 3, color: Colors.LUXURY_ROOM, type: 'luxury', rent: 4200, status: 'vacant' },
        { roomNo: '109', capacity: 1, color: Colors.NORMAL_ROOM, type: 'normal', rent: 1600, status: 'paid' },
        { roomNo: '110', capacity: 4, color: Colors.NORMAL_ROOM, type: 'normal', rent: 3000, status: 'paid' },
    ];

    const filteredRooms = selectedType
        ? roomData.filter(room => room.type === selectedType)
        : roomData;

    return (
        <ScrollView style={{ backgroundColor: Colors.PAGE_COLOR }}>
            <View style={styles.pieContainer}>
                <TouchableOpacity onPress={() => setSelectedType('deluxe')}>
                    <SmallPieChart percentage={60} label="Deluxe" color={Colors.DELUX_ROOM} size={80} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSelectedType('luxury')}>
                    <SmallPieChart percentage={60} label="Luxury" color={Colors.LUXURY_ROOM} size={80} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSelectedType('normal')}>
                    <SmallPieChart percentage={60} label="Normal" color={Colors.NORMAL_ROOM} size={80} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSelectedType(null)}>
                    <SmallPieChart percentage={100} label="All" color={Colors.THEME} size={80} />
                </TouchableOpacity>
            </View>

            <View>
                {filteredRooms.map((room, index) => (
                    <View key={index} style={{ zIndex: filteredRooms.length - index }}>
                        <RoomPrimaryDetailsCard data={room} screenType="RoomManagement" />
                    </View>
                ))}
            </View>

        </ScrollView>
    );
};

export default RoomManagement;

const styles = StyleSheet.create({
    pieContainer: {
        backgroundColor: Colors.WHITE,
        marginHorizontal: moderateScale(15),
        borderRadius: scale(12),
        marginTop: verticalScale(12),
        paddingVertical: verticalScale(10),
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});
