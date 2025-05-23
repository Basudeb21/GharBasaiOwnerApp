import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import Strings from '../constants/Strings'
import Colors from '../constants/Colors'
import { scale, verticalScale } from 'react-native-size-matters'






const ProfileBasicInfoCard = () => {
    return (
        <View style={styles.customerCard}>
            <View style={styles.cardMain}>
                <View style={styles.profileImage}>
                    <FontAwesome
                        name="user"
                        size={28}
                        color="#fff"
                    />
                </View>
                <View style={styles.profileData}>
                    <Text style={styles.userName}>{Strings.DEFAULT_USER_NAME}</Text>
                    <Text style={styles.userPhone}>{Strings.DEFAULT_MOBILE_NUMBER}</Text>
                    <Text style={styles.memberSince}>{Strings.DEFAULT_REG_DATE}</Text>
                </View>
            </View>

            <Text style={styles.profileCompletionText}>{Strings.DEFAULT_PROGRESS}</Text>

            <View style={styles.progressBarContainer}>
                <View style={styles.progressBarFill} />
            </View>

            <Text style={styles.progressNote}>
                {Strings.DEFAULT_PROFILE_CARD_MSG}
            </Text>
        </View>
    )
}

export default ProfileBasicInfoCard


const styles = StyleSheet.create({
    profileMainContainer: {
        height: verticalScale(150),
        backgroundColor: Colors.THEME,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: -1,
    },
    customerCard: {
        backgroundColor: Colors.WHITE,
        borderRadius: 12,
        padding: 16,
        marginHorizontal: 16,
        marginTop: 16,
        elevation: 3,
        shadowColor: Colors.CREDENTIAL_ACTIVE_TEXT,
        shadowOpacity: 0.1,
        shadowRadius: 6,
    },
    cardMain: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: Colors.ACTIVE_NAVIGATION_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileData: {
        marginLeft: 12,
        flex: 1,
    },
    userName: {
        fontSize: scale(16),
        fontWeight: 'bold',
        color: Colors.CREDENTIAL_ACTIVE_TEXT,
    },
    userPhone: {
        fontSize: 14,
        color: Colors.CREDENTIAL_ACTIVE_TEXT,
        marginTop: 2,
    },
    memberSince: {
        fontSize: 12,
        color: '#888',
        marginTop: 2,
    },
    profileCompletionText: {
        marginTop: 16,
        fontSize: 14,
        color: Colors.CREDENTIAL_ACTIVE_TEXT,
        fontWeight: '500',
    },
    progressBarContainer: {
        marginTop: 8,
        height: 6,
        backgroundColor: Colors.DEACTIVE,
        borderRadius: 3,
        width: '100%',
    },
    progressBarFill: {
        width: '0%',
        height: '100%',
        backgroundColor: Colors.ACTIVE_NAVIGATION_COLOR,
        borderRadius: 3,
    },
    progressNote: {
        fontSize: 12,
        color: Colors.DARK_GRAY,
        marginTop: 8,
    },
    menuCard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: verticalScale(20)
    },
    cardContainer: {
        width: '30%',
        aspectRatio: 1,
        backgroundColor: Colors.WHITE,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginVertical: verticalScale(10),
        shadowColor: Colors.CREDENTIAL_ACTIVE_TEXT,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    iconContainer: {
        marginBottom: 8,
    },
    label: {
        textAlign: 'center',
        fontSize: 12,
        color: Colors.DISABLED_TXT,
    },


})