import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatHeader from '../../../components/ChatHeader'
import ChatBottom from '../../../components/ChatBottom'
import Colors from '../../../constants/Colors'
import SendMsg from '../../../components/SendMsg'
import RecivedMessage from '../../../components/RecivedMessage'

const ChatArea = () => {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <ChatHeader />
            </View>
            <ScrollView style={styles.body}>
                <SendMsg />
                <RecivedMessage />
                <SendMsg />
                <RecivedMessage />
                <SendMsg />
                <RecivedMessage />
                <SendMsg />
                <RecivedMessage />
                <SendMsg />
                <RecivedMessage />
                <SendMsg />
                <RecivedMessage />
            </ScrollView>
            <View style={styles.tail}>
                <ChatBottom />
            </View>
        </View>
    )
}

export default ChatArea

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    head: {
        height: "9%"

    },
    body: {
        height: "82%",
        backgroundColor: Colors.DEACTIVE
    },
    tail: {
        height: "8%"
    }
})