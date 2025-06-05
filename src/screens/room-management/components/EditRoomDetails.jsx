import {
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    View,
    Platform,
    TouchableOpacity,
    Text
} from 'react-native';
import React, { useState } from 'react';
import FeaturedImg from '../micro-comps/FeaturedImg';
import Header from '../../../components/Header';
import RoomDetailsInputSection from './RoomDetailsInputSection';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../../../constants/Colors';
import { useRoute } from '@react-navigation/native';

const EditRoomDetails = () => {
    const route = useRoute();
    const { roomData } = route.params;

    const [roomNo, setRoomNo] = useState('');
    const [roomRent, setRoomRent] = useState('');
    const [beds, setBeds] = useState('');
    const [baths, setBaths] = useState('');
    const [maxGuest, setMaxGuest] = useState('');
    const [summery, setSummery] = useState('');
    const [roomType, setRoomType] = useState('');
    const [bathType, setBathType] = useState('');
    const [description, setDescription] = useState('');


    return (
        <View style={{ flex: 1 }}>
            {/* Fixed Header */}
            <Header title={'Edit HomeStay Details'} />

            {/* KeyboardAvoiding + Scrollable Content */}
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollViewContent}
                    keyboardShouldPersistTaps="handled"
                >
                    <FeaturedImg />
                    <RoomDetailsInputSection
                        data={roomData}
                        roomNo={roomNo}
                        setRoomNo={setRoomNo}
                        roomRent={roomRent}
                        setRoomRent={setRoomRent}
                        beds={beds}
                        setBeds={setBeds}
                        baths={baths}
                        setBaths={setBaths}
                        maxGuest={maxGuest}
                        setMaxGuest={setMaxGuest}
                        roomType={roomType}
                        setRoomType={setRoomType}
                        bathType={bathType}
                        setBathType={setBathType}
                        description={description}
                        setDescription={setDescription}
                    />
                </ScrollView>
                <View style={styles.bottomBar}>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: Colors.BLUE }]}>
                        <Text style={styles.btnTxt}>save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: Colors.DELETE }]}>
                        <Text style={styles.btnTxt}>close</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};

export default EditRoomDetails;

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        paddingBottom: verticalScale(22)
    },

    bottomBar: {
        backgroundColor: Colors.THEME,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    btn: {
        marginVertical: verticalScale(13),
        paddingVertical: verticalScale(4),
        paddingHorizontal: moderateScale(30),
        borderRadius: 100,
        borderWidth: scale(2),
        borderColor: Colors.WHITE
    },
    btnTxt: {
        color: Colors.WHITE,
        fontSize: scale(18),
        fontWeight: "600"
    }
});
