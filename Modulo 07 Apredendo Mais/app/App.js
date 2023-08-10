import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Modal } from "react-native";

import Detalhes from "./src/detalhes";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  function abrirModal() {
    setModalVisible(true);
  }

  function sairModal() {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>

      <Button title="Acessar" onPress={abrirModal} />

      <Modal transparent={true} animationType="slide" visible={modalVisible}>
        <Detalhes fechar={sairModal} />
      </Modal>

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