import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Pessoas from "./src/Pessoa/index";

export default function App() {

  const [feed, setFeed] = useState([
    { id: 1, nome: 'Charllys', idade: 30, email: 'brauwol@hgfa' },
    { id: 2, nome: 'Lucas', idade: 23, email: 'lucas@hgfa' },
    { id: 3, nome: 'Claudio', idade: 33, email: 'claudio@hgfa' },
    { id: 4, nome: 'Xines', idade: 39, email: 'xines@hgfa' },
    { id: 5, nome: 'Jose', idade: 22, email: 'jose@hgfa' },
  ]);
  return (
    <View style={styles.container}>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={feed}
        renderItem={({ item }) => <Pessoas data={item} />}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

