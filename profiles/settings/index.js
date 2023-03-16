import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SettingScreen from './SettingScreen';
import ProfileSetting from './ProfileSetting';
import Account from './Account';
import QRCodeScanner from './QRCodeScanner';
import PrivacyPolicyTerm from './PrivacyPolicyTerm';
import Help from './Help';
import UserName from './UserName'
import Password from './Password';
import ProfileLink from './ProfileLink';
import PhoneNumber from './PhoneNumber';

const Stack = createNativeStackNavigator();

function Settings () {
  return (
    <Stack.Navigator initialRouteName='settings'>
        <Stack.Screen name='settingScreen' component={SettingScreen} options={{headerTitle: 'Settings', headerTitleAlign: 'center', headerShadowVisible: false}}/>
        <Stack.Screen name='profileSetting' component={ProfileSetting} options={{headerTitle: 'Profile Setting', headerTitleAlign: 'center',}} />
        <Stack.Screen name='accont' component={Account} options={{headerTitle: 'Accont Setting', headerTitleAlign: 'center',}} />
        <Stack.Screen name='qrCodeScanner' component={QRCodeScanner} options={{headerTitle: 'QRCodeScanner', headerTitleAlign: 'center', }} />
        <Stack.Screen name='privacyPolicyTerm' component={PrivacyPolicyTerm} options={{headerTitle: 'PrivacyPolicyTerm', headerTitleAlign: 'center', }} />
        <Stack.Screen name='help' component={Help} options={{headerTitle: 'PrivacyPolicyTerm', headerTitleAlign: 'center', }} />
        <Stack.Screen name='userName' component={UserName} options={{headerTitle: 'Username', headerTitleAlign: 'center', }} />
        <Stack.Screen name='password' component={Password} options={{headerTitle: 'Password', headerTitleAlign: 'center', }} />
        <Stack.Screen name='profileLink' component={ProfileLink} options={{headerTitle: 'Profile Link', headerTitleAlign: 'center', }} />
        <Stack.Screen name='phoneNumber' component={PhoneNumber} options={{headerTitle: 'Phone Number', headerTitleAlign: 'center', }} />
    </Stack.Navigator>
  )
}

export default Settings

const styles = StyleSheet.create({})