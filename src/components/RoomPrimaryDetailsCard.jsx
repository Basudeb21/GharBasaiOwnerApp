import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../constants/Colors'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import DialougeBox from './DialougeBox'
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../constants/NavigationStrings'


const RoomPrimaryDetailsCard = ({ data, screenType }) => {
    const [isDialogVisible, setIsDialogVisible] = useState(false); // NEW
    const navigation = useNavigation();

    const getStatusColor = () => {
        if (screenType === 'RoomManagement') {
            switch (data.status) {
                case 'paid':
                    return Colors.PAID_ROOM;
                case 'unpaid':
                    return Colors.UNPAID_ROOM;
                case 'vacant':
                    return Colors.VACENT_ROOM;
                default:
                    return Colors.FADE;
            }
        } else if (screenType === 'Booking') {
            switch (data.status) {
                case 'deluxe':
                    return Colors.DELUX_ROOM;
                case 'luxury':
                    return Colors.LUXURY_ROOM;
                case 'normal':
                    return Colors.NORMAL_ROOM;
                default:
                    return Colors.FADE;
            }
        }
        return Colors.FADE;
    };
    return (
        <View style={styles.container}>
            <View style={styles.headContainer}>
                <Text style={styles.headTxt}> {data.type.charAt(0).toUpperCase() + data.type.slice(1)} Room</Text>
                <View style={styles.subContainer}>
                    <Text style={[styles.paymentBox,
                    styles.statusText,
                    {
                        color: getStatusColor(),
                    }
                    ]}>
                        {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
                    </Text>
                </View>
            </View>
            <View style={styles.dataContainer}>

                <View style={styles.leftContainer}>
                    <View style={styles.subContainer}>
                        <MaterialIcons
                            name="meeting-room"
                            size={15}
                            color={Colors.WHITE}
                        />
                        <Text style={styles.detailsTxt}>{data.roomNo}</Text>
                    </View>
                    <View style={styles.subContainer}>
                        <FontAwesome
                            name="bed"
                            size={15}
                            color={Colors.WHITE}

                        />
                        <Text style={styles.detailsTxt}>{data.capacity}</Text>
                    </View>
                    <View style={styles.subContainer}>
                        <FontAwesome
                            name="money"
                            size={15}
                            color={Colors.WHITE}
                        />
                        <Text style={styles.detailsTxt}>{data.rent}</Text>
                    </View>

                </View>
                <View style={styles.rightContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(NavigationStrings.ROOM_DETAILS_STACK, {
                                screen: NavigationStrings.ROOM_DETAIL_PAGE,
                            })

                        }}
                        style={[styles.btn, { backgroundColor: Colors.BLUE }]}>
                        <Text style={styles.btnTxt}>view</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            if (data.status === 'vacant' || data.type === 'vacant') {
                                setIsDialogVisible(true);
                            } else {
                                navigation.navigate(NavigationStrings.ROOM_DETAILS_STACK, { screen: NavigationStrings.ROOM_DETAILS_EDIT })
                            }
                        }}
                        style={[styles.btn, { backgroundColor: Colors.YELLOW }]}>
                        <Text style={styles.btnTxt}>edit</Text>
                    </TouchableOpacity>
                </View>
                {isDialogVisible && (

                    <DialougeBox
                        visible={isDialogVisible}
                        onClose={() => setIsDialogVisible(false)}
                        title={"Unpaid Room"}
                        content={"The room is not available for any guest. You can not check booking details from here."}
                    />
                )}
            </View>



        </View>
    )
}

export default RoomPrimaryDetailsCard

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
        borderColor: Colors.THEME_TRANSPARENT
    },
    btn: {
        backgroundColor: Colors.DEACTIVE,
        alignSelf: "center",
        margin: scale(6),
        paddingVertical: verticalScale(4),
        paddingHorizontal: moderateScale(14),
        borderRadius: scale(6)
    },
    btnTxt: {
        color: Colors.WHITE
    },
    headContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: verticalScale(3),
    },

    headTxt: {
        fontSize: scale(13),
        fontWeight: "600",
        color: Colors.FADE,
    },
    dataContainer: {
        flexDirection: "row"

    },
    subContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: verticalScale(3)

    },
    leftContainer: {
        flex: 7,
        justifyContent: "center",
    },
    rightContainer: {
        flex: 3,
        justifyContent: "center",

    },
    detailsTxt: {
        marginStart: moderateScale(15),
        fontSize: scale(11),
        fontWeight: "500",
        color: Colors.WHITE
    },
    paymentBox: {
        paddingVertical: verticalScale(4),
        marginTop: verticalScale(5),
        paddingHorizontal: moderateScale(12),
        fontSize: scale(10),
        fontWeight: "500",
        color: Colors.WHITE,
        borderRadius: scale(12),
        backgroundColor: Colors.WHITE
    }

})