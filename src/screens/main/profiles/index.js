import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from './profile';
import Settings from './settings';
import CreateTimeLine from './timelines/CreateTimeLine';
import InviteMember from './timelines/InviteMember';

const Stack = createNativeStackNavigator();

function Profiles () {
  return (
    <Stack.Navigator initialRouteName='profile' >
      <Stack.Screen name={'profile'} component={Profile} options={{ headerShown: false }}/>
      <Stack.Screen name={'createTimeline'} component={CreateTimeLine} options={{headerTitle: 'Create Timeline', headerTitleAlign: 'center', headerShadowVisible: false}}/>
      <Stack.Screen name={'settings'} component={Settings} options={{ headerShown: false }}/>
      <Stack.Screen name={'invite'} component={InviteMember} />
    </Stack.Navigator>
  )
}

export default Profiles

const styles = StyleSheet.create({})