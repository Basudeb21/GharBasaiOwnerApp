import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const InputWithLabel = ({ label, placeholder, type = "text", value, onChangeText }) => {
    const getKeyboardType = () => {
        switch (type) {
            case 'email':
                return 'email-address';
            case 'number':
                return 'numeric';
            case 'phone':
                return 'phone-pad';
            default:
                return 'default';
        }
    };

    const isSecure = type === 'password';

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={Colors.PLACEHOLDER}
                keyboardType={getKeyboardType()}
                secureTextEntry={isSecure}
                onChangeText={onChangeText}
                value={value}
                style={styles.textInput}
            />
        </View>
    )
}

export default InputWithLabel

const styles = StyleSheet.create({
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
    textInput: {
        paddingStart: scale(10),
        borderRadius: scale(8),
        backgroundColor: Colors.WHITE,
        width: moderateScale(160),
        marginStart: moderateScale(10)
    },
});
