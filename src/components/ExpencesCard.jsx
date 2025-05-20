import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Strings from '../constants/Strings';
import Spacer from './Spacer';

const ExpencesCard = ({
    date = "Apr\n25\n2025",
    expenceName = "Security Money",
    expenceBy = "Basudeb Paul Chowdhury",
    ammount = "1200",
}) => {

    return (
        <View style={styles.container}>
            <View style={styles.dateConatiner}>
                <Text style={styles.date}>{date}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.expenceName}>{expenceName}</Text>
                <Text style={styles.expenceBy}>{expenceBy}</Text>
                <Text style={styles.ammount}>{Strings.RS_SYMBOL + " " + ammount}</Text>
            </View>
            <View style={styles.rightContainer}>
                <TouchableOpacity
                    style={[styles.btn, { backgroundColor: Colors.EDIT }]}>
                    <Text style={styles.btnTxt}>view</Text>
                </TouchableOpacity>
                <Spacer height={5} />
                <TouchableOpacity
                    style={[styles.btn, { backgroundColor: Colors.DELETE }]}>
                    <Text style={styles.btnTxt}>edit</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default ExpencesCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        marginHorizontal: moderateScale(20),
        marginTop: verticalScale(18),
        flexDirection: "row",
        alignItems: "center",
        borderRadius: scale(15),
        elevation: scale(8),
        paddingEnd: moderateScale(4),
    },
    dateConatiner: {
        backgroundColor: Colors.THEME,
        padding: scale(12),
        borderTopLeftRadius: scale(15),
        borderBottomLeftRadius: scale(15),
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    infoContainer: {
        flex: 6,
        marginStart: moderateScale(15),

    },
    paymentContainer: {
        flex: 3

    },
    date: {
        color: Colors.WHITE,
        fontWeight: "600",
        alignSelf: "center"
    },

    expenceName: {
        fontSize: scale(14),
        fontWeight: "700",
    },
    expenceBy: {
        marginTop: verticalScale(5)
    },
    ammount: {

    },
    paymetTxt: {
        alignSelf: "flex-start",
        paddingVertical: verticalScale(4),
        paddingHorizontal: moderateScale(12),
        borderRadius: scale(100),
        color: Colors.WHITE,
        fontSize: scale(11)
    },
    btn: {
        backgroundColor: Colors.DEACTIVE,
        alignSelf: "center",
        paddingVertical: verticalScale(4),
        paddingHorizontal: moderateScale(14),
        marginEnd: verticalScale(10),
        borderRadius: scale(6)
    },
    btnTxt: {
        color: Colors.WHITE
    },
})