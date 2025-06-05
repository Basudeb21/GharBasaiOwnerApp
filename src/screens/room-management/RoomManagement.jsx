import { ScrollView, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import React, { useState, useCallback } from 'react';
import RoomPrimaryDetailsCard from '../../components/RoomPrimaryDetailsCard';
import Colors from '../../constants/Colors';
import SmallPieChart from '../../components/SmallPieChart';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import GetAllRooms from '../../api/app/GetAllRooms';
import GetRoomTypes from '../../api/app/GetRoomTypes';
import FloatingActionButton from '../../components/FloatingActionButton';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import NavigationStrings from '../../constants/NavigationStrings';

const RoomManagement = () => {
    const [selectedType, setSelectedType] = useState(null);
    const [rooms, setRooms] = useState([]);
    const [roomCategories, setRoomCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    const filteredRooms = selectedType
        ? rooms.filter(room => room.room_category?.toString() === selectedType)
        : rooms;

    const handleAllRoomsDataGet = async () => {
        setLoading(true);
        try {
            const [roomsResult, categoriesResult] = await Promise.all([
                GetAllRooms(),
                GetRoomTypes()
            ]);

            if (roomsResult && roomsResult.HomestayRoom) {
                setRooms(roomsResult.HomestayRoom);
            } else {
                setRooms([]);
            }

            if (categoriesResult) {
                setRoomCategories(categoriesResult);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddHomestay = () => {
        navigation.navigate(NavigationStrings.ROOM_DETAILS_STACK, {
            screen: NavigationStrings.ADD_NEW_ROOM
        });
    };

    useFocusEffect(
        useCallback(() => {
            handleAllRoomsDataGet();
        }, [])
    );

    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <ScrollView style={{ backgroundColor: Colors.PAGE_COLOR }}>
                <View style={styles.pieContainer}>
                    <TouchableOpacity onPress={() => setSelectedType('10')}>
                        <SmallPieChart percentage={60} label="Deluxe" color={Colors.DELUX_ROOM} size={80} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setSelectedType('11')}>
                        <SmallPieChart percentage={60} label="Suite" color={Colors.LUXURY_ROOM} size={80} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setSelectedType('9')}>
                        <SmallPieChart percentage={60} label="Regular" color={Colors.NORMAL_ROOM} size={80} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setSelectedType(null)}>
                        <SmallPieChart percentage={100} label="All" color={Colors.THEME} size={80} />
                    </TouchableOpacity>
                </View>

                <View style={{ marginBottom: verticalScale(20) }}>
                    {loading ? (
                        <Text style={{ textAlign: 'center', marginTop: 20 }}>Loading...</Text>
                    ) : (
                        filteredRooms.map((room, index) => (
                            <View key={index} style={{ zIndex: filteredRooms.length - index }}>
                                <RoomPrimaryDetailsCard
                                    data={room}
                                    roomCategories={roomCategories}
                                    screenType="RoomManagement"
                                />
                            </View>
                        ))
                    )}
                </View>
            </ScrollView>

            <View style={styles.fab}>
                <FloatingActionButton onPress={handleAddHomestay} />
            </View>
        </View>
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
    fab: {
        position: 'absolute',
        bottom: verticalScale(0),
        right: scale(0),
        zIndex: 100,
    },
});