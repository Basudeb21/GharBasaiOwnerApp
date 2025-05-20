import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Images from '../constants/Images'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Colors from '../constants/Colors'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../constants/NavigationStrings'

const ChatUserCard = () => {
    const navigation = useNavigation();
    const navHnadler = () => {
        navigation.navigate(NavigationStrings.CHAT_STACK,
            { screen: NavigationStrings.CHAT_AREA }
        )
    }

    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, vel.";
    return (
        <TouchableOpacity style={styles.card} onPress={navHnadler}>
            <View style={styles.imgContainer}>
                <Image source={{ uri: Images.AVATAR_ONE }} style={styles.img} />

            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.name}>MS Dhoni</Text>
                <Text style={styles.msg}>
                    {text.length > 35 ? `${text.slice(0, 35)}...` : text}
                </Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.time}>10:20</Text>
                <Ionicons
                    name="checkmark-done-outline"
                    size={24}
                    color={Colors.DISABLED_NAVIGATION_COLOR}
                />
            </View>
        </TouchableOpacity>
    )
}

export default ChatUserCard

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        paddingVertical: verticalScale(12),
        paddingHorizontal: moderateScale(10),
        backgroundColor: Colors.WHITE
    },
    img: {
        height: verticalScale(50),
        width: moderateScale(50),
        borderRadius: scale(100),
        alignSelf: "flex-start",
        borderWidth: scale(2),
        borderColor: Colors.THEME_TRANSPARENT
    },
    imgContainer: {
        flex: 2
    },
    detailsContainer: {
        flex: 7

    },
    name: {
        fontSize: scale(16),
        fontWeight: "500"
    },
    msg: {
        fontSize: scale(12),
        color: Colors.DISABLED_NAVIGATION_COLOR
    },
    infoContainer: {
        flex: 1
    },
    time: {
        fontSize: scale(12),
        fontWeight: "500",
        color: Colors.DISABLED_NAVIGATION_COLOR,
    }
})