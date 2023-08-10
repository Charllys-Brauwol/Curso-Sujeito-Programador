import React from "react";
import { View, Text, StyleSheet } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>

      <Text>Sujeito Programador</Text>

      <FontAwesome
        name={"home"}
        size={25}
        color="#11118c"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})