import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DessFrench = () => {
  const navigation = useNavigation();

  const handleTres = () => {
    navigation.navigate('CremeBruleeRecipe');
  };
  const handleBurritos = () => {
    navigation.navigate('EclairsRecipe');
  };
  const handleMolletes  = () => {
    navigation.navigate('ChocolateMousseRecipe');
  };
  const handleTamales = () => {
    navigation.navigate('MacaronsRecipe');
  };

  const handleAtole = () => {
    navigation.navigate('ClafoutisRecipe')
  }

  return (
  
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <TouchableOpacity style={styles.itemContainer} onPress={handleTres} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./creme.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Crème Brûlée</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleBurritos} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./eclair.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Éclairs</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleMolletes} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./mousse.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Chocolate Mousse</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleTamales} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./maca.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Macarons</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleAtole} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./clafoutis.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Clafoutis</Text>
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

export default DessFrench;
