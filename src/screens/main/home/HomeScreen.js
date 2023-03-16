import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { mainBackgroundColor } from '../../../constants/style'
import { Avatar } from '@rneui/base';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import UserCard from '../../../components/general/UserCard';
import logo from '../../../../assets/splash-logo/lgcy-white-1.png'
import female from '../../../../assets/avatar/Photo.png'
import john from '../../../../assets/avatar/john.png'
import wallPaper from '../../../../assets/gallery/wallpaper.png'
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = ({navigation}) => {
  const onPress = (page) => {
    navigation.navigate(page);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
        <Image source={logo} style={{width: 70, height: 35}} />
        <TouchableOpacity>
          <AntDesign name="plussquareo" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.suggested}>
          <Text style={{fontSize: 15, lineHeight: 50}}>Suggested</Text>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <UserCard source={female} title='rachelmorrison'/>
            <UserCard source={female} title='rachelmorrison'/>
            <UserCard source={female} title='rachelmorrison'/>
          </View>
        </View>
        <View style={styles.wallPaper}>
          <TouchableOpacity onPress={()=>onPress('postExpansion')}>
            <Image source={wallPaper} style={{width: '100%'}} />
          </TouchableOpacity>
        </View>
        <View style={styles.wallPaperTitle}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20}}>
            <View style={{flex: 1}}>
              <Avatar size={26} rounded source={john} />
            </View>
            <View style={{flex: 6}}>
              <Text style={{fontSize: 17}}>rachelmorrison</Text>
              <Text style={{fontSize: 13}}>My adventure in santa cruz</Text>
            </View>
            <View style={{flex: 1}}>
              <TouchableOpacity>
                <Ionicons name="ios-heart-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainBackgroundColor
  },
  header: {
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  suggested: {
    height: '30%',
    paddingTop: 40,
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  wallPaper: {
    height: '50%',
    paddingTop: 15,
  },
  wallPaperTitle: {
    height: '10%',
    marginTop: 45
  },
})