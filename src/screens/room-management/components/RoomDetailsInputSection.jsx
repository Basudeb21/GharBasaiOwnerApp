import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import InputWithLabel from '../../../components/InputWithLabel'
import DropdownWithLabel from '../../../components/DropdownWithLabel'
import DescriptionBox from '../../../components/DescriptionBox '
import MultiInputBox from '../../../components/MultiInputBox'

const RoomDetailsInputSection = () => {
    const [roomType, setRoomType] = useState(null);
    const [roomSts, setRoomSts] = useState(null);

    const roomTypes = [
        { label: 'Deluxe', value: 'deluxe' },
        { label: 'Primium', value: 'primium' },
        { label: 'Normal', value: 'normal' },
    ]
    const roomStatus = [
        { label: 'Show', value: 'show' },
        { label: 'Hide', value: 'hide' },
    ]
    return (
        <View>
            <View style={{ flexDirection: "row" }}>
                <InputWithLabel label={"Rent/Night"} placeholder={"Enter room rent"} type='number' />
                <InputWithLabel label={"Quantity"} placeholder={"Enter No. of room"} type='number' />
            </View>
            <View style={{ flexDirection: "row" }}>
                <InputWithLabel label={"Beds"} placeholder={"Enter No. of beds"} type='number' />
                <InputWithLabel label={"Baths"} placeholder={"Enter No. of baths"} type='number' />
            </View>
            <View style={{ flexDirection: "row" }}>
                <InputWithLabel label={"Max Guests"} placeholder={"Enter No. of max guests"} type='number' />
                <InputWithLabel label={"Address"} placeholder={"Enter address"} />
            </View>
            <View style={{ flexDirection: "row" }}>
                <InputWithLabel label={"Latitude"} placeholder={"Enter latitude for map"} type='number' />
                <InputWithLabel label={"Longitude"} placeholder={"Enter Longitude for map"} type='number' />
            </View>
            <View style={{ flexDirection: "row" }}>
                <InputWithLabel label={"Phone"} placeholder={"Enter phone number"} type='phone' />
                <InputWithLabel label={"Email"} placeholder={"Enter email id"} type='email' />
            </View>
            <View style={{ flexDirection: "row" }}>
                <InputWithLabel label={"Title"} placeholder={"Enter homestay title"} />
                <InputWithLabel label={"Summery"} placeholder={"Enter a summery"} />
            </View>

            <View style={{ flexDirection: "row" }}>
                <DropdownWithLabel
                    label="Room Type"
                    placeholder="Select type"
                    value={roomType}
                    onChangeValue={setRoomType}
                    items={roomTypes}
                />
                <DropdownWithLabel
                    label="Room status"
                    placeholder="Select room status"
                    value={roomSts}
                    onChangeValue={setRoomSts}
                    items={roomStatus}
                />
            </View>
            <DescriptionBox
                label="Room Description"
                placeholder="Write something about the room..."
            />

            <MultiInputBox label={"Aminities"} />

        </View>
    )
}

export default RoomDetailsInputSection

const styles = StyleSheet.create({})