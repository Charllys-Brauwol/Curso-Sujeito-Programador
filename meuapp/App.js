import React from "react";
import { View, Text, Image } from "react-native";

function App() {

  return (
    <View>
      <Text>Olá Mundo!</Text>
      <Text style={{ color: 'red', fontSize: 25, margin: 15 }}>Meu primeiro App!</Text>
      <Text style={{ fontSize: 18, color: 'green' }}>
        Sujeito Programador
      </Text>

      <Logo largura={350} altura={350} fulano="Brauwol"/>

    </View>
  );
}

export default App;

//Componente a primeira letra é maiúscula 
function Logo(props) {
  
  let img = 'https://sujeitoprogramador.com/reactlogo.png';
  
  return (
    <View>
  <Image source={{ uri: img }} style={{ width: props.largura, height: props.altura }} />
  <Text> { props.fulano } </Text>
  </View>
);
}