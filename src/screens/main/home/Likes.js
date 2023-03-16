import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserLike from '../../../components/general/UserLike'
import female from '../../../../assets/avatar/Photo.png'

const Likes = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <UserLike avatar={female} name={'username'} />
      <UserLike avatar={female} name={'username'} />
      <UserLike avatar={female} name={'username'} />
      <UserLike avatar={female} name={'username'} />
    </ScrollView>
  )
}

export default Likes

const styles = StyleSheet.create({
    container: {
        backgroundColor: '0xFFFFFF',
        paddingTop: 15,
        paddingLeft: '10%',
        paddingRight: '10%',
    }
})