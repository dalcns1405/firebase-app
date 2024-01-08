import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './FloatingButton.style'

const FloatingButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} > 
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  )
}

export default FloatingButton