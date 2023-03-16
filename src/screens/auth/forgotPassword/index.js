import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import SignUpTitile from '../../../components/signup/SignUpTitile';
import { Button } from 'react-native-paper';
import EmailInput from '../../../components/forgotpassword/EmailInput';
import ReInputPassword from '../../../components/forgotpassword/ReInputPassword';

const ForgotPassword = (props) => {
    // Sets the const for a given step.
    const {navigation} = props;
    const [step, useStep] = useState(0);

    const onNext = () => {
        useStep(step + 1);
    }

    const onDone = () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <SignUpTitile title={'Forgot Password'} />
            </View>
            <View style={styles.formGroup}>
                {(() => {
                    if(step === 0){
                        return <EmailInput />
                    }else {
                        return <ReInputPassword />
                    }
                })()}
            </View>
            <View style={styles.buttonView}>
                <Button mode='contained' style={{ backgroundColor: '#000000', borderRadius: 10, width: '100%'}} onPress={step === 0 ? onNext : onDone}>{step !== 1 ? 'Next' : 'Done'}</Button>
            </View>
        </View>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5'
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
        // height: '50%'
    },
    buttonView: {
        // height: '20%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 50
    }

})