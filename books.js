// BooksScreen.js

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const warmColors = {
  background: 'pink',
  title: '#8B4513',
  cardBackground: '#FF6347',
  text: '#FFFFFF',
  addToCartButton: '#FFD700',
};

const BooksScreen = () => {
  const navigation = useNavigation();

  const openOrderForm = (bookInfo) => {
    // Navigate to the order form screen and pass book information
    navigation.navigate('OrderFormScreen', { bookInfo });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <BookCard
          imageSource={require('./japanese.jpg')}
          title="Make It Japanese"
          author="Rie McClenny"
          price="₹917.51"
          onOrder={() => openOrderForm({ title: "Make It Japanese", price: "₹917.51" })}
        />
        <BookCard
          imageSource={require('./indian.jpg')}
          title="THE INDIAN COOKERY COURSE"
          author="Monisha Bharadwaj"
          price="₹1,086.00"
          onOrder={() => openOrderForm({ title: "THE INDIAN COOKERY COURSE", price: "₹1,086.00" })}
        />
        <BookCard
          imageSource={require('./mex.jpg')}
          title="Mexican Food"
          author="Linda B. Tawney"
          price="₹226.00"
          onOrder={() => openOrderForm({ title: "Mexican Food", price: "₹226.00" })}
        />
        <BookCard
          imageSource={require('./french.jpg')}
          title="The Escoffier"
          author="Auguste Escoffier "
          price="₹1835"
          onOrder={() => openOrderForm({ title: "The Escoffier", price: "₹1835" })}
        />
      </View>
    </ScrollView>
  );
};

const BookCard = ({ imageSource, title, author, price, onOrder }) => {
  return (
    <View style={styles.bookCard}>
      <Image source={imageSource} style={styles.bookImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.text1}>{title}</Text>
        <Text style={styles.text}>{author}</Text>
        <Text style={styles.text}>{price}</Text>
        <TouchableOpacity style={styles.orderButton} onPress={onOrder}>
          <Text style={styles.buttonText}>Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: warmColors.background,
  },
  bookCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: warmColors.cardBackground,
    top: 20,
    right: 15,
    paddingRight: 40,
    marginBottom: 30,
  },
  bookImage: {
    width: '47%',
    height: '100%',
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
  },
  text: {
    color: warmColors.text,
    marginBottom: 5,
    fontSize: 15,
  },
  orderButton: {
    backgroundColor: warmColors.cardBackground,
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    backgroundColor: 'green',
  },
  buttonText: {
    color: warmColors.text,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text1: {
    color: warmColors.text,
    marginBottom: 5,
    fontSize: 20,
  },
});

export default BooksScreen;
