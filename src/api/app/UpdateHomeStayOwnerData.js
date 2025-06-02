import axios from "axios";
import Api from "../common/Api";
import EncryptedStorage from 'react-native-encrypted-storage';

const UpdateHomestayOwnerData = async ({ username, email, contact_number, first_name, last_name }) => {
    const token = await EncryptedStorage.getItem('auth_token');
    console.log("Token being used:", token);

    try {
        const response = await axios.post(
            `${Api.BASE_URL}update_profile/homestay_owner_updateProfile`,
            {
                username,
                email,
                contact_number,
                first_name,
                last_name
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }
            }
        );
        console.log("DATA ADDED");
        return response.data;
    } catch (error) {
        if (error.response) {
            console.log("Error response:", error.response);
            return error.response;
        }
        console.error("Unable to update profile", {
            message: error.message,
            status: error?.response?.status,
            data: error?.response?.data,
        });
        return null;
    }
};

export default UpdateHomestayOwnerData;
