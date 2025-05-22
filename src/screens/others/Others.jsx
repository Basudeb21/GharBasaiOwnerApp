import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import OthersCard from '../../components/OthersCard'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Colors from '../../constants/Colors';
import RateApp from '../../components/RateApp';
import NavigationStrings from '../../constants/NavigationStrings';
import { useNavigation } from '@react-navigation/native';

const Others = () => {
    const navigation = useNavigation();

    const options = [
        { icon: <FontAwesome5 name="user-cog" size={24} color={Colors.OTHER_ICON} />, label: "User Management" },
        { icon: <Fontisto name="holiday-village" size={24} color={Colors.OTHER_ICON} />, label: "Homestay Management" },
        { icon: <MaterialCommunityIcons name="bag-personal" size={24} color={Colors.OTHER_ICON} />, label: "Tour Management" },
        { icon: <MaterialIcons name="miscellaneous-services" size={24} color={Colors.OTHER_ICON} />, label: "Service Management" },
        { icon: <FontAwesome5 name="blog" size={24} color={Colors.OTHER_ICON} />, label: "Blog Management" },
        { icon: <Fontisto name="photograph" size={24} color={Colors.OTHER_ICON} />, label: "Galary Management" },
        { icon: <MaterialIcons name="attach-money" size={24} color={Colors.OTHER_ICON} />, label: "Expense Management" },
        { icon: <Fontisto name="room" size={24} color={Colors.OTHER_ICON} />, label: "Room Management" },
        { icon: <AntDesign name="wechat" size={24} color={Colors.OTHER_ICON} />, label: "Chat" },



    ];
    return (
        <View>
            <View style={styles.menuCard}>
                {options.map((item, index) => (
                    <OthersCard
                        key={index}
                        icon={item.icon}
                        label={item.label}
                        onPress={() => {
                            switch (item.label) {
                                case "Chat":
                                    navigation.navigate(NavigationStrings.CHAT_STACK, {
                                        screen: NavigationStrings.CHAT_SCREEN,
                                    });
                                    break;
                                case "Expense Management":
                                    navigation.navigate(NavigationStrings.EXPENCE_STACK, {
                                        screen: NavigationStrings.EXPENCES,
                                    });
                                case "Homestay Management":
                                    navigation.navigate(NavigationStrings.HOME_STAY_MANAGEMENT_STACK, {
                                        screen: NavigationStrings.HOME_STAY_MANAGEMENT
                                    })
                            }

                        }}
                    />
                ))}
            </View>
            <RateApp />
            <TouchableOpacity style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontWeight: "bold" }}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Others

const styles = StyleSheet.create({
    menuCard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: verticalScale(20),
        marginHorizontal: moderateScale(20)
    },
})