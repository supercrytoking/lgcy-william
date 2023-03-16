import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { mainBackgroundColor } from '../../../constants/style'
import female from '../../../../assets/avatar/Photo.png'
import Testing12345 from '../../../../assets/avatar/Testing12345.png'
import Ashleylepore from '../../../../assets/avatar/Ashleylepore.png'
import Katiemorrison from '../../../../assets/avatar/Katiemorrison.png'
import DBWruble from '../../../../assets/avatar/DBWruble.png'
import burhans from '../../../../assets/avatar/burhans.jpg'
import image1 from '../../../../assets/gallery/1.jpg'
import image2 from '../../../../assets/gallery/2.jpg'
import NoteItem from '../../../components/notification/NoteItem'
import InviteItem from '../../../components/notification/InviteItem'

const Notification = ({ navigation }) => {
  const onNavigate = (page) => {
    navigation.navigate(page);
  }
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#eeeeee', borderBottomWidth: 1, paddingBottom: 10 }}>
        <TouchableOpacity style={{ flex: 1, }} onPress={() => onNavigate('notification')}>
          <Text style={{ textAlign: 'center', fontSize: 17 }}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, borderLeftColor: 'gray', borderLeftWidth: 1 }} onPress={() => onNavigate('inbox')}>
          <Text style={{ textAlign: 'center', fontSize: 15 }}>Inbox</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 40, paddingBottom: 10 }}>
        <NoteItem username={'Testing12345'} avatar={Testing12345} post={image1}>{'commented on your post'}</NoteItem>
        <NoteItem username={'Testing12345'} avatar={Testing12345} post={image2}>{'liked your post'}</NoteItem>
        <InviteItem username={'Ashleylepore'} avatar={Ashleylepore} timelineTitle={'timeline title'} isInvited={false}>{'is following your timeline'}</InviteItem>
        {/* <NoteItem username={'Katiemorrison'} avatar={Katiemorrison} post={image2}>{'commented on your post'}</NoteItem> */}
        {/* <NoteItem username={'Katiemorrison'} avatar={Katiemorrison} post={image2}>{'commented on your post'}</NoteItem> */}
        <InviteItem username={'DBWruble'} avatar={DBWruble} timelineTitle={'timeline title'} isInvited={true}>invited you to join the timeline</InviteItem>
        <NoteItem username={'Katiemorrison'} avatar={Katiemorrison} post={image1}>tagged you in a post</NoteItem>
        <NoteItem username={'burhans'} avatar={burhans} post={image2}>{'tagged you in a post'}</NoteItem>
        {/* <NoteItem username={'Katiemorrison'} avatar={Katiemorrison} post={image1}>{'commented on your post'}</NoteItem> */}
        {/* <NoteItem username={'Katiemorrison'} avatar={Katiemorrison} post={image2}>{'commented on your post'}</NoteItem> */}
        <View style={{height: 50}}></View>
      </ScrollView>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainBackgroundColor,
  }
})