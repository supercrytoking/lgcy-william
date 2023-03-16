import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Home from './home';
import Chat from './chat';
import Notifications from './Notification';
import Gallery from './Gallery';
import Profiles from './profiles';

const Tab = createBottomTabNavigator();

function Main () {
  return (
    // Initial route name.
    <Tab.Navigator initialRouteName='homeStack' screenOptions={{ headerShown: false, "tabBarShowLabel": false, }} >
      <Tab.Screen name={'homeStack'} component={Home} options={{ tabBarIcon: ({focused, color, size}) => (<MaterialCommunityIcons name="home-outline" size={24} color={focused ? 'black' : 'gray'} />) }} />
      <Tab.Screen name={'chatStack'} component={Chat} options={{ tabBarIcon: ({focused, color, size}) => (<Feather name="users" size={24} color={focused ? 'black' : 'gray'} />) }} />
      <Tab.Screen name={'galleryStack'} component={Gallery} options={{ tabBarStyle: {display: 'none'}, tabBarIcon: ({focused, color, size}) => (<AntDesign name="plussquareo" size={24} color={focused ? 'black' : 'gray'} />) }} />
      <Tab.Screen name={'notificationsStack'} component={Notifications} options={{ tabBarIcon: ({focused, color, size}) => (<Ionicons name="notifications-outline" size={24} color={focused ? 'black' : 'gray'} />) }} />
      <Tab.Screen name={'profilesStack'} component={Profiles} options={{ tabBarIcon: ({focused, color, size}) => (<Feather name="user" size={24} color={focused ? 'black' : 'gray'} />) }} />
    </Tab.Navigator>
  )
}

export default Main
