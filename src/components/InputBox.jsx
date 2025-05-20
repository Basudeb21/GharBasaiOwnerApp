import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { moderateScale, scale } from 'react-native-size-matters';
import Colors from '../constants/Colors';

const InputBox = () => {
    const [value, onChangeText] = useState('');
    return (
        <View>
            <TextInput
                placeholder='Enter your email'
                placeholderTextColor={Colors.PLACEHOLDER}
                editable

                numberOfLines={4}
                maxLength={35}
                onChangeText={text => onChangeText(text)}
                value={value}
                style={styles.textInput}

            />

        </View>
    )
}

export default InputBox

const styles = StyleSheet.create({
    textInput: {
        padding: scale(10),
        borderRadius: scale(12),
        backgroundColor: Colors.WHITE,
        width: moderateScale(260),
        marginStart: moderateScale(10)
    },
})