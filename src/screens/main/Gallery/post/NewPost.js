import { StyleSheet, Text, View, TouchableOpacity, Image, Switch, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome } from '@expo/vector-icons';
import { mainBackgroundColor } from '../../../../constants/style';
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
import { Input } from '@rneui/base';
import { TextInput } from 'react-native-paper';

function NewPost({ navigation, route }) {
    const onNavigate = (page) => {
        navigation.navigate(page);
    }

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
    ];

    const [image, setImage] = useState(0);

    const [commenting, setCommenting] = useState(0);
    const [linking, setLinking] = useState(0);
    const [twittering, setTwittering] = useState(0);

    // Sets the navigation and route parameters.
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={()=>onNavigate('newShare')}>
                    <Text style={{fontSize: 18, color: 'blue'}}>Next</Text>
                </TouchableOpacity>
            ),
        });
        setImage(route.params?.imageId);
    });

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showDatepicker = () => {
        setShow(true);
    };

    return (
        <View style={styles.container}>
            <View style={{ height: '20%' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 4 }}>
                        <Image source={imagesArray[image]['image']} style={{ width: "100%", height: 100 }} />
                    </View>
                    <View style={{ flex: 6 }}>
                        <TouchableOpacity style={{ paddingLeft: 10 }}>
                            {/* <Text style={{ fontSize: 13 }}>Share the story...</Text> */}
                            {/* <TextInput style={{ fontSize: 13 }}>Share the story...</TextInput> */}
                            <TextInput 
                                style={{ backgroundColor: 'white', fontSize: 13,  }}
                                mode='flat'
                                placeholder='Please enter title'
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ paddingTop: 20 }}>
                    <View>
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between'}} onPress={showDatepicker}>
                            <View style={{flex: 2, }}>
                                <Text style={{ fontSize: 16, lineHeight: 22 }}>{date.toLocaleString()}</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end', paddingEnd: 15 }}>
                                <FontAwesome name="calendar" size={24} color="black" />
                            </View>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flex: 1 }}>
                                <Text>Turn off Commenting</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Switch onValueChange={() => setCommenting(!commenting)} value={commenting} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flex: 1 }}>
                                <Text>Turn off Linking</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Switch onValueChange={() => setLinking(!linking)} value={linking} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flex: 1 }}>
                                <Text>Share on Twitter</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Switch onValueChange={() => setTwittering(!twittering)} value={twittering} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                            <View style={{justifyContent: 'center', alignItems:'flex-start'}}>
                                <Text>Location</Text>
                            </View>
                            <View style={{alignItems: 'flex-start'}}>
                                <Button
                                    mode='contained'
                                    color='black'
                                    style= {styles.addLocation}
                                    onPress={()=>onNavigate('geolocation')}
                                    title='Add Location'></Button>
                            </View>
                        </View>
                        <View>
                            {show && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={'date'}
                                    is24Hour={true}
                                    onChange={onChange}
                                />
                            )}
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default NewPost

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: mainBackgroundColor,
        padding: 30
    },
    addLocation : {
        width: '226px',
        opacity: 0.5,
        border: '1px solid #000000',
        backgroundColor: mainBackgroundColor
    }
})