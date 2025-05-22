import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../../../components/Header'
import FeaturedImg from '../../../room-management/micro-comps/FeaturedImg'
import ImageAdderSection from '../../../room-management/components/ImageAdderSection'
import InputWithLabel from '../../../../components/InputWithLabel'
import { verticalScale } from 'react-native-size-matters'
import Spacer from '../../../../components/Spacer'

const ProfileManagemengt = () => {
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
                    <FeaturedImg />
                    <ImageAdderSection />
                    <View style={{ flexDirection: "row" }}>
                        <InputWithLabel label={"Name"} placeholder={"Enter homestay name"} />
                        <InputWithLabel label={"Address"} placeholder={"Enter homestay address"} />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <InputWithLabel label={"Phone"} placeholder={"Enter homestay phone"} />
                        <InputWithLabel label={"Email"} placeholder={"Enter homestay email"} />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <InputWithLabel label={"Check-In Time"} placeholder={"Enter check in time"} />
                        <InputWithLabel label={"Check-Out Time"} placeholder={"Enter check out time"} />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <InputWithLabel label={"Latitude"} placeholder={"Enter homestay Latitude"} />
                        <InputWithLabel label={"Longitude"} placeholder={"Enter homestay Longitude"} />
                    </View>
                    <Spacer height={20} />

                </ScrollView>

            </KeyboardAvoidingView>
        </View>
    )
}

export default ProfileManagemengt

const styles = StyleSheet.create({})