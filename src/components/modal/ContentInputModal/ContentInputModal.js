import { View, Text, TextInput, } from 'react-native'
import React, { useState } from 'react'
import styles from './ContentInputModal.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../../Button'
import Modal from "react-native-modal";
const ContentInputModal = ({ visible, onClose, onSend }) => {
    const [text, setText] = useState(null)

    function handleSend(){
        if(!text){
          return;  
        }

        onSend(text);
        setText(null);
        
    }

    return (
        <Modal 
            style={styles.modal}
            isVisible={visible}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
            swipeDirection="down"
            >
 
            <View style={styles.container}>
                <View style={styles.input_container}>
                    <TextInput
                    placeholder='Darla hadi milleti..'
                    onChangeText={setText} 
                    multiline
                    />
                </View>
               
                <Button title="Gönder" onPress={handleSend} />


            </View>
        </Modal>
    )
}

export default ContentInputModal