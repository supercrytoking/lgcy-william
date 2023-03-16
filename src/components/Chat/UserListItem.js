import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/base'

const UserListItem = ({avatar, name, lastTime}) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 15, backgroundColor: '#FFFFFF' }}>
            <View style={{ flex: 1 }}>
                <Avatar source={avatar} size={48} rounded avatarStyle={{ borderWidth: 3, borderRadius: 64, borderColor: '#ffffff' }} />
            </View>
            <View style={{ flex: 3, }}>
                <Text style={{ fontSize: 18 }}>{name}</Text>
                {/* <Text style={{ fontSize: 17 }}>{content}</Text> */}
            </View>
            <View style={{flex: 1}}>
                <Text style={{fontSize: 12}}>{lastTime}</Text>
            </View>
        </View>
    )
}

export default UserListItem

const styles = StyleSheet.create({})