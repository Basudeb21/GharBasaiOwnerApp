import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import InputWithLabel from './InputWithLabel'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Colors from '../constants/Colors'

const OwnerDetailsInput = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <InputWithLabel label={"User Name"} placeholder={"Enter user name"} />
                <InputWithLabel label={"Email"} placeholder={"Enter email id"} />

            </View>
            <View style={{ flexDirection: "row" }}>
                <InputWithLabel label={"Phone No."} placeholder={"Enter phone number"} />
                <InputWithLabel label={"First Name"} placeholder={"Enter first name"} />
            </View>
            <View style={{ flexDirection: "row" }}>
                <InputWithLabel label={"Middle Name"} placeholder={"Enter middle name"} />
                <InputWithLabel label={"Last Name"} placeholder={"Enter last name"} />
            </View>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OwnerDetailsInput

const styles = StyleSheet.create({
    container: {
        marginTop: verticalScale(50),
        marginLeft: moderateScale(10)
    },
    btn: {
        backgroundColor: Colors.THEME_TRANSPARENT,
        alignSelf: "center",
        marginTop: verticalScale(20),
        paddingVertical: scale(10),
        paddingHorizontal: moderateScale(30),
        borderRadius: scale(100)
    },
    btnTxt: {
        color: Colors.WHITE,
        fontSize: scale(15),
        fontWeight: "600"
    }
})