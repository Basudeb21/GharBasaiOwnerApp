import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    ToastAndroid,
    TouchableOpacity,
    View,
    Platform,
} from 'react-native';
import AdverticementHeader from '../../components/AdverticementHeader';
import AuthInput from '../../components/AuthInput';
import Colors from '../../constants/Colors';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Register from '../../api/auth/Register';
import AddLogin from '../../local-store/AddLogin';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../../constants/NavigationStrings';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../redux-storage/AuthSlice';

const RegisterScreen = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userConfirmPassword, setUserConfirmPassword] = useState('');
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handelRegister = async () => {
        if (!userName || !userEmail || !userPassword || !userConfirmPassword) {
            ToastAndroid.show('Data field should not be empty', ToastAndroid.SHORT);
            return;
        }

        if (userPassword !== userConfirmPassword) {
            ToastAndroid.show("Passwords don't match", ToastAndroid.SHORT);
            return;
        }

        const result = await Register(userName, userEmail, userPassword, userConfirmPassword);

        if (!result) {
            ToastAndroid.show('Email or Username already exist.', ToastAndroid.SHORT);
            return;
        }

        if (result.status === true) {
            ToastAndroid.show(result.message || 'Registered successfully!', ToastAndroid.SHORT);
            await AddLogin(userName, userEmail);
            dispatch(setCredentials({ user: { username: userName, email: userEmail }, token: null }));
            return;
        }

        if (result.errors) {
            Object.keys(result.errors).forEach((field) => {
                result.errors[field].forEach((msg) => {
                    ToastAndroid.show(msg, ToastAndroid.SHORT);
                });
            });
        } else {
            ToastAndroid.show(result.message || 'Registration failed', ToastAndroid.SHORT);
        }
    };

    const handelLoginClick = () => {
        navigation.navigate(NavigationStrings.LOGIN);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView style={{ flex: 1 }}>
                <AdverticementHeader />
                <AuthInput
                    type="text"
                    placeholder="Enter username"
                    value={userName}
                    onChangeText={setUserName}
                />
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
                <AuthInput
                    type="password"
                    placeholder="Reenter password"
                    value={userConfirmPassword}
                    onChangeText={setUserConfirmPassword}
                />

                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn} onPress={handelRegister}>
                        <Text style={styles.btnTxt}>Register</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={handelLoginClick}>
                    <Text style={styles.loginTxt}>
                        already have an account? <Text style={styles.link}>Login</Text>
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    btnContainer: {
        paddingHorizontal: moderateScale(20),
        marginTop: verticalScale(20),
        marginBottom: verticalScale(20),
    },
    btn: {
        backgroundColor: Colors.THEME,
        width: '100%',
        paddingVertical: verticalScale(10),
        borderRadius: scale(20),
    },
    btnTxt: {
        fontSize: scale(20),
        alignSelf: 'center',
        fontWeight: '600',
        color: Colors.WHITE,
    },
    loginTxt: {
        alignSelf: 'center',
    },
    link: {
        color: Colors.BLUE,
        textDecorationLine: 'underline',
    },
});
