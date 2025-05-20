import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BarGraph from '../../components/BarGraph'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Colors from '../../constants/Colors'
import Spacer from '../../components/Spacer'

const WeeklyReport = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.headTxt}>Weekly Report</Text>
            </View>
            <ScrollView horizontal={true}>
                <View style={styles.innerBox}>
                    <BarGraph delux={60} luxary={50} normal={80} label='sun' />
                    <Spacer width={20} />

                    <BarGraph delux={20} luxary={50} normal={80} label='mon' />
                    <Spacer width={20} />

                    <BarGraph delux={60} luxary={50} normal={80} label='tue' />
                    <Spacer width={20} />

                    <BarGraph delux={60} luxary={50} normal={80} label='wed' />
                    <Spacer width={20} />

                    <BarGraph delux={60} luxary={50} normal={80} label='thu' />
                    <Spacer width={20} />

                    <BarGraph delux={60} luxary={50} normal={80} label='fri' />
                    <Spacer width={20} />

                    <BarGraph delux={60} luxary={50} normal={80} label='sat' />

                </View>

            </ScrollView>
        </View>
    )
}

export default WeeklyReport

const styles = StyleSheet.create({
    container: {
        marginHorizontal: moderateScale(10),
        marginTop: verticalScale(20),
        backgroundColor: Colors.WHITE,
        padding: scale(20),
        borderRadius: scale(12),
        elevation: scale(10),
    },
    headTxt: {
        color: Colors.DISABLED_NAVIGATION_COLOR,
        marginBottom: verticalScale(20),
        fontWeight: "700"
    },
    innerBox: {
        flexDirection: "row"

    }
})