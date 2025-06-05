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
import Spacer from './Spacer';

const RoomPrimaryDetailsCard = ({ data, roomCategories }) => {
    const [showMenu, setShowMenu] = useState(false);
    const navigation = useNavigation();

    const toggleMenu = () => setShowMenu(prev => !prev);

    const getRoomTypeName = () => {
        if (!data.room_category) return "Room";
        const category = roomCategories.find(cat => cat.id.toString() === data.room_category.toString());
        return category ? `${category.name}` : "Room";
    };

    const handleView = () => {
        setShowMenu(false);
        navigation.navigate(NavigationStrings.ROOM_DETAILS_STACK, {
            screen: NavigationStrings.ROOM_DETAIL_PAGE,
            params: { roomData: data },
        });
    };

    const handleEdit = () => {
        setShowMenu(false);

        navigation.navigate(NavigationStrings.ROOM_DETAILS_STACK, {
            screen: NavigationStrings.ROOM_DETAILS_EDIT,
            params: { roomData: data },
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.headContainer}>
                <Text style={styles.headTxt}>
                    {getRoomTypeName()}
                </Text>
            </View>

            <View style={styles.dataContainer}>
                <View style={styles.leftContainer}>
                    <View style={styles.subContainer}>
                        <MaterialIcons name="meeting-room" size={15} color={Colors.WHITE} />
                        <Text style={styles.detailsTxt}>{data.room_no}</Text>
                    </View>
                    <View style={styles.subContainer}>
                        <FontAwesome name="bed" size={15} color={Colors.WHITE} />
                        <Text style={styles.detailsTxt}>{data.beds}</Text>
                    </View>
                    <View style={styles.subContainer}>
                        <FontAwesome name="money" size={15} color={Colors.WHITE} />
                        <Text style={styles.detailsTxt}>{data.rent}</Text>
                    </View>
                    <View style={styles.subContainer}>
                        <FontAwesome name="users" size={15} color={Colors.WHITE} />
                        <Text style={styles.detailsTxt}>
                            {data.maximum_guest}
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
            <Spacer height={10} />
        </View>
    );
};

export default RoomPrimaryDetailsCard;

const styles = StyleSheet.create({
    container: {
        marginTop: verticalScale(15),
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