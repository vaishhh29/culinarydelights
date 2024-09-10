import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SnackIndian = () => {
  const navigation = useNavigation();

  const handleSamosa = () => {
    navigation.navigate('SamosaRecipe');
  };
  const handlePakora = () => {
    navigation.navigate('PakoraRecipe');
  };
  const handlePaniPuri  = () => {
    navigation.navigate('PaniPuriRecipe');
  };
  const handleDhokla = () => {
    navigation.navigate('DhoklaRecipe');
  };
  const handleBhelPuri = () => {
    navigation.navigate('BhelPuriRecipe')
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <TouchableOpacity style={styles.itemContainer} onPress={handleSamosa} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./samosa.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Samosa</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handlePakora} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./Pakora.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Pakora</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handlePaniPuri} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./pani.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Pani Puri</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleDhokla} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./dhol.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Dhokla</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleBhelPuri} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./bhel.webp')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Bhel Puri</Text>
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

export default SnackIndian;
