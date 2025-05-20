import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Entypo from 'react-native-vector-icons/dist/Entypo'

const Aminity = ({ label, onRemove }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity style={styles.iconContainer} onPress={onRemove}>
                <Entypo
                    name="cross"
                    size={14}
                    color={Colors.THEME}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Aminity

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.THEME_TRANSPARENT,
        alignSelf: "flex-start",
        paddingHorizontal: moderateScale(13),
        paddingVertical: verticalScale(5),
        borderRadius: scale(100),
        marginStart: moderateScale(5),
        flexDirection: "row",
        marginTop: verticalScale(5),
        borderWidth: scale(2),
        borderColor: Colors.THEME
    },
    label: {
        fontSize: scale(15),
        fontWeight: "500",
        color: Colors.WHITE,
    },
    iconContainer: {
        marginStart: moderateScale(10),
        backgroundColor: Colors.WHITE,
        padding: scale(2),
        borderRadius: 100
    }
})