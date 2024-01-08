import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './Login.style'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import { Formik } from 'formik'
import { showMessage } from "react-native-flash-message";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { authInstance } from "../../../../firebaseConfig"
import authErrorMessageParser from '../../../utils/authErrorMessageParser'
import { SafeAreaView } from 'react-native-safe-area-context'



const Login = ({ navigation }) => {

  const [loading, setLoading] = useState(false)


  const initialValues = {
    usermail: '',
    password: '',
  }

  function handleSignUp() {
    navigation.navigate('SignPage');
  }

  async function handleFormSubmit(formValues) {
    
    try {
      setLoading(true)
      await signInWithEmailAndPassword(authInstance,formValues.usermail,formValues.password,)
      setLoading(false)
    
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: "danger",
      });

    }
    setLoading(false)

  }
  


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>bana ne ?</Text>
      <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <>

            <Input
              value={values.usermail}
              onType={handleChange('usermail')}
              placeholder="e-postanızı girin"
            />
            <Input
              value={values.password}
              onType={handleChange('password')}
              placeholder="şifrenizi girin"
              isSecure
            />
            <Button title="Giriş yap" onPress={handleSubmit} loading={loading}/>
          </>
        )}


      </Formik>
      <Button title="Kayıt ol" theme="secondary" onPress={handleSignUp} />
    </SafeAreaView>
  )
}

export default Login