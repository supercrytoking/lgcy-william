import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons';
import UserList from './UserList';
import ChatBox from './ChatBox';

const Stack = createNativeStackNavigator();

function Chat () {
  const [showButtons, setShowButtons] = useState(false);
  
  const handlePress = () => {
    setShowButtons(!showButtons);
  }

  return (
    <Stack.Navigator initialRouteName='userList'>
      <Stack.Screen name='userList' component={UserList} options={{headerShown: false}}  />
      <Stack.Screen 
        name='chatBox' 
        component={ChatBox} 
        options={{
          headerTitle: 'rachelmorrison', 
          headerTitleAlign: 'center',
          headerRight: () => (
            <Ionicons 
              onPress={handlePress}
              name="ellipsis-horizontal" 
              size={24} 
              color='black'
              style={{ marginRight: 15, fontWeight: 'bold' }} // Set margin right to 10
            />
              // {showButtons && <ButtonList />}
          ),
      }} />
    </Stack.Navigator>
  )
}

export default Chat

const styles = StyleSheet.create({})