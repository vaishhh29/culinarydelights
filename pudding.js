import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const PuddingRecipe = () => {
  const handleLinkPress = () => {
    const url = 'https://youtu.be/1sPorW7SOt4?si=fvay5F0zRyOoQa1N';

    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  return (
    <ImageBackground
      source={require('./recipe1.jpg')}
      style={styles.background}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Custard Pudding</Text>

          <Text style={styles.sectionText}>Duration: 1 hour</Text>

          <View style={styles.con}>
            <Text style={styles.youtube}>
              YOUTUBE LINK:
              <TouchableOpacity onPress={handleLinkPress}>
                <Text style={styles.linkText}>https://youtu.be/1sPorW7SOt4?si=fvay5F0zRyOoQa1N</Text>
              </TouchableOpacity>
            </Text>
          </View>

          <Text style={styles.sectionTitle}>Ingredients:</Text>
          <Text style={styles.text}>- 2 cups whole milk</Text>
          <Text style={styles.text}>- 4 large eggs</Text>
          <Text style={styles.text}>- 1/2 cup granulated sugar</Text>
          <Text style={styles.text}>- 1 teaspoon vanilla extract</Text>
          <Text style={styles.text}>- Caramel sauce (for coating the mold)</Text>

          <Text style={styles.sectionTitle}>Instructions:</Text>
          <Text style={styles.text}>1. Preheat your oven to 325°F (160°C).</Text>
          <Text style={styles.text}>2. In a saucepan, heat the whole milk until it's warm but not boiling.</Text>
          <Text style={styles.text}>3. In a mixing bowl, whisk together eggs, granulated sugar, and vanilla extract until well combined.</Text>
          <Text style={styles.text}>4. Slowly pour the warm milk into the egg mixture while continuously whisking to avoid curdling.</Text>
          <Text style={styles.text}>5. Strain the custard mixture to ensure a smooth texture.</Text>
          <Text style={styles.text}>6. Coat the pudding mold with caramel sauce.</Text>
          <Text style={styles.text}>7. Pour the custard mixture into the mold.</Text>
          <Text style={styles.text}>8. Place the mold in a baking dish, fill the dish with hot water (creating a water bath), and bake for about 45-50 minutes or until the custard is set.</Text>
          <Text style={styles.text}>9. Allow the custard pudding to cool, then refrigerate for at least 2 hours before serving.</Text>

          <Text style={styles.lasttext}>Enjoy your homemade Custard Pudding!</Text>
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
    left:60,
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

export default PuddingRecipe;
