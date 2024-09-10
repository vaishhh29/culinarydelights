import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { addDoc, collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { auth, firestore } from './firebase';

const FlanRecipe = () => {
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
    title: 'Flan',
    duration: '1 hour 30 minutes',
    ingredients: [
      '1 cup granulated sugar',
      '6 large eggs',
      '2 cups whole milk',
      '1 can sweetened condensed milk',
      '1 teaspoon vanilla extract',
    ],
    instructions: [
      'Preheat the oven to 350°F (175°C).',
      'In a saucepan, melt sugar over medium heat until it becomes a golden caramel.',
      'Pour the caramel into a baking dish, ensuring it coats the bottom evenly.',
      'In a bowl, whisk together eggs, whole milk, sweetened condensed milk, and vanilla extract.',
      'Pour the mixture over the caramel in the baking dish.',
      'Place the baking dish in a larger pan filled with hot water to create a water bath.',
      'Bake in the preheated oven for about 1 hour or until a toothpick comes out clean.',
      'Allow the Flan to cool, then refrigerate for a few hours or overnight.',
      'Once chilled, run a knife around the edges and invert onto a serving plate.',
      'Slice and serve chilled. Enjoy your delicious Flan!',
    ],
  };

  const handleLinkPress = () => {
    const url = 'https://youtu.be/386FPNynuiU?si=7No9_N8F_1Gt-3Cy';
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  const addToSaved = async () => {
    try {
      const savedCollection = collection(firestore, 'saved');
      await addDoc(savedCollection, {
        recipeId: 'flan',
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
      const q = query(savedCollection, where('userEmail', '==', userEmail), where('recipeId', '==', 'flan'));
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
      const q = query(savedCollection, where('userEmail', '==', email), where('recipeId', '==', 'flan'));
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
          <Text style={styles.title}>Flan</Text>

          <Text style={styles.sectionText}>Duration: 1 hour 30 minutes</Text>

          <View style={styles.con}>
            <Text style={styles.youtube}>
              YOUTUBE LINK:
              <TouchableOpacity onPress={handleLinkPress}>
                <Text style={styles.linkText}>https://youtu.be/386FPNynuiU?si=7No9_N8F_1Gt-3Cy</Text>
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

          <Text style={styles.lasttext}>Enjoy the delicious Flan!</Text>
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
        left: 140,
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
    
    export default FlanRecipe;