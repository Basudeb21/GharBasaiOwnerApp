import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TouchableWithoutFeedback } from 'react-native';
import Colors from '../constants/Colors';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Strings from '../constants/Strings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ButtonBox from './ButtonBox';

const ExpencesCard = ({
    date = "Apr\n25\n2025",
    expenceName = "Security Money",
    expenceBy = "Basudeb Paul Chowdhury",
    ammount = "1200",
    onViewPress = () => { },
    onEditPress = () => { },
    onDeletePress = () => { }
}) => {
    const [showOptions, setShowOptions] = useState(false);

    const handleOption = (callback) => {
        setShowOptions(false);
        callback();
    };

    // Dynamic container style: raise zIndex and elevation when menu open
    const containerStyle = [
        styles.container,
        showOptions && { zIndex: 9999, elevation: 20 }
    ];

    return (
        <>
            <View style={containerStyle}>
                {/* DATE */}
                <View style={styles.dateConatiner}>
                    <Text style={styles.date}>{date}</Text>
                </View>

                {/* INFO */}
                <View style={styles.infoContainer}>
                    <Text style={styles.expenceName}>{expenceName}</Text>
                    <Text style={styles.expenceBy}>{expenceBy}</Text>
                    <Text style={styles.ammount}>{Strings.RS_SYMBOL + " " + ammount}</Text>
                </View>

                {/* THREE DOTS */}
                <View style={styles.rightContainer}>
                    <TouchableOpacity style={styles.dotsButton} onPress={() => setShowOptions(prev => !prev)}>
                        <MaterialIcons name="menu" size={24} color={Colors.BLACK} />
                    </TouchableOpacity>

                    {showOptions && (
                        <View style={styles.menuContainer}>
                            <ButtonBox
                                onView={() => handleOption(onViewPress)}
                                onEdit={() => handleOption(onEditPress)}
                                onDelete={() => handleOption(onDeletePress)}
                            />
                        </View>
                    )}
                </View>
            </View>

            {/* Overlay to catch taps outside menu and dismiss */}
            {showOptions && (
                <TouchableWithoutFeedback onPress={() => setShowOptions(false)}>
                    <View style={styles.overlay} />
                </TouchableWithoutFeedback>
            )}
        </>
    );
};

export default ExpencesCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        marginHorizontal: moderateScale(20),
        marginTop: verticalScale(18),
        flexDirection: "row",
        borderRadius: scale(15),
        elevation: scale(8),
        paddingEnd: moderateScale(4),
        alignItems: 'stretch', // Ensures children stretch vertically
    },

    dateConatiner: {
        backgroundColor: Colors.THEME,
        padding: scale(12),
        borderTopLeftRadius: scale(15),
        borderBottomLeftRadius: scale(15),
        flex: 1.2,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'stretch', // Stretches to full height of parent
    },


    infoContainer: {
        flex: 5.8,
        marginStart: moderateScale(15),
        marginVertical: verticalScale(10)
    },
    date: {
        color: Colors.WHITE,
        fontWeight: "600",
        alignSelf: "center"
    },
    expenceName: {
        fontSize: scale(14),
        fontWeight: "700",
    },
    expenceBy: {
        marginTop: verticalScale(5)
    },
    ammount: {},
    rightContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        position: 'relative',
        padding: moderateScale(10),
    },

    dotsButton: {
        padding: moderateScale(6),
        backgroundColor: Colors.LIGHT_GRAY,
        borderRadius: scale(6),
    },

    menuContainer: {
        position: 'absolute',
        top: verticalScale(60),
        right: 0,
        backgroundColor: Colors.WHITE,
        borderRadius: scale(8),
        padding: scale(5),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 1000,
    },

    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'transparent',
        zIndex: 900,
    }
});
