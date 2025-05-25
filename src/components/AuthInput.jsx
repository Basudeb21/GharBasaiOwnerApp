import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Colors from '../constants/Colors';

const AuthInput = ({
    type = 'text',
    placeholder = '',
    value,
    onChangeText,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const getKeyboardType = () => {
        switch (type) {
            case 'email':
                return 'email-address';
            case 'phone':
                return 'phone-pad';
            default:
                return 'default';
        }
    };
    const isSecure = type === 'password';
    return (
        <TextInput
            style={[styles.input, isFocused && styles.inputFocused]} // Apply focused style conditionally
            placeholder={placeholder}
            placeholderTextColor="#999"
            secureTextEntry={isSecure}
            value={value}
            onChangeText={onChangeText}
            keyboardType={getKeyboardType()}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            autoCapitalize="none"
            autoCorrect={false}
        />
    );
};
export default AuthInput;

const styles = StyleSheet.create({
    inputFocused: {
        borderColor: Colors.THEME,
        shadowColor: '#4A90E2',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    input: {
        width: '90%',
        borderRadius: moderateScale(10),
        borderWidth: 1,
        borderColor: '#ccc',
        fontSize: moderateScale(14),
        color: '#333',
        paddingVertical: 0,
        marginVertical: verticalScale(8),
        paddingHorizontal: moderateScale(10),
        backgroundColor: '#fff',
        paddingVertical: verticalScale(12),
        alignSelf: 'center',

    },
});
