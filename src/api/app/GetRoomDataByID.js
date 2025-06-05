import axios from 'axios';
import Api from '../common/Api';

const GetRoomDataByID = async ({ id }) => {
    try {
        const response = await axios.get(`${Api.BASE_URL}rooms_management/rooms_show/${id}`);
        if (response.data.status && response.data.RoomCategory) {
            return response.data.RoomCategory;
        }
        return [];
    } catch (error) {
        console.error("Error fetching room types:", error);
        return [];
    }
};

export default GetRoomDataByID;