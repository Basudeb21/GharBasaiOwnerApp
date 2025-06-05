import { StyleSheet, Text, View, ScrollView, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../components/Header'
import InputWithLabel from '../../../components/InputWithLabel'
import ImageAdderSection from '../../room-management/components/ImageAdderSection'
import TouchButton from '../../../components/TouchButton'
import DateInput from '../../../components/DateInput'
import DescriptionBox from '../../../components/DescriptionBox'
import AddeNewExpenseAPI from '../../../api/app/AddNewExpense'

const AddExpence = () => {
    const [ammount, setAmmount] = useState('')
    const [name, setName] = useState('')
    const [itemName, setItemName] = useState('')
    const [expenceDate, setExpenceDate] = useState(null)
    const [description, setDescription] = useState("");

    const showToast = (message) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        } else {
            Alert.alert('Alert', message);
        }
    };


    const handleAddExpense = async () => {
        if (!ammount.trim()) {
            showToast('Please enter amount');
            return;
        }
        if (!name.trim()) {
            showToast('Please enter expense by');
            return;
        }
        if (!itemName.trim()) {
            showToast('Please enter expense name');
            return;
        }
        if (!expenceDate) {
            showToast('Please select a date');
            return;
        }
        if (!description.trim()) {
            showToast('Please enter description');
            return;
        }

        const formattedDate = `${expenceDate.getFullYear()}-${String(expenceDate.getMonth() + 1).padStart(2, '0')}-${String(expenceDate.getDate()).padStart(2, '0')}`;

        const result = await AddeNewExpenseAPI({
            expense_date: formattedDate,
            amount: ammount,
            expense_by: name,
            items_name: itemName,
            description: description,
        });

        console.log(">>> ", result);
        if (result === true) {
            setAmmount('');
            setName('');
            setItemName('');
            setExpenceDate(null);
            setDescription('');
            showToast('Expense added successfully');
        } else {
            showToast('Failed to add expense');
        }
    };

    return (
        <View>
            <Header title={"Add New Expense"} />
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.row}>
                    <InputWithLabel
                        label={"Amount"}
                        placeholder={"Enter expense amount"}
                        type='number'
                        value={ammount}
                        onChangeText={setAmmount}
                    />
                    <InputWithLabel
                        label={"Expense By"}
                        placeholder={"Name who made expense"}
                        type='text'
                        value={name}
                        onChangeText={setName}
                    />
                </View>
                <View style={styles.row}>
                    <InputWithLabel
                        label={"Expense Name"}
                        placeholder={"Enter expense name"}
                        type='text'
                        value={itemName}
                        onChangeText={setItemName}
                    />
                    <DateInput
                        label={"Date"}
                        date={expenceDate}
                        onChange={(date) => {
                            console.log("Selected Date:", date);
                            setExpenceDate(date);
                        }}
                    />
                </View>
                <DescriptionBox
                    label={"Describe"}
                    placeholder={"Describe the expense here"}
                    value={description}
                    setValue={setDescription}

                />
                <ImageAdderSection />
                <TouchButton label={"SAVE"} onPress={handleAddExpense} />
            </ScrollView>
        </View>
    )
}

export default AddExpence

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        marginBottom: 10,
    },
})
