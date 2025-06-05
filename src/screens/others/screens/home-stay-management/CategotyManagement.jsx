import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../../../components/Header'
import InputWithLabel from '../../../../components/InputWithLabel'
import DropdownWithLabel from '../../../../components/DropdownWithLabel'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Colors from '../../../../constants/Colors'
import DescriptionBox from '../../../../components/DescriptionBox'

const CategotyManagement = () => {
    const item = [
        { label: 'Deluxe', value: 'deluxe' },
        { label: 'Primium', value: 'primium' },
        { label: 'Normal', value: 'normal' },
    ]
    const status = [
        { label: 'Active', value: 'Active' },
        { label: 'Not Active', value: 'Not Active' },
    ]
    return (
        <View>
            <Header title={"Category Management"} />
            <View style={{ flexDirection: "row" }}>
                <DropdownWithLabel label={"Room Type"} items={item} placeholder={"Room category"} />
                <DropdownWithLabel label={"Room Status"} items={status} placeholder={"Room Status"} />

            </View>
            <InputWithLabel label={"No. of rooms"} placeholder={"Enter number of rooms"} />
            <DescriptionBox label={"Description"} placeholder={"Enter description of this room type"} />
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>ADD DATA</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CategotyManagement

const styles = StyleSheet.create({
    btn: {
        alignSelf: "center",
        marginTop: verticalScale(50),
        backgroundColor: Colors.BLUE,
        paddingVertical: verticalScale(8),
        paddingHorizontal: moderateScale(20),
        borderRadius: scale(12)
    },
    btnTxt: {
        color: Colors.WHITE,
        fontWeight: "600"
    }
})