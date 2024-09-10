import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity,ImageBackground } from 'react-native';
import { ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

const IndianOption = () => {
  const navigation = useNavigation();

  const handleRecipe = () => {
    navigation.navigate('MrngIndian');
  };
  const handleLunch = () => {
    navigation.navigate('LunchIndian');
  };
  const handleSnack = () => {
    navigation.navigate('SnackIndian');
  };
  const handleDessert = () => {
    navigation.navigate('DessertIndian');
  };
  const handleUserInfo = () => {
    navigation.navigate('AccountInfo');
  };
  const handlesaved = () => {
    navigation.navigate('SavedRecipe');
  };
  const handleBooks = () => {
    navigation.navigate('BooksScreen');
  };
  return (
    <ImageBackground
      source={require('./optionimg.jpg')} 
      style={styles.background}
    >

    
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.cardContainer}
        onPress={handleRecipe}
      >
        <Image
          source={require('./breakfast.webp')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>BREAKFAST</Text>
          <Text style={styles.subtitleText}>Explore delicious breakfast recipes</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.cardContainer}
        onPress={handleLunch}
      >
        <Image
          source={require('./lunch.jpg')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>LUNCH</Text>
          <Text style={styles.subtitleText}>Discover delightful lunch options</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.cardContainer}
        onPress={handleSnack}
      >
        <Image
          source={require('./snacks.webp')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>SNACKS</Text>
          <Text style={styles.subtitleText}>Indulge in tasty snack recipes</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.cardContainer}
        onPress={handleDessert}
      >
        <Image
          source={require('./jamun.webp')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>DESSERTS</Text>
          <Text style={styles.subtitleText}>Satisfy your sweet tooth with desserts</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
    <View style={styles.menuBar}>
          <TouchableOpacity>
            <FontAwesome5 onPress={handleUserInfo} name="user" size={24} color="yellow" />
            <Text style={styles.menuText}>Account Info</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 onPress={handlesaved} name="bookmark" size={24} color="pink" />
            <Text style={[styles.menuText, styles.menuText1]}>Saved</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 onPress={handleBooks}name="book" size={24} color="teal" />
            <Text style={[styles.menuText, styles.menuText1]}>Books</Text>
          </TouchableOpacity>
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  book:{
    marginLeft:13
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#3E3E3E',
    width: 320,
    margin: 15,
    elevation: 5,
    marginBottom:25
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 20,
  },
  textContainer: {
    padding: 20,
  },
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  menuText: {
    fontSize: 13,
    marginTop: 5,
    color: 'white',
    fontWeight: 'bold',
  },
  menuText1: {
    fontSize: 13,
    marginTop: 5,
    color: 'white',
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 16,
    color: 'lightgray',
  },
});

export default IndianOption;
