import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationStrings from '../constants/NavigationStrings';
import { ChatScreen } from '../screens/chat';
import ChatArea from '../screens/chat/components/ChatArea';
const ChatStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NavigationStrings.CHAT_AREA} component={ChatArea} />
        </Stack.Navigator>
    )
}

export default ChatStack