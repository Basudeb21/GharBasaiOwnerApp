import Colors from '../constants/Colors';

export const getRoomTypeData = () => [
    {
        name: 'Deluxe Rooms',
        count: 30,
        color: Colors.DELUX_ROOM,
        type: 'deluxe'
    },
    {
        name: 'Luxury Rooms',
        count: 30,
        color: Colors.LUXURY_ROOM,
        type: 'luxury'
    },
    {
        name: 'Normal Rooms',
        count: 30,
        color: Colors.NORMAL_ROOM,
        type: 'normal'
    },
];

export const getBookingStatusData = () => [
    {
        name: 'Paid Rooms',
        count: 30,
        color: Colors.PAID_ROOM,
        type: 'paid'
    },
    {
        name: 'Unpaid Rooms',
        count: 4,
        color: Colors.UNPAID_ROOM,
        type: 'unpaid'
    },
    {
        name: 'Vacant Rooms',
        count: 50,
        color: Colors.VACENT_ROOM,
        type: 'vacent'
    },
];

export const getRoomStatusData = (type) => {
    const data = {
        deluxe: {
            occupied: 18,
            available: 12,
            total: 30,
            name: 'Deluxe Rooms'
        },
        luxury: {
            occupied: 22,
            available: 8,
            total: 30,
            name: 'Luxury Rooms'
        },
        normal: {
            occupied: 15,
            available: 15,
            total: 30,
            name: 'Normal Rooms'
        },
        paid: {
            occupied: 18,
            available: 12,
            total: 30,
            name: 'Paid Rooms'
        },
        unpaid: {
            occupied: 22,
            available: 8,
            total: 30,
            name: 'Unpaid Rooms'
        },
        vacent: {
            occupied: 15,
            available: 15,
            total: 30,
            name: 'Vacant Rooms'
        }
    };

    return data[type] || {
        occupied: 0,
        available: 0,
        total: 0,
        name: 'Unknown'
    };
};