import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { mainBackgroundColor } from '../../../constants/style'

const Inbox = ({navigation}) => {
  const onNavigate = (page) => {
    navigation.navigate(page);
  }
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#eeeeee', borderBottomWidth: 1, paddingBottom: 10 }}>
        <TouchableOpacity style={{ flex: 1 }} onPress={ () => onNavigate('notification') }>
          <Text style={{ textAlign: 'center', fontSize: 15 }}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, borderLeftColor: 'gray', borderLeftWidth: 1 }} onPress={() => onNavigate('inbox')}>
          <Text style={{ textAlign: 'center', fontSize: 17 }}>Inbox</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Inbox

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainBackgroundColor,
  }
})