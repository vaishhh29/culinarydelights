import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { addDoc, collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { auth, firestore } from './firebase';

const ArrozConLecheRecipe = () => {
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
    title: 'Arroz con Leche',
    duration: '45 minutes',
    ingredients: [
      '1 cup white rice',
      '2 cups water',
      '1 cinnamon stick',
      '1 can sweetened condensed milk',
      '1 can evaporated milk',
      '1 cup whole milk',
      '1/2 cup sugar (adjust to taste)',
      '1/2 teaspoon ground cinnamon (for garnish)',
      '1/4 teaspoon ground nutmeg (optional)',
      '1 teaspoon vanilla extract',
      'Pinch of salt',
      'Raisins (optional)',
    ],
    instructions: [
      'Rinse the rice under cold water until the water runs clear.',
      'In a medium saucepan, combine the rice, water, and cinnamon stick. Bring to a boil, then reduce heat to low, cover, and simmer for about 18-20 minutes or until the rice is tender.',
      'Remove the cinnamon stick and add sweetened condensed milk, evaporated milk, whole milk, sugar, vanilla extract, and a pinch of salt to the rice. Stir well.',
      'Continue to cook over low heat, stirring frequently, until the mixture thickens to your desired consistency (usually about 15-20 minutes).',
      'Remove from heat and let it cool slightly. If desired, stir in raisins.',
      'Serve warm or chilled, garnished with ground cinnamon and nutmeg.',
      'Enjoy your delicious Arroz con Leche!',
    ],
  };

  const handleLinkPress = () => {
    const url = 'https://youtu.be/T1id5IeC46o?si=I2Tn5Budm_i2uTdb';
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  const addToSaved = async () => {
    try {
      const savedCollection = collection(firestore, 'saved');
      await addDoc(savedCollection, {
        recipeId: 'arrozconleche',
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
      const q = query(savedCollection, where('userEmail', '==', userEmail), where('recipeId', '==', 'arrozconleche'));
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
      const q = query(savedCollection, where('userEmail', '==', email), where('recipeId', '==', 'arrozconleche'));
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
          <Text style={styles.title}>Arroz con Leche</Text>

          <Text style={styles.sectionText}>Duration: 45 minutes</Text>

          <View style={styles.con}>
            <Text style={styles.youtube}>
              YOUTUBE LINK:
              <TouchableOpacity onPress={handleLinkPress}>
                <Text style={styles.linkText}>https://youtu.be/T1id5IeC46o?si=I2Tn5Budm_i2uTdb</Text>
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

          <Text style={styles.lasttext}>Enjoy the delicious Arroz con Leche!</Text>
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
      left: 140,
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
    });
    
    export default ArrozConLecheRecipe;