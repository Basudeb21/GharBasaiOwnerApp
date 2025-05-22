import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Colors from '../../../constants/Colors';
import OthersCard from '../../../components/OthersCard';
import NavigationStrings from '../../../constants/NavigationStrings';
import { useNavigation } from '@react-navigation/native';

const HomeStayManagement = () => {
    const navigation = useNavigation();
    const options = [
        { icon: <Octicons name="home" size={24} color={Colors.OTHER_ICON} />, label: "Profile Management" },
        { icon: <MaterialIcons name="category" size={24} color={Colors.OTHER_ICON} />, label: "Category Management" },
        { icon: <MaterialCommunityIcons name="more" size={24} color={Colors.OTHER_ICON} />, label: "Add Ons Management" },
        { icon: <MaterialCommunityIcons name="food-turkey" size={24} color={Colors.OTHER_ICON} />, label: "Food Management" },
        { icon: <MaterialIcons name="document-scanner" size={24} color={Colors.OTHER_ICON} />, label: "KYC Management" },
        { icon: <MaterialIcons name="document-scanner" size={24} color={Colors.OTHER_ICON} />, label: "KYC Management" },
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
                                case "Profile Management":
                                    navigation.navigate(NavigationStrings.HOMESTAY_PROFILE_MANAGEMENT);
                                    break;
                                case "Food Management":
                                    navigation.navigate(NavigationStrings.FOOD_MANAGEMENT);
                                    break;
                                case "Category Management":
                                    navigation.navigate(NavigationStrings.CATEGORY_MANAGEMENT);
                                    break;
                                case "Add Ons Management":
                                    navigation.navigate(NavigationStrings.ADD_ONS_MANAGEMENT);
                                    break;
                                case "KYC Management":
                                    navigation.navigate(NavigationStrings.KYC_MANAGEMENT);
                                    break;

                            }

                        }}
                    />
                ))}
            </View>
            <TouchableOpacity style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontWeight: "bold" }}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeStayManagement

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