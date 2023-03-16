import { SafeAreaView, ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { mainBackgroundColor } from '../../../../constants/style'
import { Image } from 'react-native'
import wallPaper from '../../../../../assets/gallery/wallpaper.png'
import image1 from '../../../../../assets/gallery/1.jpg'
import image2 from '../../../../../assets/gallery/2.jpg'
import image3 from '../../../../../assets/gallery/3.jpg'
import image4 from '../../../../../assets/gallery/4.jpg'
import image5 from '../../../../../assets/gallery/5.jpg'
import image6 from '../../../../../assets/gallery/6.jpg'
import image7 from '../../../../../assets/gallery/7.jpg'
import image8 from '../../../../../assets/gallery/8.jpg'
import image9 from '../../../../../assets/gallery/9.jpg'
import image10 from '../../../../../assets/gallery/10.jpg'
import image11 from '../../../../../assets/gallery/11.jpg'
import image12 from '../../../../../assets/gallery/12.jpg'
import image13 from '../../../../../assets/gallery/13.jpg'
import image14 from '../../../../../assets/gallery/14.jpg'
import image15 from '../../../../../assets/gallery/15.jpg'
import image16 from '../../../../../assets/gallery/16.jpg'
import image17 from '../../../../../assets/gallery/17.jpg'

function Photo({ navigation }) {

  // Sets the headers
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => onNavigate('mediaPost', selectedId)}>
          <Text style={{fontSize: 17, marginRight : 10, color: '007AFF'}}>Next</Text>
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => onNavigate('home')}>
          <Text style={{fontSize: 17, marginLeft : 10, }}>Cancel</Text>
        </TouchableOpacity>
      ),
    })
  })

  // Returns an array of images.
  const imagesArray = [
    { id: 0, image: image1, selected: 0 },
    { id: 1, image: image2, selected: 0 },
    { id: 2, image: image3, selected: 0 },
    { id: 3, image: image4, selected: 0 },
    { id: 4, image: image5, selected: 0 },
    { id: 5, image: image6, selected: 0 },
    { id: 6, image: image7, selected: 0 },
    { id: 7, image: image8, selected: 0 },
    { id: 8, image: image9, selected: 0 },
    { id: 9, image: image10, selected: 0 },
    { id: 10, image: image11, selected: 0 },
    { id: 11, image: image12, selected: 0 },
    { id: 12, image: image13, selected: 0 },
    { id: 13, image: image14, selected: 0 },
    { id: 14, image: image15, selected: 0 },
    { id: 15, image: image16, selected: 0 },
    { id: 16, image: image17, selected: 0 },
  ]

  const [images, setImage] = useState(imagesArray);

  const [selectedId, setSelectedId] = useState(0);

  // Sets the selected image id.
  const selectImage = (id) => {
    setSelectedId(id)
  }

  // Navigate to the selected image.
  const onNavigate = (page) => {
    navigation.navigate({ name: page, params: { imageId: selectedId } });
  }

  function renderItem({ item }) {
    return (
      <TouchableOpacity style={{ flex: 1, width: 100, padding: 3 }} onPress={() => setSelectedId(item['id'])}>
        <Image source={item['image']} style={item['id'] === selectedId ? styles.imageItemSelected : styles.imageItem} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.wallPaper}>
        <Image source={imagesArray[selectedId]['image']} style={{ height: '100%', resizeMode: 'repeat' }} />
      </View>
      <FlatList data={images} renderItem={renderItem} numColumns={4} keyExtractor={item => item['id']} />
    </View>
  )
}

export default Photo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainBackgroundColor,
    // justifyContent: 'space-between'
  },
  wallPaper: {
    height: '40%'
  },
  imageContent: {
    height: '60%',
    flexDirection: 'row',
    marginBottom: 20
  },
  imageItem: {
    width: '100%',
    height: 100,
  },
  imageItemSelected: {
    width: '100%',
    height: 100,
    borderColor: 'red',
    borderWidth: 2
  },

})