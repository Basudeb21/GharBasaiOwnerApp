import EncryptedStorage from 'react-native-encrypted-storage';


const AddLogin = async (username, email) => {
    await EncryptedStorage.setItem(
        "user_session",
        JSON.stringify({
            username: username,
            email: email
        })
    );
}

export default AddLogin