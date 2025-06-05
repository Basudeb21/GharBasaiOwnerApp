import axios from "axios";
import Api from "../common/Api";
import EncryptedStorage from "react-native-encrypted-storage";

const GetAllExpences = async () => {
    const token = await EncryptedStorage.getItem('auth_token');
    console.log(token);

    try {
        const response = await axios.get(`${Api.BASE_URL}expenses`, {
            headers: {
                Authorization: `Bearer ${token}`
            }

        });

        // console.log("HELLO", response.data.status);
        if (response.data.status) {
            return response.data.Expense
        }


    } catch (error) {
        if (error.response) {
            return error.response;
        }
        console.error("unabled to fetch....", {
            message: error.message,
            status: error?.response,
            data: error?.response,
        });
        return null;
    }
}

export default GetAllExpences