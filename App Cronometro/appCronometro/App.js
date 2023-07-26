import React from "react";
import { View, Text, StyleSheet } from "react-native";

function App () {
  return(
    <View style={styles.container}>
      <Text>Sejeito Programador</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent: "center",
  }
})

export default App;