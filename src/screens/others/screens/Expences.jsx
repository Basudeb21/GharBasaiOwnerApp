import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useState, useCallback } from 'react';
import ExpencesCard from '../../../components/ExpencesCard';
import Header from '../../../components/Header';
import { verticalScale } from 'react-native-size-matters';
import FloatingActionButton from '../../../components/FloatingActionButton';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import NavigationStrings from '../../../constants/NavigationStrings';
import GetAllExpences from '../../../api/app/GetAllExpences';

const Expences = () => {
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate(NavigationStrings.ADD_EXPENCES);
    };

    const handelFetchAllExpense = async () => {
        setLoading(true);
        const result = await GetAllExpences();
        if (result) {
            const flatList = [];
            Object.keys(result).forEach(date => {
                result[date].forEach(item => {
                    flatList.push({
                        ...item,
                        groupDate: date
                    });
                });
            });
            setExpenses(flatList);
        }
        setLoading(false);
    };

    useFocusEffect(
        useCallback(() => {
            handelFetchAllExpense();
        }, [])
    );

    const renderItem = ({ item }) => (
        <ExpencesCard
            date={item.expense_date}
            expenceName={item.items_name}
            expenceBy={item.expense_by}
            ammount={item.amount}
        />
    );

    return (
        <View style={styles.wrapper}>
            <Header title={"Expence List"} />

            {loading ? (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text style={styles.loaderText}>Loading expenses...</Text>
                </View>
            ) : (
                <FlatList
                    data={expenses}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={styles.scrollContent}
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>No expenses found</Text>
                    }
                />
            )}

            <FloatingActionButton style={styles.fab} onPress={handleOnPress} />
        </View>
    );
};

export default Expences;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        paddingBottom: verticalScale(40),
    },
    fab: {
        position: 'absolute',
        bottom: verticalScale(20),
        right: verticalScale(20),
        zIndex: 10,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loaderText: {
        marginTop: 10,
        fontSize: 16,
        color: '#666',
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: '#999',
    },
});
