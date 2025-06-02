import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React from 'react'
import InputWithLabel from './InputWithLabel'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Colors from '../constants/Colors'
import { useSelector } from 'react-redux';
import UpdateHomestayOwnerData from '../api/app/UpdateHomeStayOwnerData'

const OwnerDetailsInput = ({
    username, setUsername,
    email, setEmail,
    contact_number, setContactNumber,
    first_name, setFirstName,
    middle_name, setMiddleName,
    last_name, setLastName }) => {
    const { user } = useSelector((state) => state.auth);
    console.log("USER OBJ : ", user);

    const handleUpdateData = async () => {
        console.log("Pressed");
        try {
            const res = await UpdateHomestayOwnerData({
                username,
                email,
                contact_number,
                first_name,
                last_name
            });

            console.log("Response from backend:", res);

            // ✅ Check boolean status and show message
            if (res?.status === true) {
                ToastAndroid.show(res.message || "Profile updated successfully", ToastAndroid.SHORT);
            } else {
                ToastAndroid.show("Update failed. Please try again.", ToastAndroid.SHORT);
            }

        } catch (err) {
            console.error("Error in handleUpdateData:", err);
            ToastAndroid.show("Failed to update. Please try again.", ToastAndroid.SHORT);
        }
    };


    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <InputWithLabel label={"User Name"} placeholder={"Enter user name"} value={username} onChangeText={setUsername} />
                <InputWithLabel label={"Email"} placeholder={"Enter email id"} value={email} onChangeText={setEmail} />
            </View>
            <View style={{ flexDirection: "row" }}>
                <InputWithLabel label={"Phone No."} placeholder={"Enter phone number"} value={contact_number} onChangeText={setContactNumber} />
                <InputWithLabel label={"First Name"} placeholder={"Enter first name"} value={first_name} onChangeText={setFirstName} />
            </View>
            <View style={{ flexDirection: "row" }}>
                <InputWithLabel label={"Middle Name"} placeholder={"Enter middle name"} value={middle_name} onChangeText={setMiddleName} />
                <InputWithLabel label={"Last Name"} placeholder={"Enter last name"} value={last_name} onChangeText={setLastName} />
            </View>

            <TouchableOpacity style={styles.btn} onPress={handleUpdateData}>
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