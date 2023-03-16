import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/base'

const UserLike = ({avatar, name}) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Avatar source={avatar} rounded size={35} />
            <Text style={{ paddingLeft: 15, fontSize: 16, lineHeight: 50 }}>{name}</Text>
            {/* <Text style={{ paddingLeft: 15, fontSize: 14, }}>{content}</Text> */}
        </View>
    )
}

export default UserLike

const styles = StyleSheet.create({})