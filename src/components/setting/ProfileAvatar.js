import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Badge } from '@rneui/base';

const ProfileAvatar = (props) => {
    const {onPress, image, size} = props;
    return (
        <Avatar source={image} rounded size={size}>
            <Badge
                onPress={onPress}
                value={() => (
                    props.children
                )}
                containerStyle={{ position: 'absolute', backgroundColor: '#0000ff', borderRadius: 15, height: 30, width: 30, marginLeft: 70 }}
                badgeStyle={{ height: 30, width: 30, borderRadius: 15, borderWidth: 1 }}
            />
        </Avatar>
    )
}

export default ProfileAvatar

const styles = StyleSheet.create({})