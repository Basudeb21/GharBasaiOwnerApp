import React, { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import RoomPrimaryDetailsCard from '../../components/RoomPrimaryDetailsCard';
import Colors from '../../constants/Colors';

const screenWidth = Dimensions.get('window').width;

const Booking = () => {
    const roomData = [
        { roomNo: '101', capacity: 2, color: Colors.PAID_ROOM, status: 'deluxe', type: 'paid', rent: 2500, booking: "prev" },
        { roomNo: '102', capacity: 3, color: Colors.UNPAID_ROOM, status: 'luxury', type: 'unpaid', rent: 4000, booking: "prev" },
        { roomNo: '103', capacity: 1, color: Colors.VACENT_ROOM, status: 'normal', type: 'vacant', rent: 1500, booking: "curr" },
        { roomNo: '104', capacity: 5, color: Colors.PAID_ROOM, status: 'deluxe', type: 'paid', rent: 5500, booking: "curr" },
        { roomNo: '105', capacity: 3, color: Colors.VACENT_ROOM, status: 'luxury', type: 'vacant', rent: 4200, booking: "up" },
        { roomNo: '106', capacity: 1, color: Colors.PAID_ROOM, status: 'normal', type: 'paid', rent: 1600, booking: "up" },
        { roomNo: '107', capacity: 2, color: Colors.PAID_ROOM, status: 'deluxe', type: 'paid', rent: 2600, booking: "prev" },
        { roomNo: '108', capacity: 4, color: Colors.UNPAID_ROOM, status: 'luxury', type: 'unpaid', rent: 4500, booking: "curr" },
        { roomNo: '109', capacity: 1, color: Colors.VACENT_ROOM, status: 'normal', type: 'vacant', rent: 1400, booking: "up" },
        { roomNo: '110', capacity: 2, color: Colors.PAID_ROOM, status: 'deluxe', type: 'paid', rent: 2700, booking: "prev" },
        { roomNo: '111', capacity: 3, color: Colors.UNPAID_ROOM, status: 'luxury', type: 'unpaid', rent: 3900, booking: "curr" },
        { roomNo: '112', capacity: 1, color: Colors.VACENT_ROOM, status: 'normal', type: 'vacant', rent: 1300, booking: "up" },
        { roomNo: '113', capacity: 2, color: Colors.PAID_ROOM, status: 'deluxe', type: 'paid', rent: 2400, booking: "prev" },
        { roomNo: '114', capacity: 3, color: Colors.UNPAID_ROOM, status: 'luxury', type: 'unpaid', rent: 3700, booking: "curr" },
        { roomNo: '115', capacity: 1, color: Colors.VACENT_ROOM, status: 'normal', type: 'vacant', rent: 1200, booking: "up" },
    ];

    const renderRoomList = (filterKey) => (
        <View style={styles.scene}>
            {roomData
                .filter(room => room.booking === filterKey)
                .map((room, idx) => (
                    <RoomPrimaryDetailsCard key={idx} data={room} screenType="Booking" />
                ))}
        </View>
    );

    const PreviousRoute = () => renderRoomList("prev");
    const OngoingRoute = () => renderRoomList("curr");
    const UpcomingRoute = () => renderRoomList("up");

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'previous', title: 'Previous' },
        { key: 'ongoing', title: 'Ongoing' },
        { key: 'upcoming', title: 'Upcoming' },
    ]);

    const renderScene = SceneMap({
        previous: PreviousRoute,
        ongoing: OngoingRoute,
        upcoming: UpcomingRoute,
    });

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: screenWidth }}
            style={{ backgroundColor: Colors.PAGE_COLOR }}
            renderTabBar={props => (
                <TabBar
                    {...props}
                    indicatorStyle={{ backgroundColor: Colors.THEME }}
                    style={{ backgroundColor: Colors.WHITE }}
                    activeColor={Colors.THEME}
                    inactiveColor="#888"
                    labelStyle={{ fontSize: 13, fontWeight: '600' }}
                />
            )}
        />
    );
};

export default Booking;

const styles = StyleSheet.create({
    scene: {
        flex: 1,
        backgroundColor: Colors.PAGE_COLOR,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
});

// <ScrollView style={{ backgroundColor: Colors.PAGE_COLOR }}>
//     <View>
//         {roomData.map((room, index) => (
//             <RoomPrimaryDetailsCard key={index} data={room} screenType="Booking" />
//         ))}
//     </View>
// </ScrollView>