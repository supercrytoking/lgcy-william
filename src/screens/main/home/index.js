import { Button, StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import PostExpansion from './PostExpansion';
import Comments from './Comments';
import Likes from './Likes';


const Stack = createStackNavigator();


function ButtonList() {
  return (
    <View style={{ flexDirection: 'row', marginRight: 10 }}>
      <TouchableOpacity style={{ marginRight: 10 }} onPress={() => console.log('Button 1 pressed')}>
        <Text>Button 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginRight: 10 }} onPress={() => console.log('Button 2 pressed')}>
        <Text>Button 2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Button 3 pressed')}>
        <Text>Button 3</Text>
      </TouchableOpacity>
    </View>
  );
}

function Home() {

  const [showButtons, setShowButtons] = useState(false);
  
  const handlePress = () => {
    setShowButtons(!showButtons);
  }
  
   return (
    <Stack.Navigator>
        <Stack.Screen 
          name='home' 
          component={HomeScreen} 
          options={{headerShown: false}}  />
        <Stack.Screen 
          name='postExpansion' 
          component={PostExpansion} 
          options={{
            headerTitle: 'My Adventure', 
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
          }} 
        />
        <Stack.Screen
          name='comment'
          component={Comments}
          options={{headerTitle: 'Comments', headerTitleAlign: 'center'}} />
        <Stack.Screen
          name='likes'
          component={Likes}
          options={{headerTitle: 'Likes', headerTitleAlign: 'center'}} />
    </Stack.Navigator>
  )
}

export default Home

const styles = StyleSheet.create({})