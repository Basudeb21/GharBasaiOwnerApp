import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const RecivedMessage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.msg}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, rem?</Text>
        </View>
    )
}

export default RecivedMessage

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.FADE,
        alignSelf: "flex-start",
        marginStart: moderateScale(20),
        padding: scale(10),
        maxWidth: "48%",
        borderTopRightRadius: scale(15),
        borderBottomRightRadius: scale(15),
        borderBottomLeftRadius: scale(15),
        marginVertical: verticalScale(10)

    },
    msg: {
        color: Colors.WHITE
    }
})