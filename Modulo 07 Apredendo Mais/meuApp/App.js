import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Switch, Button, ScrollView } from "react-native";

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';


export default function App() {
  const [inputNome, setInputNome] = useState('');
  const [inputIdade, setInputIdade] = useState('');
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [escolherSexo, setEscolherSexo] = useState(0);
  const [sexo, setSexo] = useState([
    { key: 1, nome: 'Masculino' },
    { key: 2, nome: 'Feminino' },
  ])
  const [escolherPais, setEscolherPais] = useState(0);
  const [pais, setPais] = useState([
    { key: 3, pais: 'Brazil' },
    { Key: 4, pais: 'EUA' },
    { key: 5, pais: 'Meu país Ceará' }
  ])


  const [limite, setLimite] = useState(1000);
  const [estudante, setEstudante] = useState(false);
  const [empregado, setEmpregado] = useState(false);

  let sexoItens = sexo.map((itens, posição) => {
    return <Picker.Item
      key={posição}
      value={posição}
      label={itens.nome}
    />
  })

  let paisItens = pais.map((itens, posição) => {
    return <Picker.Item
      key={posição}
      value={posição}
      label={itens.pais}
    />
  })


  function informacoes() {

    if (inputNome === '' || inputIdade === '') {
      alert('Preencha todos os campos');
      return;
    }

    setNome('Nome: ' + inputNome);
    setIdade('Idade: ' + inputIdade);
    alert(`${nome}
    \n${idade}
    \nSexo: ${sexo[escolherSexo].nome}
    \nPaís: ${pais[escolherPais].pais}
    \nLimite: ${limite}
    \nEstudante: ${estudante ? 'SIM' : 'NÃO'}
    \nTrabalha: ${empregado ? 'SIM' : 'NÃO'}
    `);
  }

  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.nomeBanco}>Banco do Brauwol</Text>
        <TextInput
          style={styles.textos}
          placeholder='Digite seu nome!'
          onChangeText={(textoNome) => setInputNome(textoNome)}
        />

        <TextInput
          style={styles.textos}
          placeholder='Digite sua idade!'
          onChangeText={(textoIdade) => setInputIdade(textoIdade)}
        />

        <Picker
          style={styles.picker}
          selectedValue={escolherSexo}
          onValueChange={(itemValue, itemIndex) => {
            setEscolherSexo(itemValue)
          }}
        >
          {sexoItens}
        </Picker>

        <Picker
          style={styles.picker}
          selectedValue={escolherPais}
          onValueChange={(itemValue, itemIndex) => {
            setEscolherPais(itemValue)
          }}
        >
          {paisItens}
        </Picker>

        <Slider
          style={styles.slider}
          minimumValue={1000}
          maximumValue={5000}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000FFF"
          thumbTintColor="#000000"
          value={limite}
          onValueChange={(valoSelecionado) => setLimite(valoSelecionado)}
        />

        <Text style={styles.textIdade}>Você quer: R$ {limite.toFixed(2)} de limite. </Text>

        <Text style={styles.textoEstudante}>
          Estudante: {estudante ? 'SIM' : 'NÃO'}
        </Text>

        <Switch
          value={estudante}
          onValueChange={(valorEstudante) => setEstudante(valorEstudante)}
          trackColor={{ false: '#ff0000', true: '#00ff00' }}
          thumbColor={estudante ? '#00ff00' : '#ff0000'}
          style={styles.switchEstudante}
        />

        <Text style={styles.textoEstudante}>
          Trabalha: {empregado ? 'SIM' : 'NÃO'}
        </Text>

        <Switch
          value={empregado}
          onValueChange={(valorEmpregado) => setEmpregado(valorEmpregado)}
          trackColor={{ false: '#ff0000', true: '#00ff00' }}
          thumbColor={empregado ? '#00ff00' : '#ff0000'}
          style={styles.switchEstudante}
        />

        <Button
          title="Entrar"
          onPress={informacoes}
        />

      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
  nomeBanco: {
    flex: 1,
    fontSize: 35,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#BFBFBF',
    color: '#fff',
    fontWeight: 'bold',
    maxHeight: 60,
    marginBottom: 45,
    marginTop: 25
  },
  picker: {
    backgroundColor: '#BFBFBF',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  textos: {
    paddingLeft: 30,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 20
  },
  slider: {
    marginTop: 15,
  },
  textIdade: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  switchEstudante: {
    marginTop: 5,
    alignSelf: 'center'
  },
  textoEstudante: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 25,
    fontWeight: 'bold'
  }
})

