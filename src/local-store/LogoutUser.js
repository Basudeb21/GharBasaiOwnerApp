import EncryptedStorage from 'react-native-encrypted-storage';

const LogoutUser = async () => {
    try {
        await EncryptedStorage.removeItem("user_session");
    } catch (error) {
        console.log("Error clearing user session:", error);
    }
}

export default LogoutUser