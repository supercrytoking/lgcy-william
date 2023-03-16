import { Alert, StyleSheet, Modal, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper'
import SignUpTitile from '../../../components/signup/SignUpTitile'
import CreateAccount from '../../../components/signup/CreateAccount'
import CreateUsername from '../../../components/signup/CreateUsername'
import CreatePassword from '../../../components/signup/CreatePassword'
import AlertModal from '../../../components/main/AlertModal'
import { mainBackgroundColor } from '../../../constants/style'

const SignUp = ({ navigation }) => {
  const [step, useStep] = useState(0);
  const [validate2,setValidate2]=useState(false);
  const [validate3,setValidate3]=useState(false);
  const [validate4,setValidate4]=useState(false);
  const [pass,setPass]=useState({pass:"",pass1:""})
  
  const title = [
    'Create your account',
    'Create Username',
    'Password'
  ];
  const onNext = () => {
    if(step==0){
      useStep(step+1);
    }
    if(validate2==false && step==1){
      Alert.alert('Please enter Username', '', [
        {text: 'Okay', style: 'center',onPress: () => console.log('OK Pressed')},
      ]);
    }
    else if(validate2==true){
      useStep(step+1);
      setValidate2(false)
    } 
    if(validate3==true && step==2){
      console.log(pass);
      if(pass.pass!==pass.pass1){
        Alert.alert('No match password', '', [
          {text: 'Okay', style: 'center',onPress: () => console.log('OK Pressed')},
        ]);
      } else if(pass.pass==''){
        Alert.alert('Please enter password', '', [
          {text: 'Okay', style: 'center',onPress: () => console.log('OK Pressed')},
        ]);
      }
    }
  }

  const onSiginUp = () => {
    console.log("validate", validate3, validate4);
    if(validate3==false && step==2){
      Alert.alert('Please enter Password', '', [
        {text: 'Okay', onPress: () => console.log('OK Pressed')},
      ]);
    }
    else if(validate3==true && validate4==false){
      Alert.alert('Password do not match', '', [
        {text: 'Okay', onPress: () => console.log('OK Pressed')},
      ]);
    } 
    else if(validate3==true && validate4==true && step==2){
      navigation.navigate('main')
    }
  }

  const validUserName=(num, flag)=>{
    console.log("num",num,"flag",flag);
    if(num==2 && flag==true){
      setValidate2(flag);
    }
    if(num==3 && flag==true){
      setValidate3(flag);
    }
  }

  const validPassword=(pass, pass1)=>{
    setPass({pass:pass, pass1:pass1})
    // if(num==3 && flag==true){
    //   setValidate3(flag);
    // }
  }

  // const validConfirmPassword=(num, flag)=>{
  //   console.log("num",num,"flag",flag);
  //   if(num==4 && flag==true){
  //     setValidate4(flag);
  //   }
  // }


  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <SignUpTitile title={title[step]} />
      </View>
      <View style={styles.formGroup}>
        {
          (() => {
            if(step === 0){
              return <CreateAccount />
            }else if(step === 1){
              return <CreateUsername validUserName={(e,b)=>validUserName(e,b)}/>
            }else {
              return <CreatePassword validUserName={(e,b)=>validUserName(e,b)} validPassword={(pass,pass1)=>validPassword(pass,pass1)}/>
            }
          })()
        }
      </View>
      <View style={styles.buttonView}>
        <Button style={{fontSize: 17}} onPress={step!==2? onNext : onSiginUp}>{step!==2 ? 'Next' : 'Sign Up'}</Button>
      </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainBackgroundColor
  },
  titleContainer: {
    // flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 15,
    alignItems: 'center',
    height: '30%',
    // backgroundColor: 'red'
  },
  formGroup: {
    paddingRight: '15%',
    paddingLeft: '15%',
    height: '50%'
  },
  buttonView: {
    height: '20%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 50
  }

})