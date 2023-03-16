import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/base'

const InviteItem = (props) => {
    const { username, avatar, timelineTitle, isInvited } = props;
    return (
        <View style={{ paddingRight: 20, paddingBottom: 30 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 20 }}>
                <View style={{ flex: 1 }}>
                    <Avatar source={avatar} size={35} rounded avatarStyle={{ borderWidth: 1, borderRadius: 64, borderColor: '#00ff00' }} />
                </View>
                <View style={{ flex: 5, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{username}</Text>
                        <Text style={{ fontSize: 12, paddingLeft: 10 }}>{props.children}</Text>
                    </View>
                    <Text style={{ fontSize: 13, textAlign: 'center', paddingRight: 45 }}>{timelineTitle}</Text>
                </View>
            </View>
            {isInvited &&
            (<View style={{ flexDirection: 'row', justifyContent: 'center', paddingLeft: 50, paddingRight: 50 }}>
                <View style={{ flex: 1, paddingRight: 10 }}>
                    <Button color='black' title='Accept' />
                </View>
                <View style={{ flex: 1, paddingLeft: 10 }}>
                    <Button color='black' title='Decline' />
                </View>
            </View>)
            }
        </View>
    )
}

export default InviteItem

const styles = StyleSheet.create({})