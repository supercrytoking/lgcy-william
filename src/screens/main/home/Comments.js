import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'
import { mainBackgroundColor } from '../../../constants/style'
import wallPaper from '../../../../assets/gallery/wallpaper.png'
import UserComment from '../../../components/general/UserComment'

const Comments = () => {
  return (
    <View style={styles.container}>
      <View style={{paddingTop: 5, paddingLeft: 20, paddingRight: 20}}>
        <UserComment avatar={wallPaper} name={'Username'} content={'comment on post'} />
        <UserComment avatar={wallPaper} name={'Username'} content={'comment on post'} />
        <UserComment avatar={wallPaper} name={'Username'} content={'comment on post'} />
        <UserComment avatar={wallPaper} name={'Username'} content={'comment on post'} />
        <UserComment avatar={wallPaper} name={'Username'} content={'comment on post'} />
      </View>
      <View style={{flexDirection: 'row', paddingLeft: 20, paddingRight: 20}}>
        <TextInput placeholder='comment' style={{fontSize: 15, height: 30, width: '80%'}} theme={{colors: {primary: '#000000'}}} mode='outlined' />
        <Button theme={{colors: {primary: '#000000'}}} labelStyle={{fontSize: 17, lineHeight: 22}} >Post</Button>
      </View>
    </View>
  )
}

export default Comments

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: mainBackgroundColor
  }
})