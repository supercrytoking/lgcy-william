import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { mainBackgroundColor } from '../../../constants/style'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { ChatContentLeft, ChatContentRight } from '../../../components/Chat/ChatContent';

function ChatBox() {
    // This is a demo of the text.
    const chat = [{
        owner: 1,
        chat: 'Hey. This is a demo of the tex.  This is the demo of the text. ',
        time: '5: 45 AM'
    },
    {
        owner: 0,
        chat: 'Hey. This is a demo of the text.  This is the demo of the text. This is the demo of the text. This is the demo of the text',
        time: '6: 55 AM'
    },
    {
        owner: 1,
        chat: 'Hey. This is a demo of the tex.  This is the demo of the text. ',
        time: '9: 45 AM'
    },
    {
        owner: 0,
        chat: 'Hey. This is a demo of the text.  This is the demo of the text. This is the demo of the text. This is the demo of the text',
        time: '10: 45 AM'
    },
    {
        owner: 1,
        chat: 'Hey. This is a demo of the text.  This is the demo of the text. This is the demo of the text. This is the demo of the text',
        time: '10: 45 AM'
    }];

    return (
        <View style={styles.container}>
            <ScrollView style={styles.chatArea}>
                {chat.map((item, index) => {
                    if(item.owner){
                        return <ChatContentLeft chat={item['chat']} time={item['time']} key={index} />
                    } else {
                        return <ChatContentRight chat={item['chat']} time={item['time']} key={index} />
                    }
                })}
            </ScrollView>
            <View style={styles.chatInputGroup}>
                <TouchableOpacity>
                    <AntDesign name="camera" size={24} color="black" />
                </TouchableOpacity>
                <TextInput style={{ fontSize: 15, height: 40, width: '80%' }} theme={{ colors: { primary: '#000000' }, roundness: 15 }} mode='outlined' placeholder='Write Something...' />
                <TouchableOpacity>
                    <Feather name="send" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ChatBox

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: mainBackgroundColor
    },
    chatArea: {
        // backgroundColor: 'red',
        paddingTop: 20,
        paddingBottom: 80
    },
    chatInputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        paddingTop: 10,
        borderTopWidth: 1,
        borderColor: '#969191'
    }
})