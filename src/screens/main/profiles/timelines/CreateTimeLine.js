import { Alert, StyleSheet, Text, View, Switch, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { mainBackgroundColor } from '../../../../constants/style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput, Button } from 'react-native-paper'
import { MaterialIcons } from '@expo/vector-icons'
import female from '../../../../../assets/avatar/Photo.png'
import john from '../../../../../assets/avatar/john.png'
import ProfileAvatar from '../../../../components/setting/ProfileAvatar'

function CreateTimeLine({ navigation }) {
    const [publicPost, setPublicPost] = useState(false);
    const [followerShown, setFollowerShown] = useState(0);
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginVertical: 10 }}>
                <Text>Title</Text>
                <TextInput mode='outlined' />
            </View>
            <View style={{ marginVertical: 10 }}>
                <Text>Description</Text>
                <TextInput mode='outlined' numberOfLines={3} multiline={true}/>
            </View>
            <View style={{ alignItems: 'center', marginVertical: 20 }}>
                <ProfileAvatar image={john} size={105} onPress={() => Alert.alert('OK')} ><MaterialIcons name="camera-alt" size={20} color="white" /></ProfileAvatar>
            </View>
            {/* <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 20, marginHorizontal: 20}}>
                <View style={{alignItems: 'center', flex: 2, justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center', fontSize: 17}}>Public</Text>
                    <Text style={{textAlign: 'center', fontSize: 17}}>Followers Shown</Text>
                </View>
                <View style={{flex: 1}}>
                    <Switch onChange={()=>setPublicPost(!publicPost)} value={publicPost} />
                    <Switch onChange={()=>setPublicPost(!publicPost)} value={publicPost} />
                </View>
            </View> */}
            <View style={{ flexDirection: 'column', justifyContent: 'center', marginVertical: 20, marginHorizontal: 40 }}>
                <View style={{  }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 2, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'center', fontSize: 17 }}>
                                {publicPost ? 'Secret' : 'Public'}
                            </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Switch onChange={() => setPublicPost(!publicPost)} value={publicPost} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        {!publicPost && (
                            <View>
                                <View style={{ flex: 2, justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center', fontSize: 17 }}>Followers Shown</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Switch onChange={() => setFollowerShown(!followerShown)} value={followerShown} />
                                </View>
                            </View>
                        )}
                    </View>
                    {publicPost ?
                        (<View style={{ marginHorizontal: 30 }}>
                            <Button mode='contained' style={{ backgroundColor: '#000000', borderRadius: 10, marginTop: 10 }} onPress={() => navigation.navigate('invite')} >Invite Members</Button>
                        </View>) : <View />
                    }
                    <View style={{ marginHorizontal: 30 }}>
                        <Button mode='contained' style={{ backgroundColor: '#000000', borderRadius: 10, marginTop: 10 }} >Create Timeline</Button>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CreateTimeLine

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: mainBackgroundColor,
        paddingHorizontal: 30
    }
})