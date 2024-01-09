import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import FloatingButton from '../../components/FloatingButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './Messages.styles'
import ContentInputModal from '../../components/modal/ContentInputModal'
import { authInstance, database } from '../../../firebaseConfig'
import { onValue, push, ref,set } from "firebase/database";
import parseContentData from '../../utils/parseContentData'
import MessageCard from '../../card/MessageCard'


const Messages = () => {
  const [inputModalVisible, setInputModalVisible] = useState(false)
  const [contentList, setContentList] = useState([])

  useEffect(() => {
    onValue(ref(database,'messages/'),(snapshot) => {
      const contentdata = snapshot.val();
      //bos geliyorsa herhangi bir işlem yapma
      if(!contentdata){
        return;
      }
      const parsedData=parseContentData(contentdata)
      setContentList(parsedData)
     
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
    const messageRef=ref(database,'messages/')
    const newMessageRef=push(messageRef)
    
    set(newMessageRef,contentObject)

  }

  const renderContent=({item})=>{
    return <MessageCard message={item}/>

  }
  



  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={contentList}
      renderItem={renderContent}
    
      />
      

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