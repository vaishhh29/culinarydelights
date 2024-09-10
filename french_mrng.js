import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MrngFrench = () => {
  const navigation = useNavigation();

  const handleTres = () => {
    navigation.navigate('PainAuChocolatRecipe');
  };
  const handleBurritos = () => {
    navigation.navigate('BaguetteRecipe');
  };
  const handleMolletes  = () => {
    navigation.navigate('PainPerduRecipe');
  };
  const handleTamales = () => {
    navigation.navigate('CroqueMonsieurRecipe');
  };

  const handleAtole = () => {
    navigation.navigate('QuicheRecipe')
  }

  return (
  
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <TouchableOpacity style={styles.itemContainer} onPress={handleTres} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./chocolat.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Pain au Chocolat</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleBurritos} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./bagu.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Baguette</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleMolletes} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./per.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Pain Perdu</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleTamales} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./mon.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Croque-Monsieur</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleAtole} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./qui.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Quiche</Text>
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

export default MrngFrench;
