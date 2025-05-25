import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AdverticementHeader from '../../components/AdverticementHeader'
import AuthInput from '../../components/AuthInput'
import { useNavigation } from '@react-navigation/native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Colors from '../../constants/Colors'
import NavigationStrings from '../../constants/NavigationStrings'

const LoginScreen = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const navigation = useNavigation();

    const handelSignupClick = () => {
        navigation.navigate(NavigationStrings.REGISTER)
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView style={{ flex: 1 }}>
                <AdverticementHeader />

                <AuthInput
                    type="email"
                    placeholder="Enter email"
                    value={userEmail}
                    onChangeText={setUserEmail}
                />
                <AuthInput
                    type="password"
                    placeholder="Enter password"
                    value={userPassword}
                    onChangeText={setUserPassword}
                />

                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn} >
                        <Text style={styles.btnTxt}>Login</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={handelSignupClick}>
                    <Text style={styles.loginTxt}>don't have an account? <Text style={styles.link}>Signup</Text></Text>
                </TouchableOpacity>

            </ScrollView>

        </KeyboardAvoidingView>

    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F5F5F5',
        paddingVertical: 20,
        alignItems: 'center',
    },
    btnContainer: {
        paddingHorizontal: moderateScale(20),
        marginTop: verticalScale(20),
        marginBottom: verticalScale(20)
    },
    btn: {
        backgroundColor: Colors.THEME,
        width: "100%",
        paddingVertical: verticalScale(10),
        borderRadius: scale(20)
    },
    btnTxt: {
        fontSize: scale(20),
        alignSelf: "center",
        fontWeight: "600",
        color: Colors.WHITE
    },
    loginTxt: {
        alignSelf: "center"
    },
    link: {
        color: Colors.BLUE,
        textDecorationLine: "underline"
    }
})