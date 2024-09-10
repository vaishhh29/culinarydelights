// BarfiRecipe.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { addDoc, collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { auth, firestore } from './firebase';

const BarfiRecipe = () => {
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
    title: 'Barfi',
    duration: '2 hours',
    ingredients: [
      '2 cups full-fat milk powder',
      '1 cup condensed milk',
      '1/2 cup ghee',
      '1/4 cup milk',
      '1/2 teaspoon cardamom powder',
      'Chopped nuts for garnish (almonds, pistachios)',
    ],
    instructions: [
      'In a mixing bowl, combine milk powder, condensed milk, and ghee.',
      'Add milk gradually and mix to form a smooth and soft dough.',
      'Transfer the mixture to a greased plate and spread it evenly.',
      'Sprinkle cardamom powder and chopped nuts on top for flavor.',
      'Allow it to set in the refrigerator for about 2 hours.',
      'Once set, cut it into square or diamond shapes.',
      'Barfi is ready to be served!',
    ],
  };

  const handleLinkPress = () => {
    const url = 'https://youtu.be/Jkz0AWHdlfY?si=E0y-XBMm9C32Fvke';
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  const addToSaved = async () => {
    try {
      const savedCollection = collection(firestore, 'saved');
      await addDoc(savedCollection, {
        recipeId: 'barfi',
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
      const q = query(savedCollection, where('userEmail', '==', userEmail), where('recipeId', '==', 'barfi'));
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
      const q = query(savedCollection, where('userEmail', '==', email), where('recipeId', '==', 'barfi'));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.size > 0) {
        setIsSaved(true);
      }
    } catch (error) {
      console.error('Error checking saved recipe:', error);
    }
  };

  const renderListItems = (items) => {
    return items.map((item, index) => (
      <Text key={index} style={styles.text}>{`${index + 1}. ${item}`}</Text>
    ));
  };

  return (
    <ImageBackground
      source={require('./recipe1.jpg')}
      style={styles.background}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Barfi</Text>

          <Text style={styles.sectionText}>Duration: 2 hours</Text>

          <View style={styles.con}>
            <Text style={styles.youtube}>
              YOUTUBE LINK:
              <TouchableOpacity onPress={handleLinkPress}>
                <Text style={styles.linkText}>https://youtu.be/Jkz0AWHdlfY?si=E0y-XBMm9C32Fvke</Text>
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

          <Text style={styles.lasttext}>Enjoy the delicious Barfi!</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
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

export default BarfiRecipe;
