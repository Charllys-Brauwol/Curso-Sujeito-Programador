import React, { useState } from "react";
import { View, Text, Button, Alert } from "react-native";

function App() {
  const [nome, setNome] = useState('Charllys');
  const [idade, setIdade] = useState(20);

  function entrar(nome, idade){
    setNome(nome);
    setIdade(idade);
  }

  return (
    <View style= {{ marginTop: 25 }}>

      <Button title="Mudar nome" onPress={ () => entrar( 'Cavalcante', 35) }/>
      <Text style={{ fontSize: 20 }}> {nome} </Text>
      <Text style={{ fontSize: 17}}> {idade} </Text>
  
    </View>
  );
}

export default App;