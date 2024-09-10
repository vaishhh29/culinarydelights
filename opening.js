import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video } from 'expo-av';
import { Asset } from 'expo-asset';
import { useNavigation } from '@react-navigation/native'; 
const OpenScreen = () => {
  const navigation = useNavigation();
  const videoAsset = Asset.fromModule(require('./assets/video/cd.mp4'));

  const handleLoginPress = () => {
    navigation.navigate('LoginScreen');

  };
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: videoAsset.uri }}
        style={styles.video}
        resizeMode="cover"
        shouldPlay
        isLooping
      />
      <View style={styles.button1Container}>
        <Button title="User" onPress={handleLoginPress} color={'grey'}/>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    flex: 1,
  },
  button1Container: {
    position: 'absolute',
    bottom: 80,
    left: 90,
    right: 90,
    
    },
 
}
);

export default OpenScreen;
