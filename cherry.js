import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const CherryRecipe = () => {
  const handleLinkPress = () => {
    const url = 'https://youtu.be/sU-L5HlT6Bc?si=4ObYmzQdTNa7T03U';

    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  return (
    <ImageBackground
      source={require('./recipe1.jpg')}
      style={styles.background}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Cherry Compote</Text>

          <Text style={styles.sectionText}>Duration: 20 minutes</Text>

          <View style={styles.con}>
            <Text style={styles.youtube}>
              YOUTUBE LINK:
              <TouchableOpacity onPress={handleLinkPress}>
                <Text style={styles.linkText}>https://youtu.be/sU-L5HlT6Bc?si=4ObYmzQdTNa7T03U</Text>
              </TouchableOpacity>
            </Text>
          </View>

          <Text style={styles.sectionTitle}>Ingredients:</Text>
          <Text style={styles.text}>- 2 cups fresh or frozen cherries, pitted</Text>
          <Text style={styles.text}>- 1/2 cup granulated sugar</Text>
          <Text style={styles.text}>- 1 tablespoon lemon juice</Text>
          <Text style={styles.text}>- 1/2 teaspoon vanilla extract</Text>
          <Text style={styles.text}>- 1 tablespoon cornstarch (optional, for thickening)</Text>

          <Text style={styles.sectionTitle}>Instructions:</Text>
          <Text style={styles.text}>1. In a saucepan, combine the pitted cherries, granulated sugar, lemon juice, and vanilla extract.</Text>
          <Text style={styles.text}>2. Cook the mixture over medium heat, stirring occasionally, until the cherries release their juices and the sugar dissolves.</Text>
          <Text style={styles.text}>3. If you prefer a thicker consistency, mix cornstarch with a little water to create a slurry. Add it to the cherry mixture and continue to cook until the compote thickens.</Text>
          <Text style={styles.text}>4. Remove the saucepan from heat and let the cherry compote cool slightly before serving.</Text>

          <Text style={styles.lasttext}>Enjoy your homemade Cherry Compote!</Text>
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
    marginTop:10,
    left:60
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

export default CherryRecipe;
