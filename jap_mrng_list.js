import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RiceMisoSoupRecipe from "./rice_miso";
import JapaneseTamagoyaki from "./jap_omlette";

const Mrngjap = () => {
  const navigation = useNavigation();

  const handleExplore = () => {
    navigation.navigate('RiceMisoSoupRecipe');
  };
  const handleTama = () => {
    navigation.navigate('TamaRecipe');
  };
  const handleNatto = () => {
    navigation.navigate('NattoRecipe');
  };
  const handletamagoyaki = () => {
    navigation.navigate('JapaneseTamagoyaki');
  };
  const handleRiceball = () => {
    navigation.navigate('RiceBallRecipe')
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <TouchableOpacity style={styles.itemContainer} onPress={handleExplore} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./rice_miso.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Rice and Miso Soup</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleTama} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./tama_gohan.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Tamago Kake Gohan</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleNatto} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./natto.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Natto</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handletamagoyaki} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./jap_om.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Japanese Omelette</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleRiceball} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./riceball.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Rice Balls</Text>
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

export default Mrngjap;
