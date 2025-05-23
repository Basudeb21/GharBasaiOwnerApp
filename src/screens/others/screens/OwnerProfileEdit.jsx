import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../../components/Header'
import ProfileImage from '../../../components/ProfileImage'
import Colors from '../../../constants/Colors'
import OwnerDetailsInput from '../../../components/OwnerDetailsInput'

const OwnerProfileEdit = () => {
    return (
        <View style={styles.container}>
            <Header title={"Edit Owner Details"} />
            <ProfileImage />
            <OwnerDetailsInput />
        </View>
    )
}

export default OwnerProfileEdit

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.PAGE_COLOR
    }
})