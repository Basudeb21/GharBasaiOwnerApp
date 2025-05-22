import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Colors from '../constants/Colors';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../constants/NavigationStrings';
import Entypo from 'react-native-vector-icons/Entypo';
import ButtonBox from './ButtonBox';

const RoomPrimaryDetailsCard = ({ data }) => {
    const [showMenu, setShowMenu] = useState(false);
    const navigation = useNavigation();

    const toggleMenu = () => setShowMenu(prev => !prev);

    const handleView = () => {
        setShowMenu(false);
        navigation.navigate(NavigationStrings.ROOM_DETAILS_STACK, {
            screen: NavigationStrings.ROOM_DETAIL_PAGE,
            params: { data }, // Pass room data if needed in detail page
        });
    };

    const handleEdit = () => {
        setShowMenu(false);
        if (data.status?.toLowerCase() === 'vacant') {
            // Optional: Dialog or toast can be triggered here
            console.log('Edit disabled for vacant room');
        } else {
            navigation.navigate(NavigationStrings.ROOM_DETAILS_STACK, {
                screen: NavigationStrings.ROOM_DETAILS_EDIT,
                params: { data }, // Pass room data to edit screen
            });
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.headContainer}>
                <Text style={styles.headTxt}>
                    {data.type.charAt(0).toUpperCase() + data.type.slice(1)} Room
                </Text>
            </View>

            <View style={styles.dataContainer}>
                <View style={styles.leftContainer}>
                    <View style={styles.subContainer}>
                        <MaterialIcons name="meeting-room" size={15} color={Colors.WHITE} />
                        <Text style={styles.detailsTxt}>{data.roomNo}</Text>
                    </View>
                    <View style={styles.subContainer}>
                        <FontAwesome name="bed" size={15} color={Colors.WHITE} />
                        <Text style={styles.detailsTxt}>{data.capacity}</Text>
                    </View>
                    <View style={styles.subContainer}>
                        <FontAwesome name="money" size={15} color={Colors.WHITE} />
                        <Text style={styles.detailsTxt}>{data.rent}</Text>
                    </View>
                    <View style={styles.subContainer}>
                        <MaterialIcons name="payment" size={15} color={Colors.WHITE} />
                        <Text style={styles.detailsTxt}>
                            {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
                        </Text>
                    </View>
                </View>

                <View style={styles.rightContainer}>
                    <TouchableOpacity style={styles.iconBtn} onPress={toggleMenu}>
                        <Entypo name="menu" size={20} color={Colors.THEME} />
                    </TouchableOpacity>

                    {showMenu && (
                        <View style={styles.menuContainer}>
                            <ButtonBox onView={handleView} onEdit={handleEdit} />
                        </View>
                    )}
                </View>
            </View>
        </View>
    );
};

export default RoomPrimaryDetailsCard;

const styles = StyleSheet.create({
    container: {
        marginVertical: verticalScale(5),
        marginHorizontal: moderateScale(15),
        paddingHorizontal: scale(10),
        borderRadius: scale(12),
        backgroundColor: Colors.THEME,
        borderLeftWidth: scale(18),
        borderRightWidth: scale(18),
        elevation: scale(10),
        borderColor: Colors.THEME_TRANSPARENT,
        paddingVertical: verticalScale(5),
    },
    headContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: verticalScale(3),
    },
    headTxt: {
        fontSize: scale(13),
        fontWeight: '600',
        color: Colors.FADE,
    },
    dataContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftContainer: {
        flex: 7,
        justifyContent: 'center',
    },
    rightContainer: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        position: 'relative',
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: verticalScale(3),
    },
    detailsTxt: {
        marginStart: moderateScale(15),
        fontSize: scale(11),
        fontWeight: '500',
        color: Colors.WHITE,
    },
    iconBtn: {
        backgroundColor: Colors.WHITE,
        padding: scale(6),
        borderRadius: scale(8),
        zIndex: 10,
    },
    menuContainer: {
        position: 'absolute',
        top: verticalScale(35),
        right: 0,
        backgroundColor: Colors.WHITE,
        borderRadius: scale(8),
        padding: scale(5),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 1000,
    },
});
