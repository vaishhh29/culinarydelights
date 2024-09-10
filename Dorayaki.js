// DorayakiRecipe.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { addDoc, collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { auth, firestore } from './firebase';

const DorayakiRecipe = () => {
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
    title: 'Dorayaki',
    duration: '45 minutes',
    ingredients: [
      '1 cup all-purpose flour',
      '1/2 cup sugar',
      '1 teaspoon baking powder',
      '2 large eggs',
      '1/2 cup water',
      '1 tablespoon honey',
      'Sweet red bean paste (anko)',
    ],
    instructions: [
      'In a bowl, whisk together eggs and sugar until well combined.',
      'In a separate bowl, mix honey with a little warm water until it becomes more fluid, then add it to the egg and sugar mixture.',
      'In another bowl, sift together flour and baking powder.',
      'Gradually add the flour mixture to the wet ingredients, mixing until smooth.',
      'Add water and mix until you get a smooth batter.',
      'Let the batter rest for about 15 minutes.',
      'Heat a non-stick pan over medium heat.',
      'Spoon small amounts of batter onto the pan to make small pancakes. Cook until bubbles form on the surface, then flip and cook the other side.',
      'Once cooked, spread sweet red bean paste on the surface of one pancake and sandwich it with another pancake.',
      'Enjoy your homemade Dorayaki!',
    ],
  };

  const handleLinkPress = () => {
    const url = 'https://youtu.be/216sAlCe9hI?si=-goTmbNermshnRq1';
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  const addToSaved = async () => {
    try {
      const savedCollection = collection(firestore, 'saved');
      await addDoc(savedCollection, {
        recipeId: 'dorayaki_recipe',
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
      const q = query(savedCollection, where('userEmail', '==', userEmail), where('recipeId', '==', 'dorayaki_recipe'));
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
      const q = query(savedCollection, where('userEmail', '==', email), where('recipeId', '==', 'dorayaki_recipe'));
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
          <Text style={styles.title}>Dorayaki</Text>

          <Text style={styles.sectionText}>Duration: 45 minutes</Text>

          <View style={styles.con}>
            <Text style={styles.youtube}>
              YOUTUBE LINK:
              <TouchableOpacity onPress={handleLinkPress}>
                <Text style={styles.linkText}>https://youtu.be/216sAlCe9hI?si=-goTmbNermshnRq1</Text>
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

          <Text style={styles.lasttext}>Enjoy your homemade Dorayaki!</Text>
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
    left: 110,
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

export default DorayakiRecipe;
