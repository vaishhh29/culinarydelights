import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SnackFrench = () => {
  const navigation = useNavigation();

  const handleTres = () => {
    navigation.navigate('GougeresRecipe');
  };
  const handleBurritos = () => {
    navigation.navigate('PissaladiereBitesRecipe');
  };
  const handleMolletes  = () => {
    navigation.navigate('SavoryMadeleinesRecipe');
  };
  const handleTamales = () => {
    navigation.navigate('SmokedSalmonPinwheelsRecipe');
  };

  const handleAtole = () => {
    navigation.navigate('MiniQuichesRecipe')
  }

  return (
  
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <TouchableOpacity style={styles.itemContainer} onPress={handleTres} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./gou.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Gougères</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleBurritos} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./bite.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Pissaladière Bites</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleMolletes} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./savory.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Savory Madeleines</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleTamales} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./pin.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Salmon Pinwheels</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleAtole} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./mini.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Mini Quiches</Text>
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

export default SnackFrench;
