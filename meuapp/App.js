import React from "react";
import { View, Text } from "react-native";

function App() {

  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems:'flex-start' }}>

      <View style={{ height: 50, width: 50, backgroundColor: '#121212' }}></View>
      <View style={{ height: 50, width: 50, backgroundColor: 'red' }}></View>
      <View style={{ height: 50, width: 50, backgroundColor: 'green' }}></View>

    </View>
  );
}

export default App;