import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'

const EmailInput = () => {
  return (
    <View>
      <TextInput style={{ backgroundColor: '#E5E5E5', textAlign: 'center', fontSize: 16 }} placeholder='Email' />
    </View>
  )
}

export default EmailInput

const styles = StyleSheet.create({})