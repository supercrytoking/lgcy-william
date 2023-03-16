import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { mainBackgroundColor } from '../../../../constants/style'
import female from '../../../../../assets/avatar/Photo.png'
import { Button, TextInput } from 'react-native-paper';
import ProfileAvatar from '../../../../components/setting/ProfileAvatar';

function ProfileSetting() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ height: '20%', alignItems: 'center', paddingTop: 20 }}>
          <ProfileAvatar image={female} size={105} onPress={() => Alert.alert('OK')} ><MaterialIcons name="camera-alt" size={20} color="white" /></ProfileAvatar>
        </View>
        <View style={{ paddingHorizontal: 50, }}>
          <View style={{ flex: 1, }}>
            <Text style={{ fontSize: 17 }} >Name</Text>
            <TextInput style={{ backgroundColor: mainBackgroundColor, }} mode='outlined' />
          </View>
          <View style={{ flex: 2, paddingTop: 20 }}>
            <Text style={{ fontSize: 17 }} >Description</Text>
            <TextInput style={{ backgroundColor: mainBackgroundColor, }} mode='outlined' numberOfLines={6} multiline={true} />
          </View>
          <View style={{ flex: 1, paddingTop: 20 }}>
            <Text style={{ fontSize: 17 }} >link</Text>
            <TextInput style={{ backgroundColor: mainBackgroundColor, }} mode='outlined' />
          </View>
          <View style={{ flex: 1, paddingTop: 20 }}>
            <Button mode='contained' style={{ backgroundColor: '#000000', borderRadius: 10, marginTop: 10 }} >Save</Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileSetting

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainBackgroundColor
  },
})