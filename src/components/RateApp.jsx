import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Images from '../constants/Images'
import Colors from '../constants/Colors'

const RateApp = () => {
    return (
        <ImageBackground
            source={Images.RATE}
            resizeMode="cover"
            borderRadius={scale(20)}
            style={styles.cardContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Love using our app?</Text>
                <Text style={styles.subText}>Rate us on Play Store</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Rate Now</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default RateApp

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 12,
        padding: 20,
        margin: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: scale(16),
        fontWeight: 'bold',
        color: Colors.BLACK,
    },
    subText: {
        fontSize: 14,
        color: Colors.DISABLED_NAVIGATION_COLOR,
        marginVertical: 4,
    },
    button: {
        backgroundColor: Colors.YELLOW,
        paddingVertical: verticalScale(8),
        paddingHorizontal: moderateScale(10),
        borderRadius: 50,
        marginTop: verticalScale(10),
        alignSelf: "flex-start",
        paddingEnd: moderateScale(60)
    },
    buttonText: {
        color: Colors.CREDENTIAL_ACTIVE_TEXT,
        fontWeight: 'bold',
    },
})