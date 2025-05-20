import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Images from '../../../constants/Images'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Colors from '../../../constants/Colors'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'

const FeaturedImg = () => {
    return (
        <ImageBackground source={{ uri: Images.HOTEL_FEATURED }} style={styles.img}>
            <Text style={styles.txt}>Featured Image</Text>
            <TouchableOpacity style={styles.editBtn}>
                <FontAwesome5
                    name="camera-retro"
                    size={24}
                />
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default FeaturedImg

const styles = StyleSheet.create({
    img: {
        width: "100%",
        height: verticalScale(180),
        justifyContent: "center",
        position: 'relative',
    },
    txt: {
        color: Colors.WHITE,
        fontSize: scale(12),
        backgroundColor: Colors.THEME_TRANSPARENT,
        alignSelf: "center",
        padding: scale(12),
        borderRadius: scale(18)
    },
    editBtn: {
        position: 'absolute',
        bottom: verticalScale(5),
        right: moderateScale(10),
        backgroundColor: Colors.WHITE,
        padding: scale(10),
        borderRadius: scale(100),
        elevation: 4,
    }
});
