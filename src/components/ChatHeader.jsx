import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Images from '../constants/Images'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Colors from '../constants/Colors'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import { useNavigation } from '@react-navigation/native'

const ChatHeader = () => {
    const navigation = useNavigation();
    const handleBackPress = () => {
        navigation.pop();
    };
    return (
        <View style={styles.card}>
            <TouchableOpacity
                onPress={handleBackPress}
                style={styles.backButton}
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            >
                <AntDesign
                    name="arrowleft"
                    color={Colors.WHITE}
                    size={24}
                    style={styles.backIcon}
                />
            </TouchableOpacity>
            <Image source={{ uri: Images.AVATAR_ONE }} style={styles.img} />
            <Text style={styles.name}>MS Dhoni</Text>
        </View>
    )
}

export default ChatHeader

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.THEME,
        paddingVertical: verticalScale(10),
        flexDirection: "row",
        alignItems: "center"
    },
    backIcon: {
        marginStart: moderateScale(10)
    },
    img: {
        height: verticalScale(40),
        width: moderateScale(40),
        borderRadius: scale(100),
        marginStart: moderateScale(20),
        borderWidth: scale(2),
        borderColor: Colors.WHITE
    },
    name: {
        marginStart: moderateScale(20),
        fontSize: scale(20),
        fontWeight: "500",
        color: Colors.WHITE
    }

})