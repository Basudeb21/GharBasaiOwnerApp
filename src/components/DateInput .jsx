// components/DateInput.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../constants/Colors';

const DateInput = ({ label, date, onChange }) => {
    const [showPicker, setShowPicker] = useState(false);

    const showDatePicker = () => setShowPicker(true);
    const hideDatePicker = () => setShowPicker(false);

    const onDateChange = (event, selectedDate) => {
        hideDatePicker();
        if (selectedDate) {
            onChange(selectedDate);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity onPress={showDatePicker} style={styles.dateBox}>
                <Text style={styles.dateText}>
                    {date ? date.toDateString() : 'Select Date'}
                </Text>
            </TouchableOpacity>
            {showPicker && (
                <DateTimePicker
                    value={date || new Date()}
                    mode="date"
                    display="default"
                    onChange={onDateChange}
                />
            )}
        </View>
    );
};

export default DateInput;

const styles = {
    container: {
        marginTop: verticalScale(10),
        width: "48%"
    },
    label: {
        marginStart: moderateScale(15),
        marginBottom: verticalScale(5),
        color: Colors.LABEL,
        fontWeight: "500"
    },
    dateBox: {
        padding: scale(10),
        borderRadius: scale(8),
        backgroundColor: Colors.WHITE,
        marginStart: moderateScale(10)
    },
    dateText: {
        color: Colors.PLACEHOLDER
    }
};
