import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button } from 'react-native-paper';
import splashText1 from '../../../../assets/splash-logo/lgcy-white-1.png';
import splashText2 from '../../../../assets/splash-logo/lgcy-white-2.png';
import { mainBackgroundColor } from '../../../constants/style';

const SignIn = (props) => {

    const { navigation } = props;

    const [useremail,setUserEmail]=useState('');
    const [password,setPassword]=useState('');

    // Navigates to the specified page.
    const onPress = (page) => {
        navigation.navigate(page)
    }

    const onSignin = () => {
       
        if(useremail==""){
          Alert.alert('Please enter Username', '', [
            {text: 'Okay', style: 'center',onPress: () => console.log('OK Pressed')},
          ]);
        }
        else if(password==""){
            Alert.alert('Please enter Password', '', [
                {text: 'Okay', style: 'center',onPress: () => console.log('OK Pressed')},
              ]);
            }
        }

    return (
        // Creates a sign - up button for a user.
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={splashText1} />
                <Image source={splashText2} style={{ top: 40 }} />
            </View>
            <View style={styles.actionView}>
                <TextInput 
                    value={useremail}
                    onChangeText={setUserEmail}
                    placeholder='Email or Username' 
                    style={{ backgroundColor: mainBackgroundColor, textAlign: 'center' }} />
                <TextInput 
                    value={password}
                    onChangeText={setPassword}
                    placeholder='Password' 
                    style={{ backgroundColor: mainBackgroundColor, textAlign: 'center', top: 20 }} secureTextEntry />
            </View>
            <View style={styles.buttonGroup}>
                <Button 
                    mode='contained' 
                    style={{ backgroundColor: '#000000', borderRadius: 10, }} 
                    onPress={()=>onPress('main')} >Sign in</Button>
                <TouchableOpacity style={{ alignItems: 'center', marginTop: 10 }} onPress={()=>onPress('forgotPassword')}>
                    <Text>Forgot Password?</Text>
                </TouchableOpacity>
                <Button mode='contained' style={{ backgroundColor: '#000000', borderRadius: 10, marginTop: 10 }} onPress={() => onPress('signup')} >Sign up</Button>
            </View>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    // Adds a stylesheet to the container
    container: {
        flex: 1,
        backgroundColor: mainBackgroundColor
    },
    // Adds a stylesheet to the logoContainer
    logoContainer: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    // Adds a stylesheet to the actionView
    actionView: {
        flex: 1,
        marginLeft: '15%',
        marginRight: '15%'
    },
    // Adds a stylesheet to the buttonGroup
    buttonGroup: {
        flex: 1,
        marginLeft: '15%',
        marginRight: '15%'
    }
})