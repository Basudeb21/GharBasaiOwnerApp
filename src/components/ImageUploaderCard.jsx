import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import Colors from '../constants/Colors'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'

const ImageUploaderCard = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View>
                <MaterialIcons
                    name="add-photo-alternate"
                    size={40}
                    color={Colors.WHITE}
                />
            </View>
            <Text style={styles.txt}>click here to add room images</Text>
        </TouchableOpacity>
    )
}

export default ImageUploaderCard

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        padding: scale(20),
        backgroundColor: Colors.THEME_TRANSPARENT,
        borderWidth: scale(3),
        borderColor: Colors.THEME,
        borderRadius: scale(12),
        justifyContent: "center",
        alignItems: "center",
        marginTop: verticalScale(30)
    },
    txt: {
        fontSize: scale(16),
        color: Colors.WHITE,
        fontWeight: "600"
    }
})