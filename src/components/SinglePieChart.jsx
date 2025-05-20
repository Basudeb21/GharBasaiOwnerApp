import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import String from '../constants/Strings'
import Colors from '../constants/Colors'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import SmallPieChart from './SmallPieChart'

const SinglePieChart = () => {
    return (
        <View style={styles.container}>
            <View style={styles.incomeDetailsContainer}>
                <Text style={styles.headTxt}>Today's Income</Text>
                <Text style={styles.ammount}>{String.RS_SYMBOL}1,2200</Text>
            </View>
            <View style={styles.pieContainer}>
                <SmallPieChart percentage={60} label='Bookings' color={Colors.BLUE} />
                <SmallPieChart percentage={68} label='Packages' color={Colors.ROYAL_BLUE} />
                <SmallPieChart percentage={80} label='Travels' color={Colors.THEME_TRANSPARENT} />
            </View>
        </View>
    )
}

export default SinglePieChart

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        marginHorizontal: moderateScale(10),
        marginTop: verticalScale(10),
        paddingVertical: scale(10),
        borderRadius: scale(15),
        elevation: scale(10),
    },
    pieContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly"

    },
    incomeDetailsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingEnd: moderateScale(20)
    },
    headTxt: {
        color: Colors.DISABLED_NAVIGATION_COLOR,
        marginStart: moderateScale(10),
        marginBottom: verticalScale(10),
        fontWeight: "700"
    },
    ammount: {
        color: Colors.BLUE,
        marginStart: moderateScale(10),
        marginBottom: verticalScale(10),
        fontWeight: "400"
    }
})