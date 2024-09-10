import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DessertMex = () => {
  const navigation = useNavigation();

  const handleTres = () => {
    navigation.navigate('TresLechesCakeRecipe');
  };
  const handleBurritos = () => {
    navigation.navigate('FlanRecipe');
  };
  const handleMolletes  = () => {
    navigation.navigate('SopapillasRecipe');
  };
  const handleTamales = () => {
    navigation.navigate('BunuelosRecipe');
  };

  const handleAtole = () => {
    navigation.navigate('ArrozConLecheRecipe')
  }

  return (
  
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <TouchableOpacity style={styles.itemContainer} onPress={handleTres} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./egg.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Tres Leches Cake</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleBurritos} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./Fl.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Flan</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleMolletes} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./sop.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Sopapillas</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleTamales} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./bunue.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Buñuelos</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleAtole} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./Leche.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Arroz con Leche</Text>
        </View>
      </TouchableOpacity>
     
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor:'teal' ,
    paddingVertical: 20,
  },
  itemContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  
  },
 
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'white' ,
    padding: 26,
    borderRadius: 8,
    elevation: 3,
    marginBottom: 10,
  },
  itemImage: {
    width: 150,
    height: 100,
    borderRadius: 8,
    marginRight: 15,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default DessertMex;
