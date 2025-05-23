import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../../constants/Colors';
import RateApp from '../../components/RateApp';
import NavigationStrings from '../../constants/NavigationStrings';
import ProfileBasicInfoCard from '../../components/ProfileBasicInfoCard';
import OthersMenuCard from '../../components/OthersMenuCard';
import Images from '../../constants/Images';
import { useNavigation } from '@react-navigation/native';

const Others = () => {
    const navigation = useNavigation();
    const handelOnPress = () => {
        navigation.navigate(NavigationStrings.OWNER_PROFILE_EDIT)
    }
    return (
        <ScrollView>
            <View style={styles.profileMainContainer}>
                <Image source={Images.LOGO_TWO} style={styles.logo} />
            </View>
            <TouchableOpacity style={{ marginTop: verticalScale(60) }} onPress={handelOnPress}>
                <ProfileBasicInfoCard />
            </TouchableOpacity>
            <OthersMenuCard />
            <RateApp />
            <TouchableOpacity style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontWeight: "bold" }}>Logout</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Others

const styles = StyleSheet.create({

    textContainer: {
        margin: 20
    },
    membershipText: {
        color: Colors.WHITE,
    },
    colorText: {
        color: Colors.WHITE,
        fontWeight: "bold",
        fontSize: scale(20)
    },
    profileMainContainer: {
        height: verticalScale(150),
        backgroundColor: Colors.THEME,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: -1
    },
    logo: {
        height: verticalScale(230),
        width: moderateScale(230),
        marginTop: verticalScale(-85)
    }
})