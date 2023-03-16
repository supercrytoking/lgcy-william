import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

function SettingItem(props) {
    const {item, onPress} = props;

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
            <View style={{ flex: 1 }} />
            <TouchableOpacity style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }} onPress={onPress} >
                <Text style={{ fontSize: 17 }}>{item}</Text>
            </TouchableOpacity>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                {props.children}
            </View>
        </View>
    )
}

export default SettingItem

const styles = StyleSheet.create({})