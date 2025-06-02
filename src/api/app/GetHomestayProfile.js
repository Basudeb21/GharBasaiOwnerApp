import axios from "axios";
import Api from "../common/Api";
import EncryptedStorage from "react-native-encrypted-storage";

const GetHomestayProfile = async () => {
    const token = await EncryptedStorage.getItem('auth_token');
    console.log("Token being used...:", token);
    try {
        const response = await axios.get(`${Api.BASE_URL}rooms_management/edit_room`, {
            headers: {
                Authorization: `Bearer ${token}`
            }

        });
        return response.data.data.homestay_profile;
    } catch (error) {
        if (error.response) {
            return error.response;
        }
        console.error("unabled to register....", {
            message: error.message,
            status: error?.response,
            data: error?.response,
        });
        return null;
    }
}

export default GetHomestayProfile