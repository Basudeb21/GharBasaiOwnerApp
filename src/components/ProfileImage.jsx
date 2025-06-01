import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Images from '../constants/Images'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Colors from '../constants/Colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const ProfileImage = ({ img }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image source={{ uri: img || Images.AVATAR_ONE }} style={styles.profilePic} />
                <TouchableOpacity style={styles.btn}>
                    <FontAwesome5
                        name="camera-retro"
                        size={24}
                        color={Colors.WHITE}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfileImage

const styles = StyleSheet.create({
    container: {
        height: verticalScale(70),
        backgroundColor: Colors.THEME
    },
    imageWrapper: {
        position: 'relative',
        marginStart: moderateScale(20),
    },
    profilePic: {
        height: verticalScale(100),
        width: moderateScale(100),
        borderRadius: scale(100),
    },
    btn: {
        position: 'absolute',
        bottom: -8,
        left: moderateScale(50),
        backgroundColor: Colors.THEME_TRANSPARENT,
        padding: scale(10),
        borderRadius: scale(100),
        borderWidth: 1,
        borderColor: Colors.WHITE,
    }
})
