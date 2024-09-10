// RecipeDetails.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';

const RecipeDetails = ({ route }) => {
  const { recipeData } = route.params;

  return (
    <ImageBackground
      source={require('./detail.png')}
      style={styles.background}
    >
       <Image source={{ uri: recipeData.imageUrl }} style={styles.image} />
      <ScrollView style={styles.container}>
       
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{recipeData.title}</Text>
          <Text style={styles.duration}>{`Duration: ${recipeData.duration}`}</Text>

          {renderSection('Ingredients', recipeData.ingredients)}

          {renderSection('Instructions', recipeData.instructions)}

          <Text style={styles.lasttext}>Enjoy your delicious recipe!</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const renderSection = (sectionTitle, items) => {
  return (
    <>
      <Text style={styles.sectionTitle}>{sectionTitle}:</Text>
      {renderListItems(items)}
    </>
  );
};

const renderListItems = (items) => {
  return items.map((item, index) => (
    <Text key={index} style={styles.text}>{`${index + 1}. ${item}`}</Text>
  ));
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: '#FFDAB9', 
    borderRadius: 15,
    marginTop: -15, 

  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'brown',
    letterSpacing: 2,
  },
  duration: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 15,
    letterSpacing: 2,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    color: 'brown',
    fontStyle: 'italic',
    letterSpacing: 2,
  },
  text: {
    fontSize: 18,
    color: 'black',
    lineHeight: 28,
    marginBottom: 18,
    fontWeight: '500',
  },
  lasttext: {
    fontSize: 18,
    color: 'black',
    lineHeight: 28,
    marginBottom: 50,
    fontWeight: '500',
  },
});

export default RecipeDetails;
