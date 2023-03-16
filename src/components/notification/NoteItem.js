import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/base'

function NoteItem(props) {
    const {username, avatar, post} = props;
    return (
        <View style={styles.noteItem}>
            <View style={{ flex: 1 }}>
                <Avatar source={avatar} size={35} rounded avatarStyle={{ borderWidth: 1, borderRadius: 64, borderColor: '#00ff00' }} />
            </View>
            <View style={{ flex: 5, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{ fontSize: 14, fontWeight: 'bold'}}>{username}</Text>
                <Text style={{ fontSize: 12, paddingLeft: 10}}>{props.children}</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Image source={post} style={{ flex: 1, width: 30, height: 30 }} />
            </View>
        </View>
    )
}

export default NoteItem

const styles = StyleSheet.create({
    noteItem :{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingBottom: 20 , 
        borderColor: '#00ff00', 
        borderRadius: 10
    }
})