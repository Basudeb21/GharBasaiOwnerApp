import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpencesCard from '../../../components/ExpencesCard'
import Header from '../../../components/Header'
import { verticalScale } from 'react-native-size-matters'
import FloatingActionButton from '../../../components/FloatingActionButton'
import { useNavigation } from '@react-navigation/native'
import NavigationStrings from '../../../constants/NavigationStrings'

const Expences = () => {
    const navigation = useNavigation()
    const handleOnPress = () => {
        navigation.navigate(NavigationStrings.ADD_EXPENCES)
    }
    return (
        <View style={styles.wrapper}>
            <Header title={"Expence List"} />
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.scrollContent}
            >
                {Array.from({ length: 10 }).map((_, index) => (
                    <ExpencesCard key={index} />
                ))}
            </ScrollView>
            <FloatingActionButton style={styles.fab} onPress={handleOnPress} />
        </View>
    )
}

export default Expences

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: verticalScale(40), // Leave space for FAB
    },
    fab: {
        position: 'absolute',
        bottom: verticalScale(20),
        right: verticalScale(20),
        zIndex: 10,
    },
})
