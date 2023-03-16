import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { Avatar } from '@rneui/base';
import { AntDesign } from '@expo/vector-icons';
import { mainBackgroundColor } from '../../../../constants/style'
import female from '../../../../../assets/avatar/Photo.png'

function NewShare({ navigation }) {
    // Creates a Share.
    // Creates a Share.
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => Alert.alert('', 'Post Shared', [{ text: 'Ok', onPress: () => navigation.navigate('home') }])}>
                    <Text style={{fontSize: 18, color: 'blue'}}>Share</Text>
                </TouchableOpacity>
            ),
        });
    });
    return (
        <View style={styles.container}>
            <View style={{}}>
                <Text style={{ fontSize: 15, }}>Public Timelines</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15, borderBottomColor: '#DADADACC', borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Avatar rounded source={female} size={20} />
                        <Text style={{ paddingLeft: 20 }}>My Adventure</Text>
                    </View>
                    <AntDesign name="check" size={24} color="black" />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15, borderBottomColor: '#DADADACC', borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Avatar rounded source={female} size={20} />
                        <Text style={{ paddingLeft: 20 }}>Vegas</Text>
                    </View>
                    {/* <AntDesign name="check" size={24} color="green" /> */}
                </View>
            </View>
            <View style={{ paddingTop: 20 }}>
                <Text style={{ fontSize: 15, }}>Private Timelines</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15, borderBottomColor: '#DADADACC', borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Avatar rounded source={female} size={20} />
                        <Text style={{ paddingLeft: 20 }}>My Adventure</Text>
                    </View>
                    <AntDesign name="check" size={24} color="black" />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15, borderBottomColor: '#DADADACC', borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Avatar rounded source={female} size={20} />
                        <Text style={{ paddingLeft: 20 }}>Vegas</Text>
                    </View>
                    {/* <AntDesign name="check" size={24} color="green" /> */}
                </View>
            </View>
            <View style={{ paddingTop: 20 }}>
                <Text style={{ fontSize: 15, }}>Contacts</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15, borderBottomColor: '#DADADACC', borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Avatar rounded source={female} size={20} />
                        <Text style={{ paddingLeft: 20 }}>username</Text>
                    </View>
                    <AntDesign name="check" size={24} color="black" />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15, borderBottomColor: '#DADADACC', borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Avatar rounded source={female} size={20} />
                        <Text style={{ paddingLeft: 20 }}>username</Text>
                    </View>
                    {/* <AntDesign name="check" size={24} color="green" /> */}
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15, borderBottomColor: '#DADADACC', borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Avatar rounded source={female} size={20} />
                        <Text style={{ paddingLeft: 20 }}>username</Text>
                    </View>
                    {/* <AntDesign name="check" size={24} color="green" /> */}
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15, borderBottomColor: '#DADADACC', borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Avatar rounded source={female} size={20} />
                        <Text style={{ paddingLeft: 20 }}>username</Text>
                    </View>
                    <AntDesign name="check" size={24} color="black" />
                </View>
            </View>
        </View>
    )
}

export default NewShare

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: mainBackgroundColor,
        padding: 30
    },
})