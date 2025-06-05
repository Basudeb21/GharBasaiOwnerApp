import axios from "axios";
import Api from "../common/Api";
import EncryptedStorage from "react-native-encrypted-storage";

const GetAllRooms = async () => {
    const token = await EncryptedStorage.getItem('auth_token');
    // console.log("Token being used...:", token);
    try {
        const response = await axios.get(`${Api.BASE_URL}rooms_management/rooms`, {
            headers: {
                Authorization: `Bearer ${token}`
            }

        });
        // console.log(response.data.status);

        // if (response.data.status == true)

        return response.data.status == true ? response.data : "Unable to fetch rooms";
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

export default GetAllRooms