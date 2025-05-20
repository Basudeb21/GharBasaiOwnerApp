import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import InputBox from './InputBox'
import Colors from '../constants/Colors'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'

const ChatBottom = () => {
    return (
        <View style={styles.container}>
            <InputBox />
            <TouchableOpacity style={styles.btn}>
                <FontAwesome
                    name="send"
                    size={20}
                    color={Colors.THEME_TRANSPARENT}
                />
            </TouchableOpacity>
        </View>
    )
}

export default ChatBottom

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.THEME,
        paddingVertical: verticalScale(10),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    btn: {
        marginEnd: moderateScale(20),
        backgroundColor: Colors.WHITE,
        padding: scale(8),
        borderRadius: scale(100)

    }
})