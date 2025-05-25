import EncryptedStorage from 'react-native-encrypted-storage';

const GetLoginHelp = async () => {
    try {
        const session = await EncryptedStorage.getItem("user_session");
        if (session !== null) {
            return JSON.parse(session);
        }
        return null;
    } catch (error) {
        console.log("Error reading session:", error);
        return null;
    }
};

export default GetLoginHelp;
