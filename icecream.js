// MatchaGreenTeaIceCreamRecipe.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { addDoc, collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { auth, firestore } from './firebase';

const IceCreamRecipe = () => {
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
    title: 'Matcha Green Tea Ice Cream',
    duration: '4-6 hours',
    ingredients: [
      '2 cups heavy cream',
      '1 cup whole milk',
      '3/4 cup granulated sugar',
      '2 tablespoons matcha powder',
    ],
    instructions: [
      'In a saucepan, heat the heavy cream and whole milk over medium heat until it begins to steam (do not boil).',
      'In a separate bowl, whisk together sugar and matcha powder until well combined.',
      'Gradually add the matcha mixture to the warm cream mixture, whisking continuously until the sugar has dissolved and the matcha is fully incorporated.',
      'Remove from heat and let the mixture cool completely.',
      'Once cooled, transfer the mixture to an ice cream maker and churn according to the manufacturer\'s instructions until it reaches a soft-serve consistency.',
      'Transfer the ice cream to a container and freeze for at least 4 hours or until firm.',
      'Serve the Matcha Green Tea Ice Cream and enjoy!',
    ],
  };

  const handleLinkPress = () => {
    const url = 'https://youtu.be/EDJKzEiSesM?si=WBjBGr_0SubksJqq';
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  const addToSaved = async () => {
    try {
      const savedCollection = collection(firestore, 'saved');
      await addDoc(savedCollection, {
        recipeId: 'matcha_green_tea_ice_cream_recipe',
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
      const q = query(savedCollection, where('userEmail', '==', userEmail), where('recipeId', '==', 'matcha_green_tea_ice_cream_recipe'));
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
      const q = query(savedCollection, where('userEmail', '==', email), where('recipeId', '==', 'matcha_green_tea_ice_cream_recipe'));
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
          <Text style={styles.title}>Matcha IceCream</Text>

          <Text style={styles.sectionText}>Duration: 4-6 hours</Text>

          <View style={styles.con}>
            <Text style={styles.youtube}>
              YOUTUBE LINK:
              <TouchableOpacity onPress={handleLinkPress}>
                <Text style={styles.linkText}>https://youtu.be/EDJKzEiSesM?si=WBjBGr_0SubksJqq</Text>
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

          <Text style={styles.lasttext}>Enjoy making and savoring your Matcha Green Tea Ice Cream!</Text>
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
    left:75,
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

export default IceCreamRecipe;
