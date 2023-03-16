import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { mainBackgroundColor } from '../../../../constants/style'
import { TextInput, Button } from 'react-native-paper'

const PhoneNumber = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{marginVertical: 20}}>
        <Text>Phone Number</Text>
        <TextInput mode='outlined'  />
      </View>
      <View style={{ marginVertical: 50, marginHorizontal: 50 }}>
        <Button mode='contained' style={{ backgroundColor: '#000000', borderRadius: 10, marginTop: 10 }} onPress={()=> navigation.navigate('accont')} >Save</Button>
      </View>
    </View>
  )
}

export default PhoneNumber

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: mainBackgroundColor,
        padding: 50
    }
})