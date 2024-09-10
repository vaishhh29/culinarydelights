import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MrngMexican = () => {
  const navigation = useNavigation();

  const handleChilaquiles = () => {
    navigation.navigate('ChilaquilesRecipe');
  };
  const handleHuevosRancheros = () => {
    navigation.navigate('HuevosRancherosRecipe');
  };
  const handleMolletes  = () => {
    navigation.navigate('MolletesRecipe');
  };
  const handleTamales = () => {
    navigation.navigate('CachapasRecipe');
  };
  const handleAtole = () => {
    navigation.navigate('PambazosRecipe')
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <TouchableOpacity style={styles.itemContainer} onPress={handleChilaquiles} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./Chilaquiles.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Chilaquiles</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleHuevosRancheros} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./HuevosRancheros.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Huevos Rancheros</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleMolletes} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./Molletes.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Molletes</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleTamales} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./Cachapas.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Cachapas</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleAtole} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./Pambazos.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Pambazos</Text>
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

export default MrngMexican;
