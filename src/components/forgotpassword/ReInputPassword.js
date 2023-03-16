import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'

const ReInputPassword = () => {
  return (
    <View>
      <TextInput style={{ backgroundColor: '#E5E5E5', textAlign: 'center', fontSize: 16 }} placeholder='Enter Code' />
      <TextInput style={{ backgroundColor: '#E5E5E5', textAlign: 'center', fontSize: 16 }} placeholder='New Password' />
      <TextInput style={{ backgroundColor: '#E5E5E5', textAlign: 'center', fontSize: 16 }} placeholder='Confirm Password' />
    </View>
  )
}

export default ReInputPassword

const styles = StyleSheet.create({})