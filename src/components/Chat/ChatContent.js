import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ChatContentLeft = ({ chat, time }) => {
    return (
        <View style={{ justifyContent: 'flex-start', ...styles.chatItemConent }}>
            <View style={{ alignItems: 'flex-start', width: '100%' }}>
                <View style={styles.chatItemLeft}>
                    <Text style={{ color: '#000000' }}>
                        {chat}
                    </Text>
                </View>
                <Text style={{ fontSize: 14 }}> { time }</Text>
            </View>

        </View>
    )
}

const ChatContentRight = ({ chat, time }) => {
    return (
        <View style={{ justifyContent: 'flex-end', ...styles.chatItemConent }}>
            <View style={{ alignItems: 'flex-end', width: '100%' }}>
                <View style={styles.chatItemRight}>
                    <Text style={{ color: '#FFFFFF' }}>
                        {chat}
                    </Text>
                </View>
                <Text style={{ fontSize: 14 }}> { time }</Text>
            </View>
        </View>
    )
}

export { ChatContentLeft, ChatContentRight }

const styles = StyleSheet.create({
    chatItemConent: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
    },
    chatItemLeft: {
        width: '60%',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: '#FDF3F3'
    },
    chatItemRight: {
        width: '60%',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: '#000000'
    },
})