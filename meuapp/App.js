import React from "react";
import { View, Text, StyleSheet } from "react-native";

function App() {

  return (
    <View style={styles.area}>

      <Text style={[styles.titulo, styles.textoalinhado]}> Charllys </Text>
      <Text style={styles.titulo}> 29 </Text>
      <Text style={styles.subtitulo}> texto subtitulo </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  area:{
    marginTop: 50
  },
  titulo:{
    fontSize: 30,
    color: 'red'
  }, 
  textoalinhado: {
    textAlign: 'center'
  },
  subtitulo: {
    color: 'green',
    fontSize: 20
  }
})

export default App;