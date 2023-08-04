import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";


export default function App() {
  const [status, setStatus] = useState(false);

  return (
    <View style={styles.container}>

      <Switch
        value={status}
        onValueChange={(valorSelecionado) => {
          setStatus(valorSelecionado)
        }}
        trackColor={{ false: '#ff0000', true: '#00ff00' }}
        thumbColor={ status ? '#00ff00' : '#ff0000'}
      />

      <Text style={{ textAlign: 'center', fontSize: 25 }}>
        Status: {status ? 'Ativo' : 'Inativo'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
})

