import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './auth/Login/Login';
import Sign from './auth/Sign/Sign';
import FlashMessage from "react-native-flash-message";
import Messages from './Messages/Messages';
import colors from '../styles/colors';


export default function App() {
  const Stack = createNativeStackNavigator();
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
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Message" component={Messages} 
           options={{ title: 'dertler' ,headerTintColor:colors.darkorange }}/>
          <Stack.Screen name="AuthStack" component={AuthStack} />

        </Stack.Navigator>
        <FlashMessage position="top" />
      </NavigationContainer>
   



  );
}

