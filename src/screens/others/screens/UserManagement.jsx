import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CurrentTravelers from '../../../components/CurrentTravelers'
import Images from '../../../constants/Images';

const UserManagement = () => {
    const avatars = [
        { uri: Images.AVATAR_ONE, name: "Alice" },
        { uri: Images.AVATAR_TWO, name: "Bob" },
        { uri: Images.AVATAR_THREE, name: "Charlie" },
        { uri: Images.AVATAR_FOUR, name: "Diana" },
        { uri: Images.AVATAR_FIVE, name: "Ethan" },
        { uri: Images.AVATAR_SIX, name: "Fiona" },
        { uri: Images.AVATAR_SEVEN, name: "Nil" },
        { uri: Images.AVATAR_EIGHT, name: "Jhon" },
        { uri: Images.AVATAR_NINE, name: "Aira" },
        { uri: Images.AVATAR_TEN, name: "Sofiya" }
    ];
    return (
        <View>
            <CurrentTravelers avatars={avatars} />

        </View>
    )
}

export default UserManagement

const styles = StyleSheet.create({})