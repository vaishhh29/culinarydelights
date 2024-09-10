import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SobaRecipe from "./Soba";

const Lunchjap = () => {
  const navigation = useNavigation();

  const handlesoba = () => {
    navigation.navigate('SobaRecipe');
  };
  const handleRamen = () => {
    navigation.navigate('RamenRecipe');
  };
  const handleDonburi = () => {
    navigation.navigate('DonburiRecipe');
  };
  const handleTempura = () => {
    navigation.navigate('TempuraRecipe');
  };
  const handleSushiballs = () => {
    navigation.navigate('SushiballsRecipe')
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <TouchableOpacity style={styles.itemContainer} onPress={handlesoba} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./soba.webp')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Soba</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleRamen} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./ramen.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Ramen</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleDonburi} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./donburi.webp')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Donburi</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleTempura} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./tempura.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Tempura</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleSushiballs} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./sushirolls.webp')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Sushi Rolls</Text>
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
    marginHorizontal: 25,
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

export default Lunchjap;
