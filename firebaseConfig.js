import { initializeApp } from 'firebase/app';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence, getAuth ,signInWithEmailAndPassword} from "firebase/auth"; 
import { getDatabase,ref,set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC3HaP5zfPQ3eFnXMtFfpY7QNvAD-sSIP4",
    authDomain: "patika-e4f5b.firebaseapp.com",
    projectId: "patika-e4f5b",
    storageBucket: "patika-e4f5b.appspot.com",
    messagingSenderId: "741460396742",
    appId: "1:741460396742:web:0da62c9ab32b4c1520e5c7"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage), });
const authInstance=getAuth();

const database = getDatabase();




export {app,auth,authInstance,database} ;
