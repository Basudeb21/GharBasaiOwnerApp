import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const InfoCard = ({ count, desc, Icon, color, iconName }) => {
    return (
        <View style={[styles.card, { backgroundColor: color }]}>
            <View style={styles.imgCard}>
                <Icon
                    name={iconName}
                    size={18}
                    color={color}
                />
            </View>
            <Text style={styles.count}>{count}</Text>
            <Text style={styles.desc}>{desc}</Text>
        </View>
    )
}

export default InfoCard

const styles = StyleSheet.create({
    card: {
        alignSelf: "flex-start",
        padding: scale(10),
        paddingEnd: moderateScale(5),
        width: "29%",
        justifyContent: "center",
        marginTop: verticalScale(10),
        borderRadius: scale(12),
        elevation: scale(2)
    },

    imgCard: {
        backgroundColor: Colors.WHITE,
        alignSelf: "flex-start",
        padding: scale(10),
        borderRadius: scale(15)
    },

    count: {
        color: Colors.WHITE,
        fontWeight: "600",
        fontSize: scale(16),
        marginTop: verticalScale(10)
    },
    desc: {
        color: Colors.WHITE,
        fontSize: scale(10)
    }
})