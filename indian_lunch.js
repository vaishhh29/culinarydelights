import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LunchIndian = () => {
  const navigation = useNavigation();

  const handleBriyani = () => {
    navigation.navigate('ChickenBiryaniRecipe');
  };
  const handleButterChicken = () => {
    navigation.navigate('ButterChickenRecipe');
  };
  const handleCholeBhature = () => {
    navigation.navigate(' CholeBhatureRecipe');
  };
  const handleFishCurry = () => {
    navigation.navigate('FishCurryRecipe');
  };
  const handleDalMakhani = () => {
    navigation.navigate('DalMakhaniRecipe')
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <TouchableOpacity style={styles.itemContainer} onPress={handleBriyani} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./briyani.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}> Chicken Biryani</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleButterChicken} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./butter.webp')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Butter Chicken</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleCholeBhature} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./chole.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Chole Bhature</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleFishCurry} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./fish.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Fish Curry</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={handleDalMakhani} activeOpacity={0.8}>
        <View style={styles.listItem}>
          <Image
            source={require('./dal.jpg')}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Dal Makhani</Text>
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

export default LunchIndian;
