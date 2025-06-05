import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Colors from '../constants/Colors';

const DropdownWithLabel = ({ label, items, placeholder, value, onChangeValue }) => {
    const [open, setOpen] = useState(false);
    const [localItems, setLocalItems] = useState(items);

    // Update localItems if items prop changes
    useEffect(() => {
        setLocalItems(items);
    }, [items]);

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
                zIndex={9999} // helpful to avoid overlapping issues
                zIndexInverse={9999}
            />
        </View>
    );
};

export default DropdownWithLabel;

const styles = StyleSheet.create({
    container: {
        marginVertical: verticalScale(8),
        width: '48%',
        marginStart: moderateScale(10),
        zIndex: 9999,
    },
    label: {
        marginBottom: verticalScale(5),
        color: Colors.LABEL,
        fontWeight: '500',
        marginStart: moderateScale(5),
    },
    dropdown: {
        backgroundColor: Colors.WHITE,
    },
    dropdownBox: {
        backgroundColor: Colors.WHITE,
    },
});
