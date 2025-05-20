import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../constants/Colors'
import Fontisto from 'react-native-vector-icons/dist/Fontisto'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import Entypo from 'react-native-vector-icons/dist/Entypo'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import FontAwesome6 from 'react-native-vector-icons/dist/FontAwesome6'


import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Spacer from '../../../components/Spacer'
import BR from '../../../components/BR'

const RoomDetailsCard = () => {
    return (
        <>
            <View style={styles.card}>
                <View style={styles.detailsContainer}>
                    <Fontisto
                        name="hotel-alt"
                        color={Colors.FADE}
                        size={14}
                        style={styles.backIcon}
                    />
                    <Text style={styles.data}>Radisson Hotel New York Times Square</Text>
                </View>
                <Spacer height={verticalScale(10)} />
                <View style={styles.detailsContainer}>
                    <MaterialIcons
                        name="summarize"
                        color={Colors.FADE}
                        size={14}
                        style={styles.backIcon}
                    />
                    <Text style={styles.data}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</Text>
                </View>
                <Spacer height={verticalScale(10)} />
                <View style={styles.detailsContainer}>
                    <MaterialIcons
                        name="description"
                        color={Colors.FADE}
                        size={14}
                        style={styles.backIcon}
                    />
                    <Text style={styles.data}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe autem facere officia fuga quo cum similique corporis veniam commodi eos, excepturi necessitatibus odit doloremque. Commodi odit labore voluptates itaque tenetur.</Text>
                </View>

                <Spacer height={verticalScale(10)} />
                <View style={styles.detailsContainer}>
                    <Entypo
                        name="location"
                        color={Colors.FADE}
                        size={14}
                        style={styles.backIcon}
                    />
                    <Text style={styles.data}>#60, Akansha Arcade, Trikamdas Road, Near to Cinestar Cinema, Kandivali(west)</Text>
                </View>

                <Spacer height={verticalScale(10)} />
                <View style={styles.detailsContainer}>
                    <Ionicons
                        name="earth"
                        color={Colors.FADE}
                        size={14}
                        style={styles.backIcon}
                    />
                    <Text style={styles.data}>Latitude : 6.058621676557348,<BR />Longitude : 80.22813253136285</Text>
                </View>
                <Spacer height={verticalScale(10)} />

                <View style={styles.container}>
                    <View style={styles.detailsContainer}>
                        <Ionicons
                            name="logo-whatsapp"
                            color={Colors.FADE}
                            size={14}
                            style={styles.backIcon}
                        />
                        <Text style={styles.data}>9876543210</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <Entypo
                            name="email"
                            color={Colors.FADE}
                            size={14}
                            style={styles.backIcon}
                        />
                        <Text style={styles.data}>user@gmail.com</Text>
                    </View>
                </View>
            </View>

            <View style={styles.card}>
                <View style={styles.container}>
                    <View style={styles.detailsContainer}>
                        <AntDesign
                            name="eye"
                            color={Colors.FADE}
                            size={14}
                            style={styles.backIcon}
                        />
                        <Text style={styles.data}>Show</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <FontAwesome
                            name="money"
                            color={Colors.FADE}
                            size={14}
                            style={styles.backIcon}
                        />
                        <Text style={styles.data}>2,210</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <FontAwesome6
                            name="people-group"
                            color={Colors.FADE}
                            size={14}
                            style={styles.backIcon}
                        />
                        <Text style={styles.data}>6 (max)</Text>
                    </View>
                </View>
                <Spacer height={10} />
                <View style={styles.container}>
                    <View style={styles.detailsContainer}>
                        <MaterialIcons
                            name="bathroom"
                            color={Colors.FADE}
                            size={14}
                            style={styles.backIcon}
                        />
                        <Text style={styles.data}>2</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <Ionicons
                            name="bed-outline"
                            color={Colors.FADE}
                            size={14}
                            style={styles.backIcon}
                        />
                        <Text style={styles.data}>2</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <Fontisto
                            name="date"
                            color={Colors.FADE}
                            size={14}
                            style={styles.backIcon}
                        />
                        <Text style={styles.data}>21.02.25 - Present</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default RoomDetailsCard

const styles = StyleSheet.create({
    card: {
        padding: scale(20),
        marginHorizontal: moderateScale(10),
        marginBottom: verticalScale(10),
        backgroundColor: Colors.CARD,
        borderRadius: scale(8),
        elevation: scale(2),
        marginTop: verticalScale(-20)
    },
    detailsContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    data: {
        fontSize: scale(12),
        marginStart: moderateScale(10),
        color: Colors.FADE
    }
})