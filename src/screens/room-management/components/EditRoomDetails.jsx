import {
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    View,
    Platform,
} from 'react-native';
import React from 'react';
import FeaturedImg from '../micro-comps/FeaturedImg';
import Header from '../../../components/Header';
import RoomDetailsInputSection from './RoomDetailsInputSection';
import { verticalScale } from 'react-native-size-matters';
import ImageAdderSection from './ImageAdderSection';

const EditRoomDetails = () => {
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
                    <RoomDetailsInputSection />
                    <ImageAdderSection />
                </ScrollView>
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
});
