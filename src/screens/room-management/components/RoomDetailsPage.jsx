import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AutoImageSlider from '../../../components/AutoImageSlider'
import Header from '../../../components/Header'
import RoomDetailsCard from './RoomDetailsCard'
import FacilityCard from '../../../components/FacilityCard'
import { verticalScale } from 'react-native-size-matters'
import BottmAction from '../../../components/BottmAction'
import Colors from '../../../constants/Colors'

const RoomDetailsPage = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.getParent()?.setOptions({
            tabBarStyle: { display: 'none' }
        });

        return () => {
            navigation.getParent()?.setOptions({
                tabBarStyle: {
                    paddingVertical: verticalScale(5)
                }
            });
        };
    }, [navigation]);

    return (
        <View style={styles.pageContainer}>
            <Header title={"Hotel Details View"} theme='BASIC' />
            <View style={styles.contentContainer}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <AutoImageSlider />
                    <RoomDetailsCard />
                    <FacilityCard />
                </ScrollView>
                <View style={styles.btm}>
                    <BottmAction />
                </View>
            </View>
        </View>
    )
}

export default RoomDetailsPage

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    contentContainer: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: verticalScale(1),
    },
    btm: {
        height: verticalScale(60),
        justifyContent: 'center',
        backgroundColor: Colors.THEME,
        elevation: 10,
    },
});
