import axios from "axios";
import Api from "../common/Api";

const Register = async (username, email, password, password_confirmation) => {
    try {
        const response = await axios.post(`${Api.BASE_URL}register/store`, {
            username,
            email,
            password,
            password_confirmation
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            return error.response.data;
        }
        console.error("unabled to register....", {
            message: error.message,
            status: error?.response?.status,
            data: error?.response?.data,
        });
        return null;
    }
}

export default Register