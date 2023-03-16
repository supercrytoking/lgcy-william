import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Gallery from './Gallery';
import Video from './Video';
import Photo from './Photo';

const Tab = createBottomTabNavigator();

function MediaScreen() {
  return (
    <Tab.Navigator initialRouteName='galleryScreen'>
      <Tab.Screen
        name={"galleryScreen"}
        component={Gallery}
        options={{
          headerTitle: 'Gallery',
          headerTitleAlign: 'center',
          tabBarLabel: 'Gallery',
          tabBarIconStyle: { display: 'none' },
          tabBarStyle: { paddingBottom: 20 },
          tabBarLabelStyle: { fontSize: 17 },
        }}
      />
      <Tab.Screen
        name={"videoScreen"}
        component={Video}
        options={{
          headerTitle: 'Video',
          headerTitleAlign: 'center',
          tabBarLabel: 'Video',
          tabBarIconStyle: { display: 'none' },
          tabBarStyle: { paddingBottom: 20 },
          tabBarLabelStyle: { fontSize: 15, fontWeight: 'normal' },
          tabBarLabelFocusedStyle: { fontWeight: 'bold' }
        }}
      />
      <Tab.Screen
        name={"photoScreen"}
        component={Photo}
        options={{
          headerTitle: 'Photo',
          headerTitleAlign: 'center',
          tabBarLabel: 'Photo',
          tabBarIconStyle: { display: 'none' },
          tabBarStyle: { paddingBottom: 20 },
          tabBarLabelStyle: { fontSize: 15, fontWeight: 'normal' },
          tabBarLabelFocusedStyle: { fontWeight: 'bold' }
        }}
      />
    </Tab.Navigator>
  )
}

export default MediaScreen

const styles = StyleSheet.create({})