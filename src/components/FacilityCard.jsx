import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'


const FacilityCard = () => {
    return (
        <View style={styles.facilityWrapper}>
            <View style={styles.facilityContainer}>
                <FontAwesome
                    name="wifi"
                    size={18}
                    color={Colors.DISABLED_NAVIGATION_COLOR}
                />
                <Text style={styles.facilityName}>Free WIFI</Text>
            </View>
            <View style={styles.facilityContainer}>
                <FontAwesome
                    name="tv"
                    size={18}
                    color={Colors.DISABLED_NAVIGATION_COLOR}
                />
                <Text style={styles.facilityName}>LED TV</Text>
            </View>
            <View style={styles.facilityContainer}>
                <MaterialCommunityIcons
                    name="cctv"
                    size={18}
                    color={Colors.DISABLED_NAVIGATION_COLOR}
                />
                <Text style={styles.facilityName}>24X7 security</Text>
            </View>
            <View style={styles.facilityContainer}>
                <FontAwesome5
                    name="toilet-paper"
                    size={18}
                    color={Colors.DISABLED_NAVIGATION_COLOR}
                />
                <Text style={styles.facilityName}>Free Toiletri</Text>
            </View>
            <View style={styles.facilityContainer}>
                <MaterialCommunityIcons
                    name="food-turkey"
                    size={18}
                    color={Colors.DISABLED_NAVIGATION_COLOR}
                />
                <Text style={styles.facilityName}>Free Food</Text>
            </View>
            <View style={styles.counterContainer}>
                <Text style={styles.counter}>+21</Text>
            </View>

        </View>
    )
}

export default FacilityCard

const styles = StyleSheet.create({
    facilityWrapper: {
        backgroundColor: Colors.CARD,
        elevation: scale(2),
        borderRadius: scale(12),
        marginHorizontal: moderateScale(10),
        marginVertical: verticalScale(10),
        padding: verticalScale(20),
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: 'wrap'
    },
    facilityContainer: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-start"
    },
    facilityName: {
        color: Colors.DISABLED_NAVIGATION_COLOR,
        fontSize: scale(10)
    },
    counter: {
        color: Colors.THEME
    },
    counterContainer: {
        backgroundColor: Colors.THEME_TRANSPARENT,
        borderRadius: scale(20),
        alignSelf: "flex-start",
        padding: scale(6),
        paddingVertical: verticalScale(8)
    }

})