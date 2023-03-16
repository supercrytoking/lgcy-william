import { Alert,  StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'
import { Avatar } from '@rneui/base';
import { mainBackgroundColor } from '../../../../constants/style';
import ProfileAvatar from '../../../../components/setting/ProfileAvatar';
import TimelineContent from '../../../../components/general/TimelineContent';
import female from '../../../../../assets/avatar/Photo.png'
import john from '../../../../../assets/avatar/john.png'
import Rectangle8 from '../../../../../assets/gallery/Rectangle8.png'
import Rectangle6 from '../../../../../assets/gallery/Rectangle6.png'
import { ScrollView } from 'react-native-gesture-handler';
// import Button from '../../../../components/general/Button';

function Profile({navigation}) {
    const onPress = (page) => {
        navigation.navigate(page)
    }
    const [profile, setProfile] = useState({name: 'John Morrison', profileTitle: 'Welcome to my life adventure', link: 'www.lgcy.io', avatar: john})
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View></View>
                <Text style={{fontSize: 24}}>johnmorrison</Text>
                <TouchableOpacity onPress={() => onPress('settings')}>
                    <AntDesign name="setting" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.profile}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <View>
                    <ProfileAvatar image={profile['avatar']} size={80} onPress={() => Alert.alert('OK')} ><MaterialIcons name="camera-alt" size={20} color="white" /></ProfileAvatar>
                    </View>
                    <View>
                        {/* <Button onPress={() => onPress()} title={'Create Timeline'} /> */}
                        <Button color='black' title='Create Timeline' onPress={() => onPress('createTimeline')} />
                    </View>
                </View>
                <View style={{paddingTop: 30}}>
                    <View style={{paddingLeft: 20}}>
                        <Text style={{fontSize: 20}}>{profile['name']}</Text>
                    </View>
                    <View style={{paddingLeft: 10}}>
                        <Text style={{fontSize: 17,}}>{profile['profileTitle']}</Text>
                    </View>
                    <View style={{paddingLeft: 25}}>
                        <Text style={{fontSize: 13, color: '#3E78CE'}}>
                            {profile.link}
                        </Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View style={styles.latest}>
                    <View style={styles.latestContent}>
                        <TimelineContent
                            source={Rectangle8}
                            title='Our Adventure'
                        />
                    </View>
                    <View style={styles.latestContent}>
                        <TimelineContent
                            source={Rectangle8}
                            isVideo
                            title='Video of Adventure'
                        />
                    </View>
                    <View style={styles.latestContent}>
                        <TimelineContent
                            source={Rectangle6}
                            isPrivate={true}
                            title='Journey'
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: mainBackgroundColor
    },
    header: {
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    profile: {
        paddingTop: 30,
        paddingLeft: 40,
        paddingRight: 40
    },
    latest : {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        margin: 10,
    },
    latestContent: {
        width: '50%',
    }
})