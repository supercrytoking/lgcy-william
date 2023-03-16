import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

const index = () => {
    return (
        <View style={styles.header}>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 5, alignItems: 'center' }}>
                <Text style={{ fontSize: 25 }}>Chat</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity>
                    <Feather name="edit" size={20} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({})