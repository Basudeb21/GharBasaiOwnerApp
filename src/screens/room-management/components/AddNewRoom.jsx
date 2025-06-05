import {
    KeyboardAvoidingView,
    StyleSheet,
    View,
    Platform,
    TouchableOpacity,
    Text,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import FeaturedImg from '../micro-comps/FeaturedImg';
import Header from '../../../components/Header';
import RoomDetailsInputSection from './RoomDetailsInputSection';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../../../constants/Colors';
import AddingNewRoom from '../../../api/app/AddingNewRoom';
import GetRoomTypes from '../../../api/app/GetRoomTypes';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AddNewRoom = () => {
    const [roomNo, setRoomNo] = useState('');
    const [roomRent, setRoomRent] = useState('');
    const [beds, setBeds] = useState('');
    const [baths, setBaths] = useState('');
    const [maxGuest, setMaxGuest] = useState('');
    const [summery, setSummery] = useState('');
    const [roomType, setRoomType] = useState('');
    const [bathType, setBathType] = useState('');
    const [description, setDescription] = useState('');
    const [roomTypeOptions, setRoomTypeOptions] = useState([]);

    useEffect(() => {
        const fetchRoomTypes = async () => {
            try {
                const categories = await GetRoomTypes();
                const formattedOptions = categories.map(({ id, name }) => ({
                    label: name,
                    value: id.toString(),
                }));
                console.log("Room Type Options:", formattedOptions);
                setRoomTypeOptions(formattedOptions);

            } catch (error) {
                console.error("Failed to fetch room types:", error);
            }
        };

        fetchRoomTypes();
    }, []);

    const handleAddNewHome = async () => {
        const payload = {
            room_category: roomType,
            room_no: roomNo,
            rent: roomRent,
            beds: beds,
            bath: baths,
            bath_type: bathType,
            description: description,
            maximum_guest: maxGuest,
            room_floor: "1st",
        };

        const result = await AddingNewRoom(payload);
        if (result) {
            setRoomNo('');
            setRoomRent('');
            setBeds('');
            setBaths('');
            setBathType('');
            setDescription('');
            setMaxGuest('');
            setSummery('');
            setRoomType('');
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <Header title={'Edit HomeStay Details'} />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
            >
                <KeyboardAwareScrollView
                    contentContainerStyle={styles.scrollViewContent}
                    keyboardShouldPersistTaps="handled"
                    enableOnAndroid={true}
                    extraScrollHeight={100}
                >
                    <FeaturedImg />
                    <RoomDetailsInputSection
                        roomNo={roomNo} setRoomNo={setRoomNo}
                        roomRent={roomRent} setRoomRent={setRoomRent}
                        beds={beds} setBeds={setBeds}
                        baths={baths} setBaths={setBaths}
                        maxGuest={maxGuest} setMaxGuest={setMaxGuest}
                        summery={summery} setSummery={setSummery}
                        roomType={roomType} setRoomType={setRoomType}
                        bathType={bathType} setBathType={setBathType}
                        description={description} setDescription={setDescription}
                        roomTypeOptions={roomTypeOptions}
                    />
                </KeyboardAwareScrollView>

                <View style={styles.bottomBar}>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: Colors.BLUE }]} onPress={handleAddNewHome}>
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

export default AddNewRoom;

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        paddingBottom: verticalScale(22),
    },
    bottomBar: {
        backgroundColor: Colors.THEME,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    btn: {
        marginVertical: verticalScale(13),
        paddingVertical: verticalScale(4),
        paddingHorizontal: moderateScale(30),
        borderRadius: 100,
        borderWidth: scale(2),
        borderColor: Colors.WHITE,
    },
    btnTxt: {
        color: Colors.WHITE,
        fontSize: scale(18),
        fontWeight: '600',
    },
});
