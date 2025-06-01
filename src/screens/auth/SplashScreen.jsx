import { View, Image, StyleSheet, Animated } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Text } from 'react-native-elements';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Images from '../../constants/Images';
import Colors from '../../constants/Colors';

const SplashScreen = () => {
    const [progress, setProgress] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(progress, {
            toValue: 100,
            duration: 4000, // Run only once, smoothly in 4 seconds
            useNativeDriver: false,
        }).start();
    }, []);

    const widthInterpolated = progress.interpolate({
        inputRange: [0, 100],
        outputRange: ["0%", "100%"],
    });

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={Images.LOGO} style={styles.logo} resizeMode="contain" />
            </View>

            <View style={styles.loadingContainer}>
                <View style={styles.loadingBar}>
                    <Animated.View style={[styles.completeLoadingBar, { width: widthInterpolated }]} />
                </View>

                <Text style={styles.loadingTxt}>Loading exclusive deals</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.LOGIN_IMG_CONTAINER,
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 7,
    },
    loadingContainer: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 280,
        height: 280,
    },
    loadingBar: {
        height: verticalScale(5),
        width: "70%",
        backgroundColor: Colors.FADE,
        borderRadius: 100,
        overflow: 'hidden',
    },
    completeLoadingBar: {
        height: verticalScale(5),
        backgroundColor: Colors.THEME,
        borderRadius: 100,
    },
    loadingTxt: {
        marginTop: verticalScale(10),
        fontSize: scale(18),
        fontWeight: "800",
    },
});

export default SplashScreen;
