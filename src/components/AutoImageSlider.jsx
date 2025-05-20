import { StyleSheet, ImageBackground, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AutoImageSlider = () => {
    const images = [
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsfGVufDB8fDB8fHww'
    ];

    const [index, setIndex] = useState(0);

    const goNext = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const goPrev = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    useEffect(() => {
        const interval = setInterval(goNext, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <ImageBackground
            source={{ uri: images[index] }}
            style={styles.background}
            resizeMode="cover"
            onError={(e) => console.log("Image failed to load", e.nativeEvent)}
        >
            <TouchableOpacity style={styles.leftButton} onPress={goPrev}>
                <Icon name="chevron-left" size={25} color={Colors.WHITE} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.rightButton} onPress={goNext}>
                <Icon name="chevron-right" size={25} color={Colors.WHITE} />
            </TouchableOpacity>
        </ImageBackground>
    );
};
export default AutoImageSlider

const styles = StyleSheet.create({
    background: {
        justifyContent: 'center',
        width: "100%",
        height: scale(200)

    },
    leftButton: {
        position: 'absolute',
        top: '50%',
        left: 20,
        transform: [{ translateY: -20 }],
        backgroundColor: Colors.TRANSPARENT,
        borderRadius: scale(100),
        padding: 5,
    },
    rightButton: {
        position: 'absolute',
        top: '50%',
        right: 20,
        transform: [{ translateY: -20 }],
        backgroundColor: Colors.TRANSPARENT,
        borderRadius: scale(100),
        padding: 5,
    },
})