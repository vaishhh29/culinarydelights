// SavedRecipe.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { collection, query, where, getDocs, doc, deleteDoc,getDoc } from 'firebase/firestore';
import { firestore, auth } from './firebase';

const CustomAlert = ({ message }) => {
  return (
    <View style={styles.alertContainer}>
      <Text style={styles.alertText}>{message}</Text>
    </View>
  );
};

const SavedRecipe = () => {
  const navigation = useNavigation();
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');
  const userEmail = auth.currentUser?.email;

  useEffect(() => {
    if (userEmail) {
      fetchSavedRecipes();
    }
  }, [userEmail]);

  const showAlert = (message) => {
    setAlertMessage(message);
    setTimeout(() => {
      setAlertMessage('');
    }, 3000); // Display the alert for 3 seconds
  };

  const fetchSavedRecipes = async () => {
    try {
      const savedCollection = collection(firestore, 'saved');
      const q = query(savedCollection, where('userEmail', '==', userEmail));
      const querySnapshot = await getDocs(q);

      const recipes = [];
      for (const doc of querySnapshot.docs) {
        const recipeData = doc.data().recipeData;
        const recipeId = doc.data().recipeId;
        const fullRecipe = await fetchFullRecipe(recipeId);
        recipes.push({ id: recipeId, data: { ...recipeData, ...fullRecipe } });
      }

      setSavedRecipes(recipes);
    } catch (error) {
      console.error('Error fetching saved recipes:', error);
    }
  };

  const fetchFullRecipe = async (recipeId) => {
    try {
      const recipeDoc = await getDoc(doc(firestore, 'recipes', recipeId));

      if (recipeDoc.exists()) {
        return recipeDoc.data();
      }
    } catch (error) {
      console.error('Error fetching full recipe:', error);
      return {};
    }
  };

  const handleRecipePress = (recipe) => {
    navigation.navigate('RecipeDetails', { recipeData: recipe.data });
  };

  const unsaveRecipe = async (recipeId) => {
    try {
      const savedCollection = collection(firestore, 'saved');
      const querySnapshot = await getDocs(query(savedCollection, where('userEmail', '==', userEmail), where('recipeId', '==', recipeId)));

      if (!querySnapshot.empty) {
        const docId = querySnapshot.docs[0].id;
        await deleteDoc(doc(savedCollection, docId));
        setSavedRecipes(savedRecipes.filter((recipe) => recipe.id !== recipeId));
        showAlert('Unsaved Successfully' );
      }
    } catch (error) {
      console.error('Error unsaving recipe:', error);
    }
  };
  const handleUserInfo = () => {
    navigation.navigate('AccountInfo');
  };
  const handlesaved = () => {
    navigation.navigate('SavedRecipe');
  };
  const handleBooks = () => {
    navigation.navigate('BooksScreen');
  };
  
  return (
    <ImageBackground
      source={require('./saveb.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        {alertMessage && <CustomAlert message={alertMessage} />}

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {savedRecipes.map((recipe, index) => (
            <TouchableOpacity
              key={index}
              style={styles.recipeCard}
              onPress={() => handleRecipePress(recipe)}
              activeOpacity={0.7}
            >
              <Image source={{ uri: recipe.data.imageUrl }} style={styles.image} />
              <View style={styles.overlay}>
                <Text style={styles.text}>{recipe.data.title}</Text>
                <TouchableOpacity onPress={() => unsaveRecipe(recipe.id)}>
                  <Text style={styles.unsaveButton}>Unsave</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Menu Bar */}
        <View style={styles.menuBar}>
          <TouchableOpacity>
            <FontAwesome5 onPress={handleUserInfo} name="user" size={24} color="yellow" />
            <Text style={styles.menuText}>Account Info</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 onPress={handlesaved} name="bookmark" size={24} color="pink" />
            <Text style={[styles.menuText, styles.menuText1]}>Saved</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 onPress={handleBooks}name="book" size={24} color="teal" />
            <Text style={[styles.menuText, styles.menuText1]}>Books</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  scrollViewContent: {
    backgroundColor: 'transparent',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  recipeCard: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 5,
    backgroundColor: '#FFC0CB',
    margin: 30,
    height: 150,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  unsaveButton: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'teal',
    padding: 10,
    borderRadius: 8,
    marginTop: 5,
  },
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  menuText: {
    fontSize: 13,
    marginTop: 5,
    color: 'white',
    fontWeight: 'bold',
  },
  menuText1: {
    fontSize: 13,
    marginTop: 5,
    color: 'white',
    fontWeight: 'bold',
  },
  alertContainer: {
    backgroundColor: '#32CD32',
    padding: 20,
    alignItems: 'center',
    
  },
  alertText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SavedRecipe;
