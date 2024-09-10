import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { addDoc, collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { auth, firestore } from './firebase';

const GougeresRecipe = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserEmail(user.email);
      checkIfRecipeIsSaved(user.email);
    }
  }, []);

  const recipeData = {
    title: 'Gougères',
    duration: '45 minutes',
    ingredients: [
      '1 cup water',
      '8 tablespoons unsalted butter',
      '1/2 teaspoon salt',
      '1 cup all-purpose flour',
      '4 large eggs',
      '1 1/2 cups grated Gruyère cheese',
      '1/2 teaspoon black pepper',
      '1/4 teaspoon nutmeg',
    ],
    instructions: [
      'Preheat the oven to 425°F (220°C). Line two baking sheets with parchment paper.',
      'In a saucepan, combine water, butter, and salt. Bring to a boil over medium heat.',
      'Add the flour all at once, stirring vigorously with a wooden spoon. Continue to stir until the mixture forms a ball and pulls away from the sides of the pan.',
      'Remove the pan from heat and let it cool for a couple of minutes.',
      'Add the eggs, one at a time, beating well after each addition. The batter will become smooth and glossy.',
      'Stir in the grated Gruyère cheese, black pepper, and nutmeg until well combined.',
      'Drop rounded tablespoons of dough onto the prepared baking sheets, leaving space between each.',
      'Bake in the preheated oven for 15 minutes, then reduce the oven temperature to 375°F (190°C) and continue baking for an additional 20-25 minutes, or until the Gougères are golden brown and puffed.',
      'Allow them to cool slightly before serving. Gougères are best served warm.',
      'Enjoy these delightful Gougères!',
    ],
  };

  const handleLinkPress = () => {
    const url = 'https://youtu.be/vH28AF2FMyg?si=8-_tEZ1voAQbjulr';
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  const addToSaved = async () => {
    try {
      const savedCollection = collection(firestore, 'saved');
      await addDoc(savedCollection, {
        recipeId: 'gougeres',
        userEmail,
        recipeData,
      });

      setIsSaved(true);
    } catch (error) {
      console.error('Error saving to saved:', error);
    }
  };

  const unsaveRecipe = async () => {
    try {
      const savedCollection = collection(firestore, 'saved');
      const q = query(savedCollection, where('userEmail', '==', userEmail), where('recipeId', '==', 'gougeres'));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.size > 0) {
        const docId = querySnapshot.docs[0].id;
        const recipeDocRef = doc(savedCollection, docId);
        await deleteDoc(recipeDocRef);
        setIsSaved(false);
      }
    } catch (error) {
      console.error('Error unsaving recipe:', error);
    }
  };

  const checkIfRecipeIsSaved = async (email) => {
    try {
      const savedCollection = collection(firestore, 'saved');
      const q = query(savedCollection, where('userEmail', '==', email), where('recipeId', '==', 'gougeres'));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.size > 0) {
        setIsSaved(true);
      }
    } catch (error) {
      console.error('Error checking saved recipe:', error);
    }
  };

  return (
    <ImageBackground
      source={require('./recipe1.jpg')} // Replace with the actual image source
      style={styles.background}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Gougères</Text>

          <Text style={styles.sectionText}>Duration: 45 minutes</Text>

          <View style={styles.con}>
            <Text style={styles.youtube}>
              YOUTUBE LINK:
              <TouchableOpacity onPress={handleLinkPress}>
                <Text style={styles.linkText}>https://youtu.be/vH28AF2FMyg?si=8-_tEZ1voAQbjulr</Text>
              </TouchableOpacity>
            </Text>
          </View>

          <TouchableOpacity onPress={isSaved ? unsaveRecipe : addToSaved}>
            <Text style={[styles.saveButton, isSaved && styles.saveAdded]}>
              {isSaved ? 'Unsave Recipe' : 'Save Recipe'}
            </Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Ingredients:</Text>
          {renderListItems(recipeData.ingredients)}

          <Text style={styles.sectionTitle}>Instructions:</Text>
          {renderListItems(recipeData.instructions)}

          <Text style={styles.lasttext}>Enjoy these delightful Gougères!</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const renderListItems = (items) => {
  return items.map((item, index) => (
    <Text key={index} style={styles.text}>{`${index + 1}. ${item}`}</Text>
  ));
};
const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    youtube: {
      fontWeight: '900',
      marginRight: 10,
      letterSpacing: 1,
    },
    container: {
      flex: 1,
    },
    linkText: {
      color: 'red',
      textDecorationLine: 'underline',
      fontSize: 16,
    },
    con: {
      flex: 1,
      justifyContent: 'center',
      marginLeft: 20,
    },
    sectionText: {
      fontSize: 23,
      fontWeight: 'bold',
      marginTop: 25,
      marginBottom: 5,
      color: 'purple',
      marginHorizontal: 15,
      letterSpacing: 2,
      marginBottom: 15,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      fontStyle: 'italic',
      marginBottom: 15,
      color: 'brown',
      marginHorizontal: 15,
      marginTop: 40,
      letterSpacing: 2,
      left: 120,
    },
    sectionTitle: {
      fontSize: 26,
      fontWeight: 'bold',
      marginTop: 15,
      marginBottom: 5,
      color: 'brown',
      marginHorizontal: 15,
      fontStyle: 'italic',
      letterSpacing: 2,
    },
    text: {
      fontSize: 18,
      color: 'black',
      lineHeight: 28,
      marginHorizontal: 15,
      marginBottom: 18,
      fontWeight: '500',
    },
    lasttext: {
      fontSize: 18,
      color: 'black',
      lineHeight: 28,
      marginHorizontal: 15,
      marginBottom: 150,
      fontWeight: '500',
    },
    saveButton: {
      fontSize: 18,
      color: 'white',
      backgroundColor: 'olive',
      padding: 12,
      textAlign: 'center',
      marginTop: 15,
      borderRadius: 8,
      marginHorizontal: 120,
      color: 'white',
    },
    saveAdded: {
      backgroundColor: 'teal',
    },
  });
  
  export default GougeresRecipe;