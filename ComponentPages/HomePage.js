import * as React from 'react';
import { StyleSheet, Text, View,} from 'react-native';


export default function HomePage() {
    return (
        <View style={styles.container}>

          <Text style={styles.title}>Legends of Xefi {'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
          <Text style={styles.soustitre1}>Bienvenue dans les Terres de Xefi {'\n'} </Text>
          <Text style={styles.textcourant1}>Plongez dans le monde enchanté de Legends of Xefi, un jeu de rôle épique qui vous emmène au cœur d'une saga héroïque où le destin de nombreux royaumes est en jeu. {'\n'}
          {'\n'}Dans ce monde peuplé de créatures mythiques, de guerriers valeureux et de magiciens aux pouvoirs incommensurables, chaque choix que vous faites peut changer le cours de l'histoire.
          </Text>
          <Text style={styles.title2}>{'\n'}{'\n'}Rencontrez des Personnages Inoubliables  {'\n'} </Text>
          <Text style={styles.textcourant2}> Xefi est peuplée de personnages complexes dotés de leurs propres histoires et motivations. {'\n'}{'\n'}
          Forgez des alliances ou rivalisez avec des héros et des antagonistes qui ne sont pas toujours ce qu'ils semblent être. {'\n'}{'\n'}
          Votre capacité à interagir avec ces personnages déterminera votre capacité à réussir dans les quêtes et à influencer le monde autour de vous.{'\n'}{'\n'}</Text>
  
        </View>
        
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      color : "#3B5998",
      fontSize :24,
      fontWeight : 'bold'
    },
    soustitre1:{
      color : "#3B5998",
      fontSize :18,
    },
    title2:{
      color : "#3B5998",
      fontSize :24,
      fontWeight : 'bold'
    },
    textcourant1:{
      fontSize :14,
    },
    textcourant2:{
      backgroundColor : "#3B5998",
      fontSize :14,
      borderRadius: 10,
    }
  });

  