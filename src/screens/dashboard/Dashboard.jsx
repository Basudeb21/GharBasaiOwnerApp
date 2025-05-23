import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InfoCard from '../../components/InfoCard'
import String from '../../constants/Strings'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import Colors from '../../constants/Colors'
import CurrentTravelers from '../../components/CurrentTravelers'
import Images from '../../constants/Images'
import Spacer from '../../components/Spacer'
import SinglePieChart from '../../components/SinglePieChart'
import WeeklyReport from '../room-management/WeeklyReport'

const Dashboard = () => {

    return (
        <View>
            <View style={styles.detailsCard}>
                <InfoCard
                    desc={"Travelers"}
                    count={"1,254"}
                    Icon={MaterialCommunityIcons}
                    iconName="bag-personal"
                    color={Colors.SEA_GREEN}
                />

                <InfoCard
                    desc={"Bookings"}
                    count={"2,200"}
                    Icon={MaterialCommunityIcons}
                    iconName="book"
                    color={Colors.ROYAL_BLUE}
                />

                <InfoCard
                    desc={"Earnings"}
                    count={`${String.RS_SYMBOL}12,0000`}
                    Icon={MaterialCommunityIcons}
                    iconName="currency-inr"
                    color={Colors.TOMATO}
                />
            </View>
            <Spacer height={20} />
            <SinglePieChart />
            <WeeklyReport />
            <Spacer height={20} />

        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    detailsCard: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    }
})