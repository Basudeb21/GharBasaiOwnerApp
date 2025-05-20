// components/DropdownWithLabel.js
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Colors from '../constants/Colors'; // adjust path based on your structure

const DropdownWithLabel = ({ label, items, placeholder, value, onChangeValue }) => {
    const [open, setOpen] = useState(false);
    const [localItems, setLocalItems] = useState(items);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={localItems}
                setOpen={setOpen}
                setValue={onChangeValue}
                setItems={setLocalItems}
                placeholder={placeholder}
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownBox}
            />
        </View>
    );
};

export default DropdownWithLabel;

const styles = StyleSheet.create({
    container: {
        marginTop: verticalScale(10),
        zIndex: 999,
        width: '44%',
        marginStart: moderateScale(15)

    },
    label: {
        marginBottom: verticalScale(5),
        color: Colors.LABEL,
        fontWeight: '500',
        marginStart: moderateScale(5)
    },
    dropdown: {
        backgroundColor: Colors.WHITE,

    },
    dropdownBox: {
        backgroundColor: Colors.WHITE,

    },
});
