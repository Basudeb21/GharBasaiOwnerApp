import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../../constants/Colors';
import RateApp from '../../components/RateApp';
import NavigationStrings from '../../constants/NavigationStrings';
import ProfileBasicInfoCard from '../../components/ProfileBasicInfoCard';
import OthersMenuCard from '../../components/OthersMenuCard';
import Images from '../../constants/Images';
import { useNavigation } from '@react-navigation/native';
import { LogoutUser } from '../../local-store';
import { logout } from '../../redux-storage/AuthSlice';
import Spacer from '../../components/Spacer';

const Others = () => {
    const dispatch = useDispatch();


    const handelLogout = () => {
        LogoutUser();
        dispatch(logout());
    };

    return (
        <ScrollView>
            <View style={styles.profileMainContainer}>
                <Image source={Images.LOGO_TWO} style={styles.logo} />
            </View>
            <Spacer height={85} />
            <ProfileBasicInfoCard />

            <OthersMenuCard />
            <RateApp />
            <TouchableOpacity onPress={handelLogout} style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
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