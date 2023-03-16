import { StyleSheet, Text, View, Switch } from 'react-native'
import React, { PureComponent, useState } from 'react'
import SettingItem from '../../../../components/setting/SettingItem'
import { mainBackgroundColor } from '../../../../constants/style'
import { AntDesign } from '@expo/vector-icons'
import { Button } from 'react-native-paper'

function Account({ navigation }) {
  const [pushNote, setPushNote] = useState(0);
  const [directMsg, setDirectMsg] = useState(0);
  const navigates = [
    { name: 'Username', link: 'userName', actionBtn: <AntDesign name="right" size={17} color="black" />, },
    { name: 'Password', link: 'password', actionBtn: <AntDesign name="right" size={17} color="black" /> },
    { name: 'Profile Link', link: 'profileLink', actionBtn: <AntDesign name="right" size={17} color="black" /> },
    { name: 'Phone number', link: 'phoneNumber', actionBtn: <AntDesign name="right" size={17} color="black" /> },
    { name: 'Push Notification', },
    { name: 'Direct Message', },
    { name: 'Delete Account', },
  ]
  return (
    <View style={styles.container}>
      <View style={{ height: '60%', justifyContent: 'space-around' }}>
        {navigates.map((item, key) => (
          <SettingItem
            item={item['name']}
            onPress={() => {
              if (key < 4) {
                navigation.navigate(item['link'])
              }
            }} >
            {(() => {
              if (key < 4)
                return item['actionBtn']
              else if (key === 4)
                return <Switch onValueChange={() => setPushNote(!pushNote)} value={pushNote} />
              else if (key === 5)
                return <Switch onValueChange={() => setDirectMsg(!directMsg)} value={directMsg} />
            })()}
          </SettingItem>
        ))}
      </View>
      <View style={{ marginVertical: 50, marginHorizontal: 50 }}>
        <Button mode='contained' style={{ backgroundColor: '#000000', borderRadius: 10, marginTop: 10 }} onPress={()=>navigation.navigate('settingScreen')}>Save</Button>
      </View>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainBackgroundColor
  }
})