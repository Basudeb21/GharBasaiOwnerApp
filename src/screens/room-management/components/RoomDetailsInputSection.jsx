import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import InputWithLabel from '../../../components/InputWithLabel'
import DropdownWithLabel from '../../../components/DropdownWithLabel'
import DescriptionBox from '../../../components/DescriptionBox'
import ImageAdderSection from './ImageAdderSection'

const RoomDetailsInputSection = ({
    data,
    roomNo, setRoomNo,
    roomRent, setRoomRent,
    beds, setBeds,
    baths, setBaths,
    maxGuest, setMaxGuest,
    summery, setSummery,
    roomType, setRoomType,
    bathType, setBathType,
    description, setDescription,
    roomTypeOptions
}) => {

    setRoomNo(data.room_no)
    setRoomRent(data.rent)
    setBeds(data.beds)
    setBaths(data.bath)
    setMaxGuest(data.maximum_guest)
    // setRoomType()
    // setBathType()
    setDescription(data.description)


    const bathTypeOptions = [
        { label: 'Common', value: 'common' },
        { label: 'Private', value: 'private' },
    ];
    return (
        <View>
            <View style={{ flexDirection: "row" }}>
                <InputWithLabel
                    label={"Room No."}
                    placeholder={"Enter room No."}
                    type='text'
                    value={roomNo}
                    onChangeText={setRoomNo}
                />


                <InputWithLabel
                    label={"Rent/Night"}
                    placeholder={"Enter room rent"}
                    type='number'
                    value={roomRent}
                    onChangeText={setRoomRent}
                />
            </View>
            <View style={{ flexDirection: "row" }}>
                <InputWithLabel
                    label={"Beds"}
                    placeholder={"Enter No. of beds"}
                    type='number'
                    value={beds}
                    onChangeText={setBeds}
                />
                <InputWithLabel
                    label={"Baths"}
                    placeholder={"Enter No. of baths"}
                    type='number'
                    value={baths}
                    onChangeText={setBaths}
                />
            </View>
            <View style={{ flexDirection: "row" }}>
                <InputWithLabel
                    label={"Max Guests"}
                    placeholder={"Enter No. of max guests"}
                    type='number'
                    value={maxGuest}
                    onChangeText={setMaxGuest}
                />
                <InputWithLabel
                    label={"Summery"}
                    placeholder={"Enter a summery"}
                />
            </View>

            <View style={{ flexDirection: "row" }}>
                <DropdownWithLabel
                    label="Room Type"
                    placeholder="Select type"
                    value={roomType}
                    onChangeValue={setRoomType}
                    items={roomTypeOptions}
                />
                <DropdownWithLabel
                    label="Bath type"
                    placeholder="Select room status"
                    value={bathType}
                    onChangeValue={setBathType}
                    items={bathTypeOptions}
                />

            </View>
            <DescriptionBox
                label="Room Description"
                placeholder="Write something about the room..."
                value={description}
                setValue={setDescription}

            />

            <ImageAdderSection />

        </View>
    )
}

export default RoomDetailsInputSection

const styles = StyleSheet.create({})