import React from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { scale, verticalScale } from 'react-native-size-matters';

const DialougeBox = ({ visible, onClose, onOpen, title = "loading...", content = "loading..." }) => {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.dialog}>
                    <Text style={styles.title}>{title}</Text>
                    <Text>{content}</Text>

                    <View style={styles.btnGrp}>
                        <TouchableOpacity onPress={onClose} style={styles.btn}>
                            <Text style={{ color: Colors.BLUE }}>OK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onClose} style={styles.btn}>
                            <Text style={{ color: Colors.CLOSE }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default DialougeBox;

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: Colors.TRANSPARENT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialog: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: scale(10),
        padding: scale(20),
    },
    title: {
        fontSize: scale(18),
        fontWeight: 'bold',
        marginBottom: verticalScale(10),
    },
    btn: {
        marginTop: verticalScale(20),
        padding: scale(10),
        borderRadius: scale(5),
        alignItems: 'center',
        width: "48%"
    },
    btnGrp: {
        flexDirection: "row",
        justifyContent: "space-around"
    }
});
