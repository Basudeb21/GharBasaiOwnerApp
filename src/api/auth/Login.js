import axios from "axios";
import Api from "../common/Api";

const Login = async (user_email, user_password) => {
    try {
        const response = await axios.post(`${Api.BASE_URL}login`, {
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

export default Login