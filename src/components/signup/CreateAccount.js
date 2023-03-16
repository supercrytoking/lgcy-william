import { Text, View } from 'react-native'
import React, {useState} from 'react'
import { TextInput } from 'react-native-paper'
import DateTimePicker from '@react-native-community/datetimepicker';

import { authTextInputStyle } from '../../constants/style'

const CreateAccount = () => {
  const [date, setDate] = React.useState(new Date(1598051730000));
  const [mode, setMode] = React.useState('date');
  const [show, setShow] = React.useState(false);

  const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setShow(false);
      setDate(currentDate);
  };

  const showDatepicker = ( )=> {
      setShow(true);
  };

    return (
        <View>
            <TextInput 
              style={authTextInputStyle} 
              placeholder='Name' 
            />
            <TextInput 
              style={{ marginTop: 5, ...authTextInputStyle }} 
              placeholder='Email' 
            />
            <TextInput 
              style={{ marginTop: 5, ...authTextInputStyle }} 
              placeholder='Phone Number' 
            />
            <TextInput 
              style={{ marginTop: 5, ...authTextInputStyle }} 
              placeholder='Date of Birth' 
              onPressIn={showDatepicker}
              value={date.toLocaleDateString()}
            />
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={'date'}
                  is24Hour={true}
                  onChange={onChange}
                />
                )}
            <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 50 }}>By signing up you agree to our Terms and Privacy Policy</Text>
            <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 20 }}>Already have an account?</Text>
        </View>
    )
}

export default CreateAccount
