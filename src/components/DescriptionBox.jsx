import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import { moderateScale, verticalScale, scale } from 'react-native-size-matters';

const DescriptionBox = ({ label, placeholder, value, setValue }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={Colors.PLACEHOLDER}
                multiline
                numberOfLines={6}
                textAlignVertical="top"
                onChangeText={setValue}
                value={value}
                style={styles.textArea}
            />
        </View>
    );
};

export default DescriptionBox;

const styles = StyleSheet.create({
    container: {
        marginVertical: verticalScale(10),
        paddingHorizontal: moderateScale(10),
    },
    label: {
        marginBottom: verticalScale(5),
        color: Colors.LABEL,
        fontWeight: '500',
    },
    textArea: {
        backgroundColor: Colors.WHITE,
        borderRadius: scale(8),
        padding: scale(10),
        minHeight: verticalScale(100),
        fontSize: scale(14),
    },
});
