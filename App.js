import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import HomePage from './ComponentPages/HomePage';
import Personnages from './ComponentPages/Personnages';
import Contacts from './ComponentPages/Contact';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



export default function App() {
  return (
    
    <NavigationContainer>
    <Tab.Navigator>
      <Stack.Screen name="Legends Of Xefi" component={HomePage} />
      <Stack.Screen name="Characters" component={Personnages} />
      <Stack.Screen name="Contacts" component={Contacts} />
    </Tab.Navigator>
  </NavigationContainer>
      
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
