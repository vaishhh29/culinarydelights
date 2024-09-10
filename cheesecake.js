import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const CheesecakeRecipe = () => {
  const handleLinkPress = () => {
    const url = 'https://youtu.be/wNLxiRcNsPg?si=t9XTLwYrl7h-lFMA';

    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  return (
    <ImageBackground
      source={require('./recipe1.jpg')}
      style={styles.background}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}> Classic Cheesecake</Text>

          <Text style={styles.sectionText}>Duration: 4 hours</Text>

          <View style={styles.con}>
            <Text style={styles.youtube}>
              YOUTUBE LINK:
              <TouchableOpacity onPress={handleLinkPress}>
                <Text style={styles.linkText}>https://youtu.be/wNLxiRcNsPg?si=t9XTLwYrl7h-lFMA</Text>
              </TouchableOpacity>
            </Text>
          </View>

          <Text style={styles.sectionTitle}>Ingredients:</Text>
          <Text style={styles.text}>- 2 cups graham cracker crumbs</Text>
          <Text style={styles.text}>- 1/2 cup unsalted butter, melted</Text>
          <Text style={styles.text}>- 4 packages (32 ounces) cream cheese, softened</Text>
          <Text style={styles.text}>- 1 1/4 cups granulated sugar</Text>
          <Text style={styles.text}>- 1 teaspoon vanilla extract</Text>
          <Text style={styles.text}>- 4 large eggs</Text>
          <Text style={styles.text}>- 1 cup sour cream</Text>
          <Text style={styles.text}>- 1/4 cup all-purpose flour</Text>

          <Text style={styles.sectionTitle}>Instructions:</Text>
          <Text style={styles.text}>1. Preheat your oven to 325°F (163°C). Grease and line the bottom of a springform pan with parchment paper.</Text>
          <Text style={styles.text}>2. In a bowl, combine graham cracker crumbs and melted butter. Press the mixture into the bottom of the prepared pan to create the crust.</Text>
          <Text style={styles.text}>3. In a large mixing bowl, beat the cream cheese until smooth. Add sugar and vanilla extract, then beat until well combined.</Text>
          <Text style={styles.text}>4. Add eggs one at a time, beating well after each addition. Scrape down the sides of the bowl as needed.</Text>
          <Text style={styles.text}>5. Mix in sour cream and flour until the batter is smooth.</Text>
          <Text style={styles.text}>6. Pour the batter over the prepared crust in the springform pan.</Text>
          <Text style={styles.text}>7. Bake in the preheated oven for about 1 hour or until the center is set.</Text>
          <Text style={styles.text}>8. Allow the cheesecake to cool in the pan for 1 hour, then refrigerate for at least 3 hours before serving.</Text>

          <Text style={styles.lasttext}>Enjoy your homemade Classic Cheesecake!</Text>
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
    marginBottom: 15,
    color: 'brown',
    letterSpacing: 2,
    marginTop:20,
    left:40
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

export default CheesecakeRecipe;
