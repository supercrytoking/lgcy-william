import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import camera from '../../../assets/icons/video.png'


const TimelineContent = ({source, title, isVideo, isPrivate}) => {

    // const [isVideo, setIsVideo] = React.useState(false)
    // const [isPrivate, setIsPrivate] = React.useState(false)

    return (
        <View style={styles.card}>
            <ImageBackground style={{ width: '100%', height: 150 }} rounded source={source}>
                {isVideo &&
                    <View style={{ top:5, left: 140}}>
                        <Image source={camera} />
                    </View>
                }
            </ImageBackground>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: '100%' , padding: 0}}>
                <Text style={{ paddingTop: 10 }}>{title}</Text>
                <View style={{ flexDirection: 'row', paddingTop: 10}}>
                    {isPrivate &&
                    (<Ionicons
                        name="lock-closed"
                        size={14}
                        color='black'
                        style={{ fontWeight: 'bold' }} // Set margin right to 10
                    />)}
                    <Ionicons
                        name="ellipsis-horizontal"
                        size={14}
                        color='black'
                        style={{ fontWeight: 'bold' }} // Set margin right to 10
                    />
                </View>
            </View>
        </View>
    )
}

export default TimelineContent

const styles = StyleSheet.create({
    card: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        padding: 10,
        margin: 0
    },
})