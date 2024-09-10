import React, { useState, useEffect } from 'react';
import {View, Text,TextInput,Button,StyleSheet,ImageBackground,KeyboardAvoidingView,Platform,TouchableWithoutFeedback,Keyboard,} from 'react-native';
import FlipCard from 'react-native-flip-card';
import { auth, firestore } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [state, setState] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        console.error('Email and password are required');
        return;
      }

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setEmail('');
      setPassword('');
      console.log('Logged in user:', user);
      navigation.navigate('cuisines');
    } catch (error) {
      console.error('Login error:', error.code, error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      if (!email || !password || !username || !phoneNumber || !dateOfBirth || !gender) {
        console.error('All fields are required for sign up');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        console.error('Invalid email format');
        return;
      }

      if (password.length < 6) {
        console.error('Password must be at least 6 characters long');
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('New user created:', user);

      const currentUser = auth.currentUser;

      if (currentUser) {
        const userId = currentUser.uid;
        console.log('User ID:', userId);

        const userDocRef = doc(firestore, 'users', userId);
        await setDoc(userDocRef, {
          username: username,
          email: email,
          phoneNumber: phoneNumber,
          dateOfBirth: dateOfBirth,
          gender: gender,
        });
      } else {
        console.error('No user is currently authenticated');
      }

      console.log('User details stored in Firestore:', {
        username: username,
        email: email,
        phoneNumber: phoneNumber,
        dateOfBirth: dateOfBirth,
        gender: gender,
      });

      // Reset form fields
      setEmail('');
      setPassword('');
      setUsername('');
      setPhoneNumber('');
      setDateOfBirth('');
      setGender('');

      navigation.navigate('cuisines');
    } catch (error) {
      console.error('Sign-up error:', error.code, error.message);
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (event) => {
        setKeyboardHeight(event.endCoordinates.height);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardHeight(0);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        enabled
      >
        <ImageBackground
          source={require('./recipeback.jpg')}
          style={styles.background}
        >
          <View style={styles.container}>
          <FlipCard
  style={styles.flipCardContainer}
  friction={6}
  perspective={1000}
  flipHorizontal={true}
  flipVertical={false}
  flip={isFlipped}
  clickable={true}
>
              {/* Front Side: Login Form */}
              <View style={styles.loginBox}>
                <Text style={styles.log}>LOGIN</Text>
                <View style={styles.fb}>
                  <Button title="Sign Up" onPress={flipCard} color="purple" />
                </View>
                <Text style={styles.tx1}>Email:</Text>
                <TextInput
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  style={styles.input}
                />
                <Text style={styles.tx2}>Password:</Text>
                <TextInput
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry
                  style={styles.input}
                />
                <View style={styles.button1}>
                  <Button title="Submit" onPress={handleLogin} color="purple" />
                </View>
              </View>

              {/* Back Side: SignUp Form */}
              <View style={styles.signupBox}>
  <Text style={styles.sig}>SIGNUP</Text>
  <View style={styles.sigb}>
    <Button title="Login" onPress={flipCard} color="purple" />
  </View>
  <View style={styles.inputRow}>
    <View style={styles.inputColumn}>
      <Text style={styles.tx1}>Username:</Text>
      <TextInput
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
      />
    </View>
    <View style={styles.inputColumn}>
      <Text style={styles.tx1}>Email:</Text>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
    </View>
  </View>
  <View style={styles.inputRow}>
    <View style={styles.inputColumn}>
      <Text style={styles.tx1}>Phone Number:</Text>
      <TextInput
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        keyboardType="phone-pad"
        style={styles.input}
      />
    </View>
    <View style={styles.inputColumn}>
      <Text style={styles.tx1}>Date of Birth:</Text>
      <TextInput
        value={dateOfBirth}
        onChangeText={(text) => setDateOfBirth(text)}
        placeholder="MM/DD/YYYY"
        style={styles.input}
      />
    </View>
  </View>
  <View style={styles.inputRow}>
    <View style={styles.inputColumn}>
      <Text style={styles.tx1}>Gender:</Text>
      <TextInput
        value={gender}
        onChangeText={(text) => setGender(text)}
        placeholder="Male/Female/Other"
        style={styles.input}
      />
    </View>
    <View style={styles.inputColumn}>
      <Text style={styles.tx2}>Password:</Text>
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
    </View>
  </View>
  <View style={styles.flipButton}>
    <Button title="Submit" onPress={handleSignUp} color="purple" />
  </View>
</View>
         <Button
              title="Account Info"
              onPress={() => navigation.navigate('AccountInfo')}
            />

            </FlipCard>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flipCardContainer: {
    width: 320,
    height: 500,
  },
  input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    width: '100%', 
    backgroundColor: 'lightgrey',
    margin:6,
    fontSize:15,
    color:'black'
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    paddingBottom: 100,
  
  },
  sig: {
    color: 'white',
    fontSize: 24,
    left: 140,
    marginBottom: 20,
    marginTop: 10,
  },
  tx1: {
    color: 'white',
    fontSize: 17,
    marginBottom:5
  },
  tx2: {
    color: 'white',
    fontSize: 17,
    marginBottom:5
  },
  sigb:{
    position: 'absolute',
    top: 10,
    left: 290,
    marginVertical: 10,
  },
  loginBox: {
    padding: 30,
    width: 330,
    height: 390,
    justifyContent: 'center',
    marginTop: 100,
  },
  signupBox: {
   
    width: 355,  
    height: 450,
    justifyContent:'center',
    marginTop: 25,
    paddingTop: 30,
    right:15,  
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  inputColumn: {
    flex: 1,
    marginRight: 18,
    marginLeft:10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  flipButton: {
    flex: 1,
    marginHorizontal: 25,
  },
  log: {
    color: 'white',
    marginHorizontal: 100,
    marginBottom: 15,
    fontSize: 24,
    fontWeight: 'bold',
  },
  fb: {
    position: 'absolute',
    top: 10,
    left: 250,
    marginVertical: 10,
  },
  button1:{
    marginTop:10,
    marginHorizontal:14
  }
});



export default LoginScreen;