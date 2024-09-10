import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
const MrngIndian = () => {
  const navigation = useNavigation();

  const handlePoha = () => {
    navigation.navigate('PohaRecipe');
  };
  const handleAlooPuri = () => {
    navigation.navigate('AlooPuriRecipe');
  };
  const handleUttapam = () => {
    navigation.navigate('UttapamRecipe');
  };
  const handleMethiThepla = () => {
    navigation.navigate('MethiTheplaRecipe');
  };
  const handlePongal = () => {
    navigation.navigate('PongalRecipe')
  };
  const handleUserInfo = () => {
    navigation.navigate('AccountInfo');
  };
  const handlesaved = () => {
    navigation.navigate('SavedRecipe');
  };

  return (
   
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <TouchableOpacity style={styles.itemContainer} onPress={handlePoha} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./poha.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Poha</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleAlooPuri} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./Aloo.webp')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Aloo Puri</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleUttapam} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./uttapam.webp')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Uttapam</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleMethiThepla} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./Methi.jpeg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Methi Thepla</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handlePongal} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./pongal.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Pongal</Text>
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
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: 'white',
  },
  menuText: {
    fontSize: 13,
    marginTop: 5,
    color: '#333',
    fontWeight:'bold',
    marginLeft: -15, 
  },
  menuText1: {
    fontSize: 13,
    marginTop: 5,
    color: '#333',
    fontWeight:'bold',
    marginLeft: -5, 
  },
});

export default MrngIndian;
