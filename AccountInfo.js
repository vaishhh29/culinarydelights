// AccountInfo.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TextInput, ImageBackground } from 'react-native';
import { auth, firestore } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

const AccountInfo = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const currentUser = auth.currentUser;

      if (currentUser) {
        const userId = currentUser.uid;
        const userDocRef = doc(firestore, 'users', userId);

        try {
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            setUserInfo(userDocSnap.data());
          }
        } catch (error) {
          console.error('Error fetching user info ', error);
        }
      }
    };

    fetchUserInfo();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigation.navigate('LoginScreen'); 
    } catch (error) {
      console.error('Error signing out ', error);
    }
  };

  return (
    <ImageBackground
      source={require('./assets/img/account.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Account Information</Text>
        {userInfo ? (
          <View style={styles.infoContainer}>
            <InfoItem label="USERNAME          " value={userInfo.username} />
            <InfoItem label="EMAIL                " value={userInfo.email} />
            <InfoItem label="PHONE NUM        " value={userInfo.phoneNumber} />
            <InfoItem label="DATE OF BIRTH  " value={userInfo.dateOfBirth} />
            <InfoItem label="GENDER             " value={userInfo.gender} />
          </View>
        ) : (
          <Text>Loading...</Text>
        )}
        <View style={styles.but}>
          <Button title="Logout" onPress={handleLogout} color={'brown'} />
        </View>
      </View>
    </ImageBackground>
  );
};

const InfoItem = ({ label, value }) => (
  <View style={styles.infoRow}>
    <Text style={styles.label}>{label}:</Text>
    <TextInput
      style={styles.valueInput}
      editable={false}
      value={value}
      placeholder={`Enter ${label}`}
      placeholderTextColor="#999"
    />
  </View>
);

const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop:20
    },
    but:{
       
        width: '50%',
    },
    headingContainer: {
      marginBottom: 20,
      alignItems: 'center',
    },
    heading: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'brown',
      marginBottom:10,
      letterSpacing: 1,
    
    },
    infoContainer: {
      borderRadius: 8,
      padding: 15,
      marginBottom: 20,
      width: '100%',
      
    },
    infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    valueInput: {
      flex: 1,
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      paddingHorizontal: 10,
      backgroundColor: 'white',
      color: '#333',

    },
  });

export default AccountInfo;
