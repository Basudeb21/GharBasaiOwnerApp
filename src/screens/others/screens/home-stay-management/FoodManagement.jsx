import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FoodDetails from '../../../../components/FoodDetails'
import Header from '../../../../components/Header'
import Spacer from '../../../../components/Spacer'

const FoodManagement = () => {
    return (
        <View>
            <Header title={"Food Management"} />
            <ScrollView>
                <FoodDetails course='Breakfast' />
                <Spacer height={40} />
                <FoodDetails course='Lunch' />
                <Spacer height={40} />
                <FoodDetails course='Tiffin' />
                <Spacer height={40} />
                <FoodDetails course='Dinner' />
                <Spacer height={80} />


            </ScrollView>
        </View>
    )
}

export default FoodManagement

const styles = StyleSheet.create({})