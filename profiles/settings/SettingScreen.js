import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { mainBackgroundColor } from '../../../../constants/style'
import SettingItem from '../../../../components/setting/SettingItem';
import { Button } from 'react-native-paper';

function SettingScreen({ navigation }) {
    const navigates = [
        { name: 'Profile Settings', link: 'profileSetting', },
        { name: 'Account', link: 'accont' },
        { name: 'QR Code Scanner', link: 'qrCodeScanner' },
        { name: 'Privacy Policy & Terms', link: 'privacyPolicyTerm' },
        { name: 'Help', link: 'help' },
        { name: 'Log out', link: 'home' },
    ]
    return (
        <View style={styles.container}>
            <View style={{ height: '60%', justifyContent: 'space-around' }}>
                {
                    navigates.map((item) => (
                        <SettingItem item={item['name']} onPress={() => navigation.navigate(item['link'])} key={navigates['name']} >
                            <AntDesign name="right" size={17} color="black" />
                        </SettingItem>
                    ))
                }
            </View>
            
        </View>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: mainBackgroundColor,
    },
})