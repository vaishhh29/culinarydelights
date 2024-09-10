import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Snackjap = () => {
  const navigation = useNavigation();

  const handlePocky = () => {
    navigation.navigate('PockyRecipe');
  };
  const handleTaiyaki = () => {
    navigation.navigate('TaiyakiRecipe');
  };
  const handleMochi = () => {
    navigation.navigate('MochiRecipe');
  };
  const handleIcecream = () => {
    navigation.navigate('IcecreamRecipe');
  };
  const handleDorayaki = () => {
    navigation.navigate('DorayakiRecipe')
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <TouchableOpacity style={styles.itemContainer} onPress={handlePocky} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./pocky.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Pocky</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleMochi} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./mochi.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}> Mochi</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleIcecream} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./gtmatcha.webp')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Matcha IceCream</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleDorayaki} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./Dorayaki.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}> Dorayaki</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleTaiyaki} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./Taiyaki.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Taiyaki</Text>
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

export default Snackjap;
