import axios from "axios";
import Api from "../common/Api";
import EncryptedStorage from "react-native-encrypted-storage";
import { ToastAndroid } from "react-native";

const AddingNewRoom = async ({ room_category, room_no, rent, beds, bath, bath_type, description, maximum_guest, room_floor }) => {
    const token = await EncryptedStorage.getItem('auth_token');
    console.log("Token being used:", token);

    try {
        const response = await axios.post(`${Api.BASE_URL}rooms_management/rooms_store`, {
            room_category,
            room_no,
            rent,
            beds,
            bath,
            bath_type,
            description,
            maximum_guest,
            room_floor
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        );
        ToastAndroid.show("Data added successfully", ToastAndroid.SHORT);
        console.log("Response data:", response.data);
        return true;
    } catch (error) {
        ToastAndroid.show("Error to add data", ToastAndroid.SHORT);

        if (error.response) {
            console.log("API error response:", error.response.data);
            return false;
        } else {
            console.error("Network error:", error.message);
        }
        return null;
    }

}

export default AddingNewRoom