import { StyleSheet, Text, View } from 'react-native'
import React , { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { authTextInputStyle } from '../../constants/style'

const CreateUsername = (props) => {

  const [username, setUserName] = useState("")
  const onChange=(e)=>{
    setUserName(e)
    console.log("username", username);

    if(username!==""){
      props.validUserName(2,true);
    }else{
      props.validUserName(2,false);
    }
  }

  return (
    <View>
      <TextInput 
        style={authTextInputStyle} 
        placeholder='Username' 
        value={username}
        onChangeText={onChange}
      />
    </View>
  )
}

export default CreateUsername

const styles = StyleSheet.create({})