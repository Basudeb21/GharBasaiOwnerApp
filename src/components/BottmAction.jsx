import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { useNavigation } from '@react-navigation/native';

import NavigationStrings from '../constants/NavigationStrings'

const BottmAction = () => {
    const navigator = useNavigation();
    const handleEdit = () => {
        navigator.navigate(NavigationStrings.ROOM_DETAILS_STACK, {
            screen: NavigationStrings.ROOM_DETAILS_EDIT
        })
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={handleEdit}>
                <Text style={styles.btnTxt}>Edit Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Go To Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BottmAction

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
    },
    btn: {
        backgroundColor: Colors.YELLOW,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    btnTxt: {
        color: 'white',
        fontWeight: 'bold',
    },
});
