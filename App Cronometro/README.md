<h1 align="center"> Projeto Cronômetro </h1>
Esta aplicação foi desenvolvida no decorrer do curso Fabrica de Aplicativos, 
A finalidade desse projeto é desenvolver habilidades básicas de utilização das linguagens React Native e JavaScript.

<br>
<h1> Descrição do Projeto </h1>
O App Cronômetro foi desenvolvido em React Native e JavaScript. Também foi utilizado conceitos de CSS para estilização. As próximas subseções descrevem o código e suas funcionalidades, sendo divididas em:

- Componentes Importados.
- Função App.
- Função de Iniciar.
- Função de Limpar.
- Return.
- StyleSheet.
  
<h3>Componentes Importados:</h3>
O useState permite criar estados no componente através de função, além de fazer o gerenciamento do estado do componente e retorna um array como resultado.
<br>A View é o compoenente principal para construir a interface da aplicação, é como se fosse um container onde fica o layout e estilos. Na Programação Web seria a div.
<br>O Text é a tag utilizada para inserir textos na aplicação.
<br>O StyleSheet é uma abstração do CSS para estilizar componentes no React Native.
<br>Já o Image é um componente para carregar e exibir imagens na aplicação.
<br>O TouchableOpacity envolve o elemento, botão, diminuindo a opacidade ao ser clicado, e retornando uma ação ou mensagem ao usuário.

```javascript
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;
```
Foram definidas variáveis com valor 0, para o crônometro iniciar zerado. 

<h3>Função App:</h3>
Definidas as contantes para utilizar o useState para modificar o estado do componente ao decorrer da utilização do App.

```javascript
function App() {
  const [numero, setNumero] = useState(0);
  const [botao, setBotao] = useState('INICIAR');
  const [ultimo, setUltimo] = useState(null);
```
<h3>Função de Iniciar:</h3>
 Está função inicia a contagem do tempo. Mudando o tempor de 60 em 60 e o formato que aparece do tempo, caso seja menor que 10, sempre é adicionado um 0 antes. O nome do botão também é alterado, caso esteja zerado(null), é INICIAR, se não, é PARAR.

```javascript
function iniciar() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
      setBotao('INICIAR');
    } else {
      timer = setInterval(() => {
        ss++;

        if (ss == 60) {
          ss = 0;
          mm++;
        }
        if (mm == 60) {
          mm = 0;
          hh++;
        }

        let format =
          (hh < 10 ? '0' + hh : hh) + ':'
          + (mm < 10 ? '0' + mm : mm) + ':'
          + (ss < 10 ? '0' + ss : ss);

        setNumero(format);

      }, 1000);

      setBotao('PARAR')

    }

  }
```

<h3>Função de Limpar:</h3>
Esta função irá zerar o crônometro, setando para 0 as variáveis e mudando o nome do botão para INICIAR.

```javascript
function limpar() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }

    setUltimo (numero);
    setNumero(0);
    ss = 0;
    mm = 0;
    hh = 0;
    setBotao('INICIAR');

  }
```

<h3>Return:</h3>
O return tem as View´s que contem os elementos gráficos presente na aplicação. 

```javascript
return (
    <View style={styles.container}>

      <Image
        source={require('./src/crono.png')}
      />
      <Text style={styles.timer}> {numero} </Text>

      <View style={styles.btnArea}>

        <TouchableOpacity style={styles.btn} onPress={iniciar}>
          <Text style={styles.btnTexto}> {botao} </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={limpar}>
          <Text style={styles.btnTexto}>LIMPAR</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.areaUltima}>
        <Text style={styles.textoCorrida}>
          {ultimo ? 'Ultimo tempo: ' + ultimo : ''}
        </Text>
      </View>

    </View>
  );
```


<h3>StyleSheet:</h3>
Após o return é inserido uma constante que irá gerenciar os estilos da aplicação e no final o app é exportado, chamando a função principal para iniciar o aplicativo. 

```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#00aeef'
  },
  timer: {
    marginTop: -160,
    fontSize: 45,
    fontWeight: 'bold',
    color: '#fff'
  },
  btnArea: {
    flexDirection: "row",
    marginTop: 130,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 25
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaUltima: {
    marginTop: 40,
  },
  textoCorrida: {
    fontSize: 23,
    color: '#fff',
    fontStyle: 'italic',
  }
})

export default App;
```

<br>
<h1> Tecnologias Utilizadas </h1>

- ``React Native``
- ``JavaScript``
- ``CSS``
