import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../constants/Colors';

const BarGraph = ({ delux, luxary, normal, label = "loading..." }) => {
    return (
        <View>
            <View style={styles.container}>
                <View style={[styles.inner, { height: delux, backgroundColor: Colors.DELUX_ROOM }]} />
                <View style={[styles.inner, { height: luxary, backgroundColor: Colors.LUXURY_ROOM }]} />
                <View style={[styles.inner, { height: normal, backgroundColor: Colors.NORMAL_ROOM }]} />
            </View>
            <Text style={styles.label}>{label.toUpperCase()}</Text>
        </View>
    );
};

export default BarGraph;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    inner: {
        width: moderateScale(16),
        margin: scale(0),
        borderTopRightRadius: scale(4),
        borderTopLeftRadius: scale(4),
        marginEnd: moderateScale(1)
    },
    label: {
        alignSelf: "center",
        color: Colors.DISABLED_NAVIGATION_COLOR,
        fontWeight: "500",
        fontSize: scale(10)
    }
});
