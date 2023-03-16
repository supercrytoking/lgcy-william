import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MediaScreen from './media';
import MediaPost from './post';

const Stack = createNativeStackNavigator();

function Gallery () {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'media'} component={MediaScreen} options={{headerTitle: 'Gallery', headerTitleAlign: 'center',}}  />
      <Stack.Screen name={'mediaPost'} component={MediaPost} />
    </Stack.Navigator>
  )
}

export default Gallery

const styles = StyleSheet.create({})