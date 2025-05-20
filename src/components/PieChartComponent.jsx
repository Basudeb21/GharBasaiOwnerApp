// components/PieChartComponent.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../constants/Colors';

const PieChartComponent = ({
    title,
    data,
    onItemPress,
    showTotal = false,
    totalCount = 0,
    chartWidth = 0.55,
    chartHeight = 190
}) => {
    const screenWidth = Dimensions.get('window').width;

    const chartConfig = {
        backgroundGradientFrom: '#1E2923',
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: '#08130D',
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2,
        barPercentage: 0.5,
        useShadowColorFromDataset: false,
    };

    return (
        <View style={styles.container}>
            {title && <Text style={styles.title}>{title}</Text>}
            {showTotal && <Text style={styles.subtitle}>Total: {totalCount}</Text>}
            <View style={styles.contentContainer}>
                <View style={styles.chartWrapper}>
                    <PieChart
                        data={data}
                        width={moderateScale(screenWidth * chartWidth)}
                        height={verticalScale(chartHeight)}
                        chartConfig={chartConfig}
                        accessor="count"
                        backgroundColor="transparent"
                        paddingLeft="35"
                        absolute
                        avoidFalseZero
                        hasLegend={false}
                        style={styles.chartStyle}
                    />
                </View>
                <View style={styles.statsContainer}>
                    {data.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.statItem}
                            onPress={() => onItemPress?.(item.type)}
                            activeOpacity={onItemPress ? 0.7 : 1}
                        >
                            <View style={[styles.colorBox, { backgroundColor: item.color }]} />
                            <Text style={styles.statText}>
                                {item.name}: {item.count}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
        padding: scale(15),
        borderRadius: moderateScale(10),
        marginHorizontal: moderateScale(10),
        elevation: 3,
        marginVertical: verticalScale(10),
    },
    contentContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    chartWrapper: {
        width: '58%',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
    },
    chartStyle: {
        marginLeft: moderateScale(-10),
    },
    statsContainer: {
        width: '40%',
        paddingLeft: moderateScale(5),
    },
    title: {
        fontSize: moderateScale(16),
        fontWeight: 'bold',
        marginBottom: verticalScale(10),
        color: Colors.FADE,
        textAlign: 'center',
        width: '100%',
    },
    subtitle: {
        fontSize: moderateScale(14),
        marginBottom: verticalScale(20),
        color: Colors.DISABLED_NAVIGATION_COLOR,
        textAlign: 'center',
    },
    statItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: verticalScale(8),
        padding: moderateScale(8),
        borderRadius: moderateScale(5),
    },
    colorBox: {
        width: moderateScale(12),
        height: moderateScale(12),
        borderRadius: moderateScale(4),
        marginRight: moderateScale(10),
    },
    statText: {
        fontSize: moderateScale(12),
        color: Colors.DISABLED_NAVIGATION_COLOR,
    },
});

export default PieChartComponent;