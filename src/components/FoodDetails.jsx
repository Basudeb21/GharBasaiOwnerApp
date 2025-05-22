import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { moderateScale, scale } from 'react-native-size-matters';
import Colors from '../constants/Colors';
import CheckBox from '@react-native-community/checkbox'; // ✅ Correct import
import MultiInputBox from './MultiInputBox';
import InputWithLabel from './InputWithLabel';
import Spacer from './Spacer';

const FoodDetails = ({ course = "Breakfast" }) => {
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.headTxt}>{course}</Text>
                <View style={styles.checkBoxContainer}>
                    <Text style={styles.label}>provided?</Text>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkBox}
                        tintColors={{ true: Colors.THEME, false: Colors.FADE }}
                    />
                </View>
            </View>
            <MultiInputBox label={"Food Items"} />
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginEnd: moderateScale(10) }}>
                <InputWithLabel label={"Start"} placeholder={"Enter start time"} />
                <InputWithLabel label={"End"} placeholder={"Enter end time"} />
            </View>

        </View>
    );
};

export default FoodDetails;

const styles = StyleSheet.create({
    container: {
        padding: scale(10),
        backgroundColor: Colors.PAGE_COLOR,
    },
    head: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headTxt: {
        fontSize: scale(20),
        fontWeight: '700',
        marginBottom: scale(10),
        color: Colors.THEME,
    },
    checkBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkBox: {
        marginRight: scale(10),
    },
    label: {
        fontSize: scale(14),
        color: Colors.BLACK,
    },
});
