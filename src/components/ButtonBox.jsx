import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { moderateScale, scale } from 'react-native-size-matters'

const ButtonBox = ({ onView, onEdit }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.btn, styles.viewBtn]} onPress={onView}>
                <Text style={styles.btnText}>View</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.editBtn]} onPress={onEdit}>
                <Text style={styles.btnText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.deleteBtn]} onPress={onEdit}>
                <Text style={styles.btnText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
};


export default ButtonBox

const styles = StyleSheet.create({
    container: {
        minWidth: scale(100),
        backgroundColor: Colors.WHITE,
        borderRadius: scale(8),
        padding: scale(5),
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    btn: {
        paddingVertical: moderateScale(6),
        paddingHorizontal: moderateScale(16),
        borderRadius: scale(6),
        marginVertical: moderateScale(4),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewBtn: {
        backgroundColor: Colors.BLUE,
    },
    editBtn: {
        backgroundColor: Colors.YELLOW,
    },
    deleteBtn: {
        backgroundColor: Colors.DELETE,
    },
    btnText: {
        fontSize: scale(12),
        color: Colors.WHITE,
        fontWeight: '600',
    }
})