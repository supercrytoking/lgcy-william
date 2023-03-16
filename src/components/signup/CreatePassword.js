import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { authTextInputStyle } from '../../constants/style'

const CreatePassword = (props) => {

  const [password, setPassword] = useState("")
  const [confirmpwd, setConfirmPassword] = useState("")
  const onChangePassword = (e) => {
    props.validPassword(e,confirmpwd)
    props.validUserName(3,true)
    setPassword(e)
    console.log("password:::::", e, password);
  }

  const onChangeConfirmPassword = (e) => {
    props.validPassword(password,e)
    props.validUserName(3,true)
    setConfirmPassword(e)
  }

  return (
    <View>
      <TextInput 
        style={authTextInputStyle} 
        placeholder='Password' 
        value={password}
        onChangeText={onChangePassword}
        secureTextEntry 
      />
      <TextInput 
        style={{ marginTop: 5, ...authTextInputStyle }} 
        placeholder='Confirm Password' 
        value={confirmpwd}
        onChangeText={onChangeConfirmPassword}
        secureTextEntry 
      />
    </View>
  )
}

export default CreatePassword

const styles = StyleSheet.create({})