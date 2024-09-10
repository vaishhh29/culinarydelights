// CholeBhatureRecipe.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { addDoc, collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { auth, firestore } from './firebase';

const CholeBhatureRecipe = () => {
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
    title: 'Chole Bhature',
    duration: '2 hours',
    ingredients: [
      'For Chole:',
      '1 cup chickpeas (chole), soaked overnight',
      '1 large onion, finely chopped',
      '2 large tomatoes, finely chopped',
      '1/2 inch ginger, grated',
      '3-4 cloves garlic, minced',
      '1-2 green chilies, chopped',
      '1 teaspoon cumin seeds',
      '1 teaspoon coriander powder',
      '1/2 teaspoon turmeric powder',
      '1 teaspoon red chili powder',
      '1 teaspoon garam masala',
      'Salt to taste',
      'Fresh coriander leaves for garnish',
      'For Bhature:',
      '2 cups all-purpose flour',
      '1/2 cup semolina (sooji)',
      '1/2 cup yogurt',
      '1/2 teaspoon baking powder',
      '1/4 teaspoon baking soda',
      'Salt to taste',
      'Water (as needed)',
      'Oil for deep frying',
    ],
    instructions: [
      'For Chole:',
      'Pressure cook soaked chickpeas with salt until they are soft and cooked thoroughly.',
      'In a pan, heat oil and add cumin seeds. Once they splutter, add chopped onions and sauté until golden brown.',
      'Add grated ginger and minced garlic. Sauté until the raw smell disappears.',
      'Add chopped tomatoes and cook until the oil separates.',
      'Add coriander powder, turmeric powder, red chili powder, and salt. Cook the masala until the oil separates from it.',
      'Add cooked chickpeas and mix well. Add water to achieve the desired consistency.',
      'Simmer and cook for 15-20 minutes. Sprinkle garam masala and garnish with fresh coriander leaves.',
      'For Bhature:',
      'In a bowl, mix all-purpose flour, semolina, yogurt, baking powder, baking soda, and salt.',
      'Add water gradually and knead into a soft dough. Cover and let it rest for 2 hours.',
      'Divide the dough into small balls and roll them into discs.',
      'Heat oil in a pan for deep frying. Fry the bhature until they puff up and are golden brown on both sides.',
      'Serve hot bhature with delicious chole.',
    ],
  };

  const handleLinkPress = () => {
    const url = 'https://youtu.be/3jTXQXn2DOw?si=C8wcxpt25HWrIY7G';
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  const addToSaved = async () => {
    try {
      const savedCollection = collection(firestore, 'saved');
      await addDoc(savedCollection, {
        recipeId: 'chole_bhature',
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
      const q = query(savedCollection, where('userEmail', '==', userEmail), where('recipeId', '==', 'chole_bhature'));
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
      const q = query(savedCollection, where('userEmail', '==', email), where('recipeId', '==', 'chole_bhature'));
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
          <Text style={styles.title}>Chole Bhature</Text>

          <Text style={styles.sectionText}>Duration: 2 hours</Text>

          <View style={styles.con}>
            <Text style={styles.youtube}>
              YOUTUBE LINK:
              <TouchableOpacity onPress={handleLinkPress}>
                <Text style={styles.linkText}>https://youtu.be/3jTXQXn2DOw?si=C8wcxpt25HWrIY7G</Text>
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

          <Text style={styles.lasttext}>Enjoy the delicious Chole Bhature!</Text>
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
    left: 80,
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
    marginHorizontal:120,
    color:'white'
  },
  saveAdded: {
    backgroundColor: 'teal',
  },
});

export default CholeBhatureRecipe;
