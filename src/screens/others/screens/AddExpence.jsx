import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import InputWithLabel from '../../../components/InputWithLabel'
import DescriptionBox from '../../../components/DescriptionBox '
import RoomDetailsInputSection from '../../room-management/components/RoomDetailsInputSection'
import ImageAdderSection from '../../room-management/components/ImageAdderSection'
import DateInput from '../../../components/DateInput '
import Header from '../../../components/Header'

const AddExpence = () => {
    const [ammount, setAmmount] = useState()
    const [name, setName] = useState()
    const [itemName, setItemName] = useState()
    const [expenceDate, setExpenceDate] = useState()



    return (
        // label, placeholder, type = "text", value, onChangeText 
        <View>
            <Header title={"Add New Expence"} />
            <View style={{ flexDirection: "row" }}>
                <InputWithLabel
                    label={"Ammount"}
                    placeholder={"Enter expences ammount"}
                    type='number'
                    value={ammount}
                    onChangeText={setAmmount}
                />
                <InputWithLabel
                    label={"Expence By"}
                    placeholder={"Name who made expence"}
                    type='text'
                    value={name}
                    onChangeText={setName}
                />
            </View>
            <View style={{ flexDirection: "row" }}>
                <InputWithLabel
                    label={"Expence Name"}
                    placeholder={"Enter expence name"}
                    type='text'
                    value={itemName}
                    onChangeText={setItemName}
                />
                <DateInput
                    label={"Date"}
                    date={expenceDate}
                    onChange={setExpenceDate}
                />
            </View>
            <DescriptionBox
                label={"Describe"}
                placeholder={"Describe the expence here"}
            />

            <ImageAdderSection />
        </View>
    )
}

export default AddExpence

const styles = StyleSheet.create({})