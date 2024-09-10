import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyC0J3DVcDBHWtvKAJm1rqFHXvLYGMxVsC0",
  authDomain: "delights-e145e.firebaseapp.com",
  databaseURL: "https://delights-e145e-default-rtdb.firebaseio.com",
  projectId: "delights-e145e",
  storageBucket: "delights-e145e.appspot.com",
  messagingSenderId: "493279179249",
  appId: "1:493279179249:web:30917cc099a7b1d94b1450",
  measurementId: "G-Y9WFP2B9WX"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const firestore = getFirestore(app);

export { auth, firestore };
