import { Image, StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { mainBackgroundColor } from '../../../constants/style'
import { AntDesign } from '@expo/vector-icons';
import { Avatar } from '@rneui/base';
import UserCard from '../../../components/general/UserCard';
import wallPaper from '../../../../assets/gallery/wallpaper.png'
import female from '../../../../assets/avatar/Photo.png'

function PostExpansion({ navigation }) {
  const onPress = (page) => {
    navigation.navigate(page);
  }
  return (
    <ScrollView style={styles.contanier}>
      <View style={styles.wallPaperView}>
        <Image source={wallPaper} style={{ width: '100%' }} />
      </View>
      <View style={styles.advantureInfom}>
        <View style={{ flex: 11 }}>
          <TouchableOpacity onPress={()=>{onPress('likes')}}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
              <AntDesign name="hearto" size={24} color="black" />
              <Text style={{ paddingLeft: 10 }}>10 Likes</Text>
            </View>
          </TouchableOpacity>
          <Text style={{ fontSize: 17, paddingTop: 5 }}>rachelmorrison</Text>
          <Text style={{ fontSize: 13, paddingTop: 5 }}>This is the caption. </Text>
          <TouchableOpacity onPress={() => onPress('comment')}>
            <Text style={{ fontSize: 12, paddingTop: 5, color: '#ADADAD' }}>10 Comments</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
            <Text>April 30, 2021</Text>
            <Text>Venice Beach, United States</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Avatar source={wallPaper} rounded size={32} />
        </View>
      </View>
      <View style={styles.suggested}>
        <Text style={{ fontSize: 15, lineHeight: 50 }}>Suggested</Text>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <UserCard source={female} title='rachelmorrison' />
          <UserCard source={female} title='rachelmorrison' />
          <UserCard source={female} title='rachelmorrison' />
        </View>
      </View>
    </ScrollView>
  )
}

export default PostExpansion

const styles = StyleSheet.create({
  contanier: {
    backgroundColor: mainBackgroundColor
  },
  wallPaperView: {
    flex: 1,
  },
  advantureInfom: {
    padding: '5%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  suggested: {
    height: '35%',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '15%'
  }
})