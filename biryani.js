// ChickenBiryaniRecipe.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { addDoc, collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { auth, firestore } from './firebase';

const ChickenBiryaniRecipe = () => {
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
    title: 'Chicken Biryani',
    duration: '1 hour 30 minutes',
    ingredients: [
      '2 cups basmati rice',
      '500g chicken, cut into pieces',
      '1 cup yogurt',
      '2 large onions, thinly sliced',
      '2 tomatoes, chopped',
      '1/2 cup cooking oil',
      '1/4 cup ghee',
      '1 tablespoon ginger-garlic paste',
      '1/2 teaspoon turmeric powder',
      '1 teaspoon red chili powder',
      '1 teaspoon biryani masala',
      '1/2 cup mint leaves, chopped',
      '1/2 cup coriander leaves, chopped',
      '4 cups water',
      'Salt to taste',
    ],
    instructions: [
      'Wash the basmati rice and soak it in water for 30 minutes.',
      'In a large pot, bring 4 cups of water to a boil. Add soaked and drained rice. Cook until the rice is 70% cooked. Drain the water and set aside.',
      'In a deep pan, heat oil and ghee. Add sliced onions and fry until golden brown. Remove half of the fried onions for later use.',
      'Add ginger-garlic paste to the remaining onions in the pan. Saute until the raw smell disappears.',
      'Add chopped tomatoes and cook until they become soft and oil starts separating.',
      'Add chicken pieces, turmeric powder, red chili powder, and biryani masala. Cook until the chicken is well-sealed and the masala coats the chicken.',
      'Add yogurt, mint leaves, and coriander leaves. Cook for 5 minutes until the chicken is partially cooked.',
      'In a separate deep pan, layer half of the partially cooked rice. Top it with the cooked chicken masala. Sprinkle the fried onions set aside earlier. Layer the remaining rice on top.',
      'Cover the pan with a tight lid. Cook on low heat for 30 minutes to allow the flavors to meld and the rice to cook completely.',
      'Once done, gently mix the layers before serving.',
      'Serve hot with raita or salan.',
    ],
  };

  const handleLinkPress = () => {
    const url = 'https://youtu.be/T74qMNYBKGU?si=IvN3VlJ3EobPO-LD';
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  const addToSaved = async () => {
    try {
      const savedCollection = collection(firestore, 'saved');
      await addDoc(savedCollection, {
        recipeId: 'chicken_biryani',
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
      const q = query(savedCollection, where('userEmail', '==', userEmail), where('recipeId', '==', 'chicken_biryani'));
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
      const q = query(savedCollection, where('userEmail', '==', email), where('recipeId', '==', 'chicken_biryani'));
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
          <Text style={styles.title}>Chicken Biryani</Text>

          <Text style={styles.sectionText}>Duration: 1 hour 30 minutes</Text>

          <View style={styles.con}>
            <Text style={styles.youtube}>
              YOUTUBE LINK:
              <TouchableOpacity onPress={handleLinkPress}>
                <Text style={styles.linkText}>https://youtu.be/T74qMNYBKGU?si=IvN3VlJ3EobPO-LD</Text>
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

          <Text style={styles.lasttext}>Enjoy the delicious Chicken Biryani!</Text>
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

export default ChickenBiryaniRecipe;
