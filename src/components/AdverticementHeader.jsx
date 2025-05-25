import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Images from '../constants/Images'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import Colors from '../constants/Colors'

const AdverticementHeader = () => {
    return (
        <View style={styles.mainCard}>
            <Image source={Images.LOGO} style={styles.logo} />
        </View>
    )
}

export default AdverticementHeader

const styles = StyleSheet.create({
    mainCard: {
        width: "100%",
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80,
        backgroundColor: Colors.LOGIN_IMG_CONTAINER,
        height: verticalScale(140),
        marginBottom: verticalScale(10),
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        height: verticalScale(100),
        width: moderateScale(100)
    }
})