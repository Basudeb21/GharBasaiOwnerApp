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
import { useNavigation } from '@react-navigation/native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../../constants/Colors';
import NavigationStrings from '../../constants/NavigationStrings';
import Login from '../../api/auth/Login';
import { useDispatch } from 'react-redux';
import { setCredentials } from "../../redux-storage/AuthSlice";
import EncryptedStorage from "react-native-encrypted-storage";
import { useSelector } from 'react-redux';



const LoginScreen = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    console.log('User from Redux:', user);
    const handelSignupClick = () => {
        navigation.navigate(NavigationStrings.REGISTER);
    };

    const handleLogin = async () => {
        const result = await Login(userEmail, userPassword);

        if (result?.status === 'success') {
            const userData = result.data;
            const token = result.token;


            console.log("user_data : ", userData);
            console.log("token : ", token);



            await EncryptedStorage.setItem('auth_token', token);
            await EncryptedStorage.setItem('user_session', JSON.stringify(userData));

            dispatch(setCredentials({
                token: token,
                user: userData
            }));

            ToastAndroid.show("Login successful!", ToastAndroid.SHORT);
            return;
        }

        ToastAndroid.show(result?.message || 'Login failed', ToastAndroid.SHORT);
    };


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
                    <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                        <Text style={styles.btnTxt}>Login</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={handelSignupClick}>
                    <Text style={styles.loginTxt}>
                        don't have an account? <Text style={styles.link}>Signup</Text>
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;

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
