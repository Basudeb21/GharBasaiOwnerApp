import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const TouchButton = ({ label, onPress }) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.btnTxt}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TouchButton

const styles = StyleSheet.create({
    btn: {
        alignSelf: "center",
        backgroundColor: Colors.THEME,
        paddingHorizontal: moderateScale(30),
        paddingVertical: verticalScale(10),
        borderRadius: scale(20)
    },
    btnTxt: {
        color: Colors.WHITE,
        fontSize: scale(16),
        fontWeight: "500"
    }
})