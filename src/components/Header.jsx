import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import Colors from '../constants/Colors'
const Header = ({ title }) => {
    const navigation = useNavigation();
    const handleBackPress = () => {
        navigation.pop();
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={handleBackPress}
                style={styles.backButton}
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            >
                <AntDesign
                    name="arrowleft"
                    color={Colors.WHITE}
                    size={24}
                    style={styles.backIcon}
                />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingVertical: verticalScale(10),
        paddingHorizontal: moderateScale(10),
        alignItems: 'center',
        backgroundColor: Colors.THEME,
        elevation: scale(2)
    },
    backIcon: {
        marginRight: moderateScale(10),
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: scale(20),
        fontWeight: "600",
        color: Colors.WHITE
    },
})