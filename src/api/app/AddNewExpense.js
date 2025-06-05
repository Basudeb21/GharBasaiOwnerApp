import axios from "axios";
import Api from "../common/Api";
import EncryptedStorage from "react-native-encrypted-storage";
import { ToastAndroid } from "react-native";

const AddeNewExpenseAPI = async ({ expense_date, amount, expense_by, items_name, description }) => {
    const token = await EncryptedStorage.getItem('auth_token');
    console.log("Token being used:", token);

    try {
        const response = await axios.post(`${Api.BASE_URL}expenses/store`, {
            expense_date, amount, expense_by, items_name, description
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

export default AddeNewExpenseAPI