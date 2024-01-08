import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import FloatingButton from '../../components/FloatingButton/FloatingButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './Messages.styles'
import ContentInputModal from '../../components/modal/ContentInputModal/ContentInputModal'
import { authInstance, database } from '../../../firebaseConfig'
import { onValue, ref,set } from "firebase/database";


const Messages = () => {
  const [inputModalVisible, setInputModalVisible] = useState(false)
  const [contentList, setContentList] = useState([])

  useEffect(() => {
    onValue(ref(database,'messages/'),(snapshot) => {
      const contentdata = snapshot.val();
      console.log(contentdata)
    });
    
   
  }, [])
  

  function handleInputToggle(){
    setInputModalVisible(!inputModalVisible)
  }

  function handleSendContent(content){
    handleInputToggle()
    sendContent(content)

  }
  

  function sendContent(content){
    const userMail=authInstance.currentUser.email


    const contentObject={
      text:content,
      username:userMail.split('@')[0],
      date:new Date().toISOString(),

    }
    set(ref(database,'messages/'),contentObject)

  }



  return (
    <SafeAreaView style={styles.container}>
      <FlatList/>

      <FloatingButton onPress={handleInputToggle}/>
      <ContentInputModal
      visible={inputModalVisible}
      onClose={handleInputToggle}
      onSend={handleSendContent}
      />
    </SafeAreaView>
  )
}

export default Messages