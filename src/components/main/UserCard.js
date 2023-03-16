import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/base'


const UserCard = ({source, title}) => {
    return (
        <View style={styles.card}>
            <Avatar size={70} rounded source={source} />
            <Text style={{ paddingTop: 10 }}>{title}</Text>
        </View>
    )
}

export default UserCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#E9E8E8',
        width: '30%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})