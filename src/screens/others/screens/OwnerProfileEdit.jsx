import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../../components/Header'
import ProfileImage from '../../../components/ProfileImage'
import Colors from '../../../constants/Colors'
import OwnerDetailsInput from '../../../components/OwnerDetailsInput'
import { useSelector } from 'react-redux';

const OwnerProfileEdit = () => {
    const { user } = useSelector((state) => state.auth);
    console.log("USER OBJ : ", user);
    return (
        <View style={styles.container}>
            <Header title={"Edit Owner Details"} />
            <ProfileImage img={user?.image} />
            <OwnerDetailsInput
                username={user?.username}
                email={user?.email}
                contact_number={user?.contact_number}
                first_name={user?.first_name}
                last_name={user?.last_name}
            />
        </View>
    )
}

export default OwnerProfileEdit

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.PAGE_COLOR
    }
})