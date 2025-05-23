import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Colors from '../constants/Colors'

const CurrentTravelers = ({ avatars }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headTxt}>Current Guests</Text>
            <ScrollView
                horizontal={true}
                style={styles.card}
                showsHorizontalScrollIndicator={false}
            >
                {avatars.map((avatar, index) => (
                    <View key={index} style={styles.avatarContainer}>
                        <Image
                            source={{ uri: avatar.uri }}
                            style={styles.avatar}
                        />
                        <Text style={styles.name}>{avatar.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default CurrentTravelers

const styles = StyleSheet.create({
    container: {
        margin: scale(10),
        backgroundColor: Colors.WHITE,
        borderRadius: scale(18),
        paddingVertical: verticalScale(10),
        elevation: scale(12),
    },
    headTxt: {
        color: Colors.DISABLED_NAVIGATION_COLOR,
        marginStart: moderateScale(10),
        marginBottom: verticalScale(10),
        fontWeight: "700"
    },
    card: {
        paddingHorizontal: moderateScale(10),

    },
    avatarContainer: {
        marginEnd: moderateScale(8)
    },
    avatar: {
        width: moderateScale(38),
        height: verticalScale(38),
        borderRadius: scale(100),
        elevation: scale(10),
        borderWidth: scale(2),
        borderColor: Colors.BLACK,
        marginEnd: moderateScale(5)
    },
    name: {
        marginTop: verticalScale(5),
        fontSize: scale(10),
        color: Colors.BLACK,
        textAlign: 'center',
        marginRight: moderateScale(10)

    }
})