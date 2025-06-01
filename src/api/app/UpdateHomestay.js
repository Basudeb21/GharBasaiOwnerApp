import axios from "axios";
import Api from "../common/Api";

const UpdateHomestay = async ({ homestay_name, address, phone, email }) => {
    try {
        const response = await axios.post(`${Api.BASE_URL}/update_room/47`, {
            user_email,
            user_password
        });
        return response.data;
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

export default UpdateHomestay