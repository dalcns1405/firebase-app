import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import Login from './auth/Login/Login';
import Sign from './auth/Sign/Sign';
import FlashMessage from "react-native-flash-message";
import Messages from './Messages/Messages';
import colors from '../styles/colors';
import { useEffect, useState } from 'react';
import { auth } from '../../firebaseConfig';


const Stack = createNativeStackNavigator();

export default function App() {

  const [userSession, setUserSession] = useState()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUserSession(!!user)

    })

  }, [])



  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>

    )

  }

  return (

    <NavigationContainer>
      <Stack.Navigator>
        {
          !userSession ? (
            <Stack.Screen name="AuthStack" component={AuthStack}
              options={{  headerShown:false }} />)
            : (
            <Stack.Screen name="Message" component={Messages}
              options={{ title: 'dertler',fontWeight:'bold', headerTintColor: colors.darkorange ,headerTitleAlign:'center', 
              headerRight:()=><Button color='gray' onPress={()=>auth.signOut()} title='Acil çıkış! '/>}}
            /> )


        }



      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>




  );
}

