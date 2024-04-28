import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Ajout de l'importation

export default function Personnages() {
  const [characters, setCharacters] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('http://api-fantasygame.eu-4.evennode.com/get-characters')
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      })
      .catch((error) => {
        console.error('Error fetching characters:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LEGENDS OF XEFI </Text>
      <StatusBar style="auto" />
      {characters.map((character, index,) => (
        <Text key={index}> {'\n'} {character.name} </Text>
      ))}
      {characters.map((character,description) =>(
        <Text key={description}>{'\n'} {character.description}</Text>
      ))
      }
       {characters.map((character, rarity,) => (
        <Text key={rarity}> Rareté : {character.rarity} </Text>
      ))}
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
};
