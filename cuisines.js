import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

const Cuisines = () => {
  const navigation = useNavigation();

  const handleExplore = (cuisineName) => {
    const cuisineHandlers = {
      'JAPANESE': () => navigation.navigate('option'),
      'INDIAN': () => navigation.navigate('IndianOption'),
      'MEXICAN': () => navigation.navigate('MexOption'),
      'FRENCH': () => navigation.navigate('FrenchOption'),
      'MIDDLE EASTERN': () => navigation.navigate('MiddleEasternOption'),
    };

    if (cuisineHandlers[cuisineName]) {
      cuisineHandlers[cuisineName]();
    }
  };

  const cuisinesData = [
    { name: 'JAPANESE', image: require('./assets/img/japanese.jpg') },
    { name: 'INDIAN', image: require('./assets/img/indian.jpg') },
    { name: 'MEXICAN', image: require('./assets/img/mexican.jpg') },
    { name: 'FRENCH', image: require('./assets/img/french.jpg') },
  ];
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
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {cuisinesData.map((cuisine, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cuisineCard}
            onPress={() => handleExplore(cuisine.name)}
          >
            <Image source={cuisine.image} style={styles.image} />
            <View style={styles.overlay}>
              <Text style={styles.text}>{cuisine.name}</Text>
              <View style={styles.exploreButton}>
                <Text style={styles.exploreText}>Explore</Text>
                <FontAwesome5 name="arrow-right" size={16} color="white" />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Menu Bar */}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    backgroundColor: '#f0f0f0',
  },
  cuisineCard: {
    borderRadius: 20,
    overflow: 'hidden',
    margin: 10,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  exploreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  exploreText: {
    color: 'white',
    marginRight: 5,
  },
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: 'black',
  },
  menuText: {
    fontSize: 13,
    marginTop: 5,
    color: 'white',
    fontWeight:'bold',
    marginLeft: -15, 
  },
  menuText1: {
    fontSize: 13,
    marginTop: 5,
    color: 'white',
    fontWeight:'bold',
    marginLeft: -5, 
  },
});

export default Cuisines;