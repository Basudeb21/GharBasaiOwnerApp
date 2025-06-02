import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../components/Header'
import ProfileImage from '../../../components/ProfileImage'
import Colors from '../../../constants/Colors'
import OwnerDetailsInput from '../../../components/OwnerDetailsInput'
import { useSelector } from 'react-redux';

const OwnerProfileEdit = () => {
    const { user } = useSelector((state) => state.auth);
    console.log("USER OBJ : ", user);

    const [username, setUsername] = useState(user?.username || '');
    const [email, setEmail] = useState(user?.email || '');
    const [contact_number, setContactNumber] = useState(user?.contact_number || '');
    const [first_name, setFirstName] = useState(user?.first_name || '');
    const [last_name, setLastName] = useState(user?.last_name || '');
    const [middle_name, setMiddleName] = useState('');

    return (
        <View style={styles.container}>
            <Header title={"Edit Owner Details"} />
            <ProfileImage img={user?.image} />
            <OwnerDetailsInput
                username={username}
                setUsername={setUsername}
                email={email}
                setEmail={setEmail}
                contact_number={contact_number}
                setContactNumber={setContactNumber}
                first_name={first_name}
                setFirstName={setFirstName}
                middle_name={middle_name}
                setMiddleName={setMiddleName}
                last_name={last_name}
                setLastName={setLastName}
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