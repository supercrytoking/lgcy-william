import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewPost from './NewPost';
import NewShare from './NewShare';
import GeoLocation from './GeoLocation';
import GeoLocationAsync from './GeoLocationAsync';

const Stack = createNativeStackNavigator();

function MediaPost({navigation, route}) {
  return (
    <Stack.Navigator initialRouteName='newPost'>
      <Stack.Screen 
        name={'newPost'} 
        component={NewPost} 
        options={{ headerTitle: 'New Post', headerTitleAlign: 'center', }} 
        initialParams={{imageId: route.params?.imageId}}
      />
      <Stack.Screen name={'newShare'} component={NewShare} options={{ headerTitle: 'Share', headerTitleAlign: 'center', }} />
      <Stack.Screen name={'geolocation'} component={GeoLocation} options={{ headerShown: false}}/>
      <Stack.Screen name={'geolocationsync'} component={GeoLocationAsync} options={{ headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default MediaPost

const styles = StyleSheet.create({})