import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { mainBackgroundColor } from '../../../../constants/style'
import { TextInput } from 'react-native-paper'
import { Entypo } from '@expo/vector-icons';
import { Avatar } from '@rneui/base'

import female from '../../../../../assets/avatar/Photo.png'

function InviteMember({ navigation }) {
    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <TextInput placeholder='' style={{ backgroundColor: mainBackgroundColor, textAlign: 'center', width: '80%' }} value={address} onChange={e => setAddress(e.target.value)} />
            ),
            headerRight: () => (
                <TouchableOpacity>
                    <Text>Invite</Text>
                </TouchableOpacity>
            ),
            headerShadowVisible: false
        })
    });

    
    const [userData, setUserData] = useState([
        { avatar: female, username: 'Anders', selected: false },
        { avatar: female, username: 'Anders', selected: false },
        { avatar: female, username: 'Anders', selected: false },
        { avatar: female, username: 'Anders', selected: false },
        { avatar: female, username: 'Anders', selected: false },
        { avatar: female, username: 'Anders', selected: false },
        { avatar: female, username: 'Anders', selected: false },
    ])
    const [address, setAddress] = useState('');

    const selectFunction = (index) => {
        const user_buffer = userData.map((user, key) => {
            if(index === key)
                return {...user, selected: !user['selected']}
            else return {...user}
        });
        setUserData(user_buffer);
    }
    
    return (
        <View style={styles.container}>
            {userData.map((user, index) => (
                <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 10 }} key={index} onPress={() => selectFunction(index)} > 
                    <View style={{ flex: 5, flexDirection: 'row' }}>
                        <Avatar source={user['avatar']} rounded size={32} />
                        <Text style={{ marginHorizontal: 20 }}>{user['username']}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        {user['selected'] ? (
                            <Entypo name="check" size={24} color="green" />
                        ): <View />}
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default InviteMember

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: mainBackgroundColor,
        paddingTop: 20,
        paddingHorizontal: 20
    }
})