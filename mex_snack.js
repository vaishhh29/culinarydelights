import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SnackMex = () => {
  const navigation = useNavigation();

  const handleTacos = () => {
    navigation.navigate('StreetCornRecipe');
  };
  const handleBurritos = () => {
    navigation.navigate('EnchiladasSuizasRecipe');
  };
  const handleMolletes  = () => {
    navigation.navigate('DeviledShrimpRecipe');
  };
  const handleTamales = () => {
    navigation.navigate('TostadasRecipe');
  };

  const handleAtole = () => {
    navigation.navigate('ChurrosRecipe')
  }

  return (
  
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <TouchableOpacity style={styles.itemContainer} onPress={handleTacos} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./corn.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Street Corn</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleBurritos} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./Enchiladas_Suizas.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Enchiladas Suizas</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleMolletes} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./Deviled_Shrimp.jpeg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Deviled Shrimp</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleTamales} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./Tostadas.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Tostadas</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleAtole} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./Churros.webp')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Churros</Text>
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

export default SnackMex;
