import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import splashText1 from '../../../assets/splash-text-1.png'
import splashText2 from '../../../assets/splash-text-2.png'

function Loading({navigation}) {
    // Navigates the signin page.
    const onPress = ({}) => {
        navigation.navigate('signin')
    }
    
    return (
        // Creates a splash page view.
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={splashText1} />
            <Image source={splashText2} />
        </TouchableOpacity>
    )
}

// Creates a style sheet with flex.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Loading