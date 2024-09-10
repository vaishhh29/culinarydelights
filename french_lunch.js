import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LunchFrench = () => {
  const navigation = useNavigation();

  const handleTres = () => {
    navigation.navigate('SaladeNicoiseRecipe');
  };
  const handleBurritos = () => {
    navigation.navigate('QuicheLorraineRecipe');
  };
  const handleMolletes  = () => {
    navigation.navigate('TartifletteRecipe');
  };
  const handleTamales = () => {
    navigation.navigate('SaladeChevreChaudRecipe');
  };

  const handleAtole = () => {
    navigation.navigate('SaladeLyonnaiseRecipe')
  }

  return (
  
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <TouchableOpacity style={styles.itemContainer} onPress={handleTres} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./salade.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Salade Niçoise</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleBurritos} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./lorraine.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Quiche Lorraine</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleMolletes} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./Tartiflette.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Tartiflette</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleTamales} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./Chaud.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Saladede Chèvre Chaud</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleAtole} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./lyo.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Salade Lyonnaise</Text>
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

export default LunchFrench;
