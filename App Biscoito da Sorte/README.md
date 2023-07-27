<h1 align="center"> Projeto Biscoito da Sorte </h1>
Esta aplicação foi desenvolvida no decorrer do curso Fabrica de Aplicativos, 
A finalidade desse projeto é desenvolver habilidades básicas de utilização das linguagens React Native e JavaScript.

<br>
<h1> Descrição do Projeto </h1>
O biscoito da sorte foi uma aplicação desenvolvida em React Native e JavaScript. Também foi utilizado conceitos de CSS para estilização. As próximas subseções descrevem o código e suas funcionalidades, sendo divididas em:

- Componentes Importados.
- Função App.
- Função de quebrar biscoito.
- Função de reiniciar o jogo.
- Return:
  - Background.
  - Imagem do biscoito.
  - TouchableOpacity.
- StyleSheet.
  
<h3>Componentes Importados:</h3>
O useState permite criar estados no componente através de função, além de fazer o gerenciamento do estado do componente e retorna um array como resultado.
<br>A View é o compoenente principal para construir a interface da aplicação, é como se fosse um container onde fica o layout e estilos. Na Programação Web seria a div.
<br>O Text é a tag utilizada para inserir textos na aplicação.
<br>O StyleSheet é uma abstração do CSS para estilizar componentes no React Native.
<br>Já o Image é um componente para carregar e exibir imagens na aplicação.
<br>O TouchableOpacity envolve o elemento, botão, diminuindo a opacidade ao ser clicado, e retornando uma ação ou mensagem ao usuário.
<br>O ImageBackground componente utilizado para inserção de imagens no background da aplicação. Não foi explicado na aula, utilizei para o APP ficar mais bonito. 

```javascript
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from "react-native";
```
<h3>Função App:</h3>
Na função principal do aplicativo, foram definidas constantes para utilização do useState, uma variável para armazenar as frases, além de definir as funções de quebrar o biscoito e reinicar o jogo. 
<br> O retorno da função principal tem o background e os botões. É nele que as funções são chamadas quando o botão é precionado.

```javascript
const [img, setImg] = useState(require('./src/biscoito.png'));
const [textoFrase, setTextoFrase] = useState('');
```
<h3>Função de quebrar biscoito:</h3>
Essa função quando é invocada, utiliza o floor e o random, do Math de JavaScript para selecionar um número inteiro entre as posições do vetor frases. O length é para retornar a quantidade de posições presentes naquele vetor.
<br>O setTextoFrase e o setImg altera o estado (useState definidos na constante no ínicio), inserindo texto e imagens novas. 

```javascript
function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length)

    setTextoFrase(' "' + frases[numeroAleatorio] + '" ');
    setImg(require('./src/biscoitoAberto.png'));
  }
```

<h3>Função de reiniciar o jogo:</h3>
Esta função reinicia a aplicação para seu estado inicial, sem frase e com a imagem do biscoito intacto tela. 

```javascript
function reiniciarBiscoito() {
    setTextoFrase('');
    setImg(require('./src/biscoito.png'));
  }
```

<h3>Return:</h3>
Quando a aplicação é utilizada o Return irá passar o que está acontecendo. O background é inserido no ínicio junto com a imagem do biscoito e a frase abaixo, a frase não aparece no app no ínicio, já que está setado como vazio.

```javascript
return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./src/backgroud.jpg')}
        style={styles.imageBackground}
      >

        <Image source={img}
          style={styles.img}
        />

        <Text style={styles.textofrase}> {textoFrase} </Text>
```

Após é colocado os botões e fecha a tag do background, tudo com suas devidas estilizações. 

```javascript
<TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: '#fff' }]} onPress={reiniciarBiscoito}>
          <View style={styles.btnArea}>
            <Text style={[styles.btnTexto, { color: '#fff' }]}>Reiniciar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
```

<h3>StyleSheet:</h3>
 Após o return é inserido uma constante que irá gerenciar os estilos da aplicação e no final o app é exportado, chamando a função principal para iniciar o aplicativo. 

```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 230,
    height: 230,
  },
  textofrase: {
    fontSize: 22,
    color: '#fff',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    height: '100%',
    width: '100%'
  },
})

export default App;
```

<br>
<h1> Tecnologias Utilizadas </h1>

- ``React Native``
- ``JavaScript``
- ``CSS``
