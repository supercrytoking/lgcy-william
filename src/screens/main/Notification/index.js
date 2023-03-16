import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Notification from './Notification';
import Inbox from './Inbox';

const Stack = createStackNavigator();

function Notifications () {
  return (
    <Stack.Navigator initialRouteName='notification' >
      <Stack.Screen name={'notification'} component={Notification} options={{ headerTitle: 'Notifications', headerTitleAlign: 'center', }}/>
      <Stack.Screen name={'inbox'} component={Inbox} options={{ headerTitle: 'Inbox', headerTitleAlign: 'center', }}/>
    </Stack.Navigator>
  )
}

export default Notifications;

const styles = StyleSheet.create({})