import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import { scale } from 'react-native-size-matters';
import Svg, { Circle } from 'react-native-svg';

const SmallPieChart = ({ percentage, label = "Loading...", color, size = 108 }) => {
    const radius = size / 3;
    const strokeWidth = size / 13;
    const circumference = 2 * Math.PI * radius;
    const progress = percentage / 100;
    const strokeDashoffset = circumference * (1 - progress);
    const center = size / 2;

    return (
        <View style={[styles.wrapper, { width: size }]}>
            <View style={{ width: size, height: size, justifyContent: 'center', position: 'relative' }}>
                <Svg width={size} height={size}>
                    <Circle
                        stroke={Colors.DEACTIVE}
                        fill="none"
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth}
                    />
                    <Circle
                        stroke={color}
                        fill="none"
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth}
                        strokeDasharray={`${circumference} ${circumference}`}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        rotation="-90"
                        origin={`${center},${center}`}
                    />
                </Svg>

                <View style={[styles.centerTextWrapper, { width: size, height: size }]}>
                    <Text style={{ fontSize: scale(size / 10), fontWeight: 'bold', color: Colors.BLACK }}>
                        {percentage}%
                    </Text>
                </View>
            </View>

            <Text style={styles.labelText}>{label}</Text>
        </View>
    );
};

export default SmallPieChart;

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
    },
    centerTextWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelText: {
        fontSize: scale(10),
        color: Colors.DISABLED_NAVIGATION_COLOR,
        fontWeight: '600',
        marginTop: scale(2),
    },
});
