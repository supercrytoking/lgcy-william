import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { SwipeListView } from 'react-native-swipe-list-view';
import UserListItem from '../../../components/Chat/UserListItem';
import { Feather } from '@expo/vector-icons';
import { mainBackgroundColor } from '../../../constants/style';
import female from '../../../../assets/avatar/Photo.png'
import male from '../../../../assets/avatar/john.png'
import seaside from '../../../../assets/avatar/seaside.png'

function UserList({ navigation }) {
    const onPress = (page) => {
        navigation.navigate(page);
    }

    // const data = Array(20).fill("").map((_, i) => ({ key: `${i}`, name: 'John Morrison' }));
    const listData = [
        { id: 0, avatar: male, name: 'John Morrison', lastTime: '2:15 pm' },
        { id: 1, avatar: female, name: 'Rachel Morrison', lastTime: '2:15 pm' },
        { id: 2, avatar: seaside, name: 'Carlson James', lastTime: '2:15 pm' },
        { id: 3, avatar: male, name: 'John Morrison', lastTime: '2:15 pm' },
        { id: 4, avatar: female, name: 'Rachel Morrison', lastTime: '2:15 pm' },
        { id: 5, avatar: seaside, name: 'Carlson James', lastTime: '2:15 pm' },
        { id: 6, avatar: male, name: 'John Morrison', lastTime: '2:15 pm' },
        { id: 7, avatar: female, name: 'Rachel Morrison', lastTime: '2:15 pm' },
        { id: 8, avatar: seaside, name: 'Carlson James', lastTime: '2:15 pm' },
        { id: 9, avatar: male, name: 'John Morrison', lastTime: '2:15 pm' },
        { id: 10, avatar: female, name: 'Rachel Morrison', lastTime: '2:15 pm' },
        { id: 11, avatar: seaside, name: 'Carlson James', lastTime: '2:15 pm' },
        { id: 12, avatar: male, name: 'John Morrison', lastTime: '2:15 pm' },
        { id: 13, avatar: female, name: 'Rachel Morrison', lastTime: '2:15 pm' },
        { id: 14, avatar: seaside, name: 'Carlson James', lastTime: '2:15 pm' },
        { id: 15, avatar: male, name: 'John Morrison', lastTime: '2:15 pm' },
        { id: 16, avatar: female, name: 'Rachel Morrison', lastTime: '2:15 pm' },
    ]
    return (
        <View style={styles.container}>
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
            <View style={{ paddingTop: 15 }}>
                <View style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                    <TextInput 
                        placeholder={'People, Groups & Messages'} 
                        mode='outlined' 
                        theme={{ roundness: 20, colors: '#FFFFFF', }} 
                        style={{ backgroundColor: '#FFFFFF' }} 
                        left={<TextInput.Icon icon="magnify" />} 
                    />
                </View>
                <SafeAreaView style={{ height: '100%', paddingLeft: '10%', paddingRight: '10%', marginTop: 15 }}>
                    <SwipeListView
                        data={listData}
                        renderItem={(listData, rowMap) => (
                            <View style={{ backgroundColor: '#FFFFFF' }}>
                                <TouchableOpacity onPress={() => onPress('chatBox')}>
                                    <UserListItem 
                                        avatar={listData.item.avatar} 
                                        name={listData.item.name} 
                                        lastTime={listData.item.lastTime}
                                    />
                                </TouchableOpacity>
                            </View>
                        )}
                        renderHiddenItem={(listData, rowMap) => (
                            <TouchableOpacity>
                                <View style={{ height: 48, justifyContent: 'center', alignItems: 'flex-end' }}>
                                    <Ionicons name="ios-trash-bin" size={25} color="red" />
                                </View>
                            </TouchableOpacity>
                        )}
                        rightOpenValue={-40}
                    />
                </SafeAreaView>
            </View>
        </View>
    )
}

export default UserList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: mainBackgroundColor
    },
    header: {
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingLeft: '5%',
        paddingRight: '5%'
    },

})