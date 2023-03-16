import { Button, Modal, StyleSheet, Text, View } from 'react-native'

const AlertModal = ({title}) => {
    <Modal
         transparent={true}
         visible={this.state.visible}
         animationIn="slideInLeft"
         animationOut="slideOutRight">
        <View
           style={{
             backgroundColor: 'rgba(0,0,0,0.2)',
             alignItems: 'center',
             justifyContent: 'center',
             flex: 1,
           }}>
           <View
             style={{
               width: '90%',
               backgroundColor: 'white',
               padding: 22,
               justifyContent: 'center',
               alignItems: 'center',
               borderRadius: 4,
               borderColor: 'rgba(0, 0, 0, 0.1)',
             }}>
             <Text>{title}</Text>
             <Button
               onPress={() => { this.setState({ visible: false }) }}
               title="Okay"
             />
           </View>
        </View>
    </Modal>
}

export default AlertModal

const styles = StyleSheet.create({
})
