// PambazosRecipe.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { addDoc, collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { auth, firestore } from './firebase';

const PambazosRecipe = () => {
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
    title: 'Pambazos',
    duration: '1 hour',
    ingredients: [
      '4 large potatoes, peeled and diced',
      '2 tablespoons vegetable oil',
      '1 onion, finely chopped',
      '2 cloves garlic, minced',
      '1 lb chorizo, casing removed',
      'Salt and pepper to taste',
      '4 pambazo rolls',
      'Guajillo sauce (see instructions below)',
      'Lettuce, shredded (for topping)',
      'Crema or sour cream (for topping)',
      'Queso fresco, crumbled (for topping)',
    ],
    instructions: [
      'Boil the diced potatoes until fork-tender. Drain and set aside.',
      'In a large skillet, heat vegetable oil over medium heat. Add chopped onion and minced garlic. Sauté until softened.',
      'Add chorizo to the skillet, breaking it up with a spoon. Cook until browned and cooked through. Season with salt and pepper.',
      'Add the boiled potatoes to the skillet with the chorizo mixture. Stir to combine and let it cook for a few minutes to meld the flavors. Remove from heat.',
      'For the guajillo sauce: Remove stems and seeds from dried guajillo chilies. Toast them on a dry skillet until fragrant. Transfer to a bowl and cover with hot water. Let them soak for about 15-20 minutes. Blend the soaked guajillo chilies with garlic, cumin, oregano, salt, and enough water to make a smooth sauce.',
      'Dip each pambazo roll into the guajillo sauce, making sure to coat both sides. Fill each sauce-coated roll with the chorizo and potato mixture.',
      'In a hot griddle or skillet, cook the filled pambazos until they get crispy and golden on the outside.',
      'Serve the Pambazos hot, topped with shredded lettuce, crema or sour cream, and crumbled queso fresco.',
      'Enjoy your delicious Pambazos!',
    ],
  };

  const handleLinkPress = () => {
    const url = 'https://youtu.be/UxSyvb_nnzc?si=eYWSjS3eyXhMa4K4';
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  const addToSaved = async () => {
    try {
      const savedCollection = collection(firestore, 'saved');
      await addDoc(savedCollection, {
        recipeId: 'pambazos_recipe',
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
      const q = query(savedCollection, where('userEmail', '==', userEmail), where('recipeId', '==', 'pambazos_recipe'));
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
      const q = query(savedCollection, where('userEmail', '==', email), where('recipeId', '==', 'pambazos_recipe'));
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
      source={require('./recipe1.jpg')}
      style={styles.background}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Pambazos</Text>

          <Text style={styles.sectionText}>Duration: 1 hour</Text>

          <View style={styles.con}>
            <Text style={styles.youtube}>
              YOUTUBE LINK:
              <TouchableOpacity onPress={handleLinkPress}>
                <Text style={styles.linkText}>https://youtu.be/UxSyvb_nnzc?si=eYWSjS3eyXhMa4K4</Text>
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

          <Text style={styles.lasttext}>Enjoy your delicious Pambazos!</Text>
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
    color:'white'
  },
  saveAdded: {
    backgroundColor: 'teal',
  },
});

export default PambazosRecipe;
