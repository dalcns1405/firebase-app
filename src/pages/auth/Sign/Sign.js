import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './Sign.styles'
import { Formik } from 'formik';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from '../../../utils/authErrorMessageParser';
import { authInstance } from "../../../../firebaseConfig"
import { SafeAreaView } from 'react-native-safe-area-context';


const Sign = ({ navigation }) => {

  const [loading, setLoading] = useState(false)

  const initialValues = {
    usermail: '',
    password: '',
    repassword: ''
  }

  function handleLogin() {
    navigation.goBack();
  }

  async function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: "Şifreler uyuşmuyor",
        type: "danger",
      });
      return;

    }

    try {
      await createUserWithEmailAndPassword(authInstance, formValues.usermail, formValues.repassword,)

      showMessage({
        message: "Kullanıcı oluşturuldu",
        type: "success",
      });
      navigation.navigate("LoginPage")
      setLoading(false)

    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: "danger",
      });
      setLoading(false)

    }

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
            <Input
              value={values.repassword}
              onType={handleChange('repassword')}
              placeholder="şifrenizi tekrar girin"
              isSecure
            />
            <Button title="Giriş yap" onPress={handleSubmit} loading={loading} />
          </>
        )}


      </Formik>
      <Button title="Geri" theme="secondary" onPress={handleLogin} />
    </SafeAreaView>
  )
}

export default Sign