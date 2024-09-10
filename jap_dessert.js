import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Dessertjap = () => {
  const navigation = useNavigation();

  const handleExplore = () => {
    navigation.navigate('PieRecipe');
  };
  const handleCherry = () => {
    navigation.navigate('CherryRecipe');
  };
  const handlePudding = () => {
    navigation.navigate('PuddingRecipe');
  };
  const handleCheesecake = () => {
    navigation.navigate('CheesecakeRecipe');
  };
  const handleAnmitsu = () => {
    navigation.navigate('AnmitsuRecipe')
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <TouchableOpacity style={styles.itemContainer} onPress={handleExplore} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./pie.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Sweet Potato Pie</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleCherry} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./cherry.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Cherry Compote </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handlePudding} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./pudding.png')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}> Custard Pudding</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleCheesecake} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./cheesecake.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}> Cheesecake</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleAnmitsu} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./Anmitsu.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Anmitsu</Text>
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

export default Dessertjap;
