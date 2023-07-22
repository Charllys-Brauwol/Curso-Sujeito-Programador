import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

function App() {

  const [nome, setNome] = useState('');

  function pegaNome(texto) {

    if(texto.length > 0){
      setNome('Bem Vindo ' + texto);
    } else {
      setNome('');
    }

  }

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome..."
        onChangeText={(text) => pegaNome(text)}
      />

      <Text style={styles.texto}>{nome}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 45,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 20
  },
  texto: {
    textAlign: 'center',
    fontSize: 30
  }
});

export default App;