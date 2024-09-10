import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LunchMex = () => {
  const navigation = useNavigation();

  const handleTacos = () => {
    navigation.navigate('TacosRecipe');
  };
  const handleBurritos = () => {
    navigation.navigate('BurritosRecipe');
  };
  const handleMolletes  = () => {
    navigation.navigate('PozoleRecipe');
  };
  const handleTamales = () => {
    navigation.navigate('SopesRecipe');
  };

  const handleAtole = () => {
    navigation.navigate('TamalesRecipe')
  }

  return (
  
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <TouchableOpacity style={styles.itemContainer} onPress={handleTacos} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./Tacos.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Tacos</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleBurritos} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./Burritos.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Burritos</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleMolletes} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./po.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Pozole</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleTamales} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./so.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Sopes</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleAtole} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./Tamales.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Tamales</Text>
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

export default LunchMex;
