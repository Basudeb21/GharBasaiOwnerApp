import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../../components/Header'
import FeaturedImg from '../../../room-management/micro-comps/FeaturedImg'
import ImageAdderSection from '../../../room-management/components/ImageAdderSection'
import InputWithLabel from '../../../../components/InputWithLabel'
import { verticalScale } from 'react-native-size-matters'
import Spacer from '../../../../components/Spacer'
import GetHomestayProfile from '../../../../api/app/GetHomestayProfile'
import MultiInputBox from '../../../../components/MultiInputBox'

const ProfileManagemengt = () => {
    const [homestayName, setHomestayName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");


    const handelUpdate = async () => {
        const result = await GetHomestayProfile();
        console.log("RESULT :: ", result);
        setHomestayName(result.homestay_name);
        setAddress(result.address);
        setPhone(result.phone);
        setEmail(result.email);
        setCheckIn(result.check_in);
        setCheckOut(result.check_out);
        setLongitude(result.longitude);
        setLatitude(result.latitude);

        console.log(homestayName);
        console.log(address);
        console.log(phone);
        console.log(email);
        console.log(checkIn);
        console.log(checkOut);
        console.log(longitude);
        console.log(latitude);




    }


    return (
        <View style={{ flex: 1 }}>
            <Header title={'HomeStay Profile Mangement'} />

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollViewContent}
                    keyboardShouldPersistTaps="handled"
                >
                    <FeaturedImg onPress={handelUpdate} />
                    <ImageAdderSection />
                    <View style={{ flexDirection: "row" }}>
                        <InputWithLabel label={"Name"} placeholder={"Enter homestay name"} value={homestayName} />
                        <InputWithLabel label={"Address"} placeholder={"Enter homestay address"} value={address} />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <InputWithLabel label={"Phone"} placeholder={"Enter homestay phone"} value={phone} />
                        <InputWithLabel label={"Email"} placeholder={"Enter homestay email"} value={email} />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <InputWithLabel label={"Check-In Time"} placeholder={"Enter check in time"} value={checkIn} />
                        <InputWithLabel label={"Check-Out Time"} placeholder={"Enter check out time"} value={checkOut} />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <InputWithLabel label={"Latitude"} placeholder={"Enter homestay Latitude"} value={latitude} />
                        <InputWithLabel label={"Longitude"} placeholder={"Enter homestay Longitude"} value={longitude} />
                    </View>
                    <MultiInputBox label={"Aminities"} />

                    <Spacer height={20} />

                </ScrollView>

            </KeyboardAvoidingView>
        </View>
    )
}

export default ProfileManagemengt

const styles = StyleSheet.create({})