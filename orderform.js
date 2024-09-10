// OrderFormScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { firestore } from './firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useRoute } from '@react-navigation/native';

const OrderFormScreen = ({ navigation }) => {
  const route = useRoute();
  const { bookInfo } = route.params || {};

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

  const handleOrder = async () => {
    try {
      if (!name || !address || !phone || !pincode || !state || !country || !bookInfo) {
        console.error('All fields are required for placing an order');
        return;
      }

      const ordersCollection = collection(firestore, 'orders');
      await addDoc(ordersCollection, {
        name,
        address,
        phone,
        pincode,
        state,
        country,
        bookName: bookInfo.title,
        bookPrice: bookInfo.price,
        timestamp: new Date(),
      });

      // Display success message as an alert and clear the form
      Alert.alert(
        'Order Placed Successfully!',
        `Payment type: Cash on Delivery.\nDelivery within 4 days.\nBook: ${bookInfo.title}, Price: ${bookInfo.price}`,
        [
          { text: 'OK', onPress: () => clearForm() }
        ]
      );

      // You can add logic here to navigate to a success screen or perform other actions
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  const clearForm = () => {
    setName('');
    setAddress('');
    setPhone('');
    setPincode('');
    setState('');
    setCountry('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Order Form</Text>
        <TextInput
          placeholder="Full Name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Address"
          value={address}
          onChangeText={(text) => setAddress(text)}
          style={[styles.input, styles.multilineInput]}
          multiline
        />
        <TextInput
          placeholder="Phone Number"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          style={styles.input}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Pincode"
          value={pincode}
          onChangeText={(text) => setPincode(text)}
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="State"
          value={state}
          onChangeText={(text) => setState(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Country"
          value={country}
          onChangeText={(text) => setCountry(text)}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleOrder}>
          <Text style={styles.buttonText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
    padding: 16,
  },
  formContainer: {
    backgroundColor: 'pink',
    borderRadius: 10,
    padding: 20,
    marginTop: 25,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#FF6347',
  },
  input: {
    marginBottom: 16,
    padding: 12,
    borderColor: 'darkblue',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    color: '#333333',
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OrderFormScreen;
