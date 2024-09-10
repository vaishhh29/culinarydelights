import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const PieRecipe = () => {
  const handleLinkPress = () => {
    const url = 'https://youtu.be/VCWP5Sso-_A?si=8sa_-qfGLopsTxzO';

    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  return (
    <ImageBackground
      source={require('./recipe1.jpg')}
      style={styles.background}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Sweet Potato Pie</Text>

          <Text style={styles.sectionText}>Duration: 2 hours</Text>

          <View style={styles.con}>
            <Text style={styles.youtube}>
              YOUTUBE LINK:
              <TouchableOpacity onPress={handleLinkPress}>
                <Text style={styles.linkText}>https://youtu.be/VCWP5Sso-_A?si=8sa_-qfGLopsTxzO</Text>
              </TouchableOpacity>
            </Text>
          </View>

          <Text style={styles.sectionTitle}>Ingredients:</Text>
          <Text style={styles.text}>- 3 cups mashed sweet potatoes (about 2-3 medium-sized sweet potatoes)</Text>
          <Text style={styles.text}>- 1 cup granulated sugar</Text>
          <Text style={styles.text}>- 1 cup packed brown sugar</Text>
          <Text style={styles.text}>- 1 cup (2 sticks) unsalted butter, melted</Text>
          <Text style={styles.text}>- 3 large eggs, beaten</Text>
          <Text style={styles.text}>- 1 cup evaporated milk</Text>
          <Text style={styles.text}>- 1 teaspoon vanilla extract</Text>
          <Text style={styles.text}>- 1 teaspoon ground cinnamon</Text>
          <Text style={styles.text}>- 1/2 teaspoon ground nutmeg</Text>
          <Text style={styles.text}>- 1/2 teaspoon salt</Text>
          <Text style={styles.text}>- 1 prepared pie crust</Text>

          <Text style={styles.sectionTitle}>Instructions:</Text>
          <Text style={styles.text}>1. Preheat the oven to 350°F (175°C).</Text>
          <Text style={styles.text}>2. Peel and dice the sweet potatoes. Boil or steam them until they are soft. Mash the sweet potatoes until smooth.</Text>
          <Text style={styles.text}>3. In a large bowl, combine the mashed sweet potatoes, granulated sugar, brown sugar, melted butter, beaten eggs, evaporated milk, vanilla extract, ground cinnamon, ground nutmeg, and salt. Mix until well combined.</Text>
          <Text style={styles.text}>4. Pour the sweet potato mixture into the prepared pie crust.</Text>
          <Text style={styles.text}>5. Bake in the preheated oven for 60-70 minutes or until the center is set. You can check by inserting a toothpick into the center; it should come out clean when the pie is done.</Text>
          <Text style={styles.text}>6. Allow the pie to cool before slicing.</Text>

          <Text style={styles.lasttext}>Enjoy your homemade Sweet Potato Pie!</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  youtube: {
    fontWeight: '900',
    marginRight: 10,
    letterSpacing: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  linkText: {
    color: 'red',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  con: {
    flex: 1,
    justifyContent: 'center',
  },
  sectionText: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 5,
    color: 'purple',
    letterSpacing: 2,
    marginBottom: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 10,
    color: 'brown',
    letterSpacing: 2,
    left:55,
    marginTop:20
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    color: 'brown',
    fontStyle: 'italic',
    letterSpacing: 2,
  },
  text: {
    fontSize: 18,
    color: 'black',
    lineHeight: 28,
    marginBottom: 18,
    fontWeight: '500',
  },
  lasttext: {
    fontSize: 18,
    color: 'black',
    lineHeight: 28,
    marginBottom: 150,
    fontWeight: '500',
  },
});

export default PieRecipe;
