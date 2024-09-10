import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const AnmitsuRecipe = () => {
  const handleLinkPress = () => {
    const url = 'https://youtu.be/DDzzIU8kD9U?si=OtW9HLDctAjhRNlj';

    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  return (
    <ImageBackground
      source={require('./recipe1.jpg')}
      style={styles.background}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Anmitsu</Text>

          <Text style={styles.sectionText}>Duration: 1.5 hours</Text>

          <View style={styles.con}>
            <Text style={styles.youtube}>
              YOUTUBE LINK:
              <TouchableOpacity onPress={handleLinkPress}>
                <Text style={styles.linkText}>https://youtu.be/DDzzIU8kD9U?si=OtW9HLDctAjhRNlj</Text>
              </TouchableOpacity>
            </Text>
          </View>

          <Text style={styles.sectionTitle}>Ingredients:</Text>
          <Text style={styles.text}>- 1 pack agar agar (kanten) strips</Text>
          <Text style={styles.text}>- 4 cups water</Text>
          <Text style={styles.text}>- 1/2 cup sugar</Text>
          <Text style={styles.text}>- Assorted fruits (e.g., anko - sweet red bean paste, peaches, strawberries, kiwi)</Text>
          <Text style={styles.text}>- Mochi balls</Text>
          <Text style={styles.text}>- Anko sauce (sweet red bean paste mixed with water)</Text>
          <Text style={styles.text}>- Vanilla ice cream (optional)</Text>

          <Text style={styles.sectionTitle}>Instructions:</Text>
          <Text style={styles.text}>1. Rinse agar agar strips and soak them in water for about 30 minutes.</Text>
          <Text style={styles.text}>2. In a saucepan, combine agar agar strips and water. Bring to a boil, then simmer until agar agar dissolves.</Text>
          <Text style={styles.text}>3. Add sugar to the mixture and stir until dissolved. Pour the liquid into a mold and let it set in the refrigerator.</Text>
          <Text style={styles.text}>4. Once set, cut the agar agar into cubes.</Text>
          <Text style={styles.text}>5. Arrange the agar agar cubes, assorted fruits, mochi balls, and anko sauce in serving bowls or plates.</Text>
          <Text style={styles.text}>6. Optionally, top with a scoop of vanilla ice cream.</Text>

          <Text style={styles.lasttext}>Enjoy your homemade Anmitsu!</Text>
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
    left:120
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

export default AnmitsuRecipe;
