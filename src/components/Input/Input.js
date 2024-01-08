import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './Input.style'

const Input = ({placeholder,value,onType,isSecure}) => {
  return (
    <View style={styles.container} > 
      <TextInput style={styles.title} placeholder={placeholder} value={value} onChangeText={onType} secureTextEntry={isSecure} />
    </View>
  )
}

export default Input