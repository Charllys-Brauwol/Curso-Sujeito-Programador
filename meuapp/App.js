import React from "react";
import { View, Text, Image } from "react-native";

function App() {

  let nome = 'Charllys';
  let img = 'https://sujeitoprogramador.com/reactlogo.png';

  return (
    <View>
      <Text>Olá Mundo!</Text>
      <Text style={{ color: 'red', fontSize: 25, margin: 15 }}>Meu primeiro App!</Text>
      <Text style={{ fontSize: 18, color: 'green'}}>
        Sujeito Programador
      </Text>

      <Image
      source={{ uri: img }}
      style={{ width: 300, height: 300}}
      />

      <Text style={{ fontSize: 19 }}>
        {nome}
      </Text>
    </View>
  );
}

export default App;