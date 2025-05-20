import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const OthersCard = ({ icon, label, onPress }) => {

    return (
        <TouchableOpacity style={styles.cardContainer} onPress={onPress} activeOpacity={0.7}>
            <View style={styles.iconWrapper}>
                {icon}
            </View>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

export default OthersCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.WHITE,
        marginHorizontal: moderateScale(20),
        marginVertical: verticalScale(10)
    },
    text: {

    },
    cardContainer: {
        width: '30%',
        aspectRatio: 1,
        backgroundColor: Colors.WHITE,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginVertical: verticalScale(10),
        shadowColor: Colors.CREDENTIAL_ACTIVE_TEXT,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    label: {
        textAlign: 'center',
        fontSize: 12,
        color: Colors.DISABLED_TXT,
    },

})