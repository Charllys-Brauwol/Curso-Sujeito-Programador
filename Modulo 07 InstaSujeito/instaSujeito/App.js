import React from "react";
import { View, Text, StyleSheet } from 'react-native';

import Header from "./src/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})