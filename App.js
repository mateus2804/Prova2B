import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './src';

export default function App() {

  let [personagens, setPersonagens] = useState([]);

  const base_url = 'https://swapi.dev/api/people/'

  useEffect(function(){
    fetch(base_url)
      .then(data => data.json())
      .then(objeto => {
        setPersonagens(objeto.data)
    })
  }, []);

  return (
    <View style={styles.container}>
      { personagens.length != 10 ? personagens.map(personagem =>
      <Card name={personagem.name}></Card>): 
      <Text>Carregando...</Text> }
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
});
