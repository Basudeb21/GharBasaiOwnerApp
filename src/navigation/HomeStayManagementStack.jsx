import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationStrings from '../constants/NavigationStrings';
import HomeStayManagement from '../screens/others/screens/HomeStayManagement';
import ProfileManagemengt from '../screens/others/screens/home-stay-management/ProfileManagemengt';
import FoodManagement from '../screens/others/screens/home-stay-management/FoodManagement';
import CategotyManagement from '../screens/others/screens/home-stay-management/CategotyManagement';
import AddOnsManagement from '../screens/others/screens/home-stay-management/AddOnsManagement';
import KYCManagement from '../screens/others/screens/home-stay-management/KYCManagement';
const HomeStayManagementStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NavigationStrings.HOME_STAY_MANAGEMENT} component={HomeStayManagement} />
            <Stack.Screen name={NavigationStrings.HOMESTAY_PROFILE_MANAGEMENT} component={ProfileManagemengt} />
            <Stack.Screen name={NavigationStrings.FOOD_MANAGEMENT} component={FoodManagement} />
            <Stack.Screen name={NavigationStrings.CATEGORY_MANAGEMENT} component={CategotyManagement} />
            <Stack.Screen name={NavigationStrings.ADD_ONS_MANAGEMENT} component={AddOnsManagement} />
            <Stack.Screen name={NavigationStrings.KYC_MANAGEMENT} component={KYCManagement} />




        </Stack.Navigator>
    )
}

export default HomeStayManagementStack