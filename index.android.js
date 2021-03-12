import React from 'react';
import {View, Text, AppRegistry, Image, TouchableOpacity, Alert} from 'react-native';

const Style = {
    principal:{
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: 'center',
      alignItems: "center"
    },
    botao:{
      backgroundColor: "#538530",
      margin: 20,
      paddingVertical: 10,
      paddingHorizontal: 40
    },
    textoBotao: {
      color: '#fff',
      fontSize: 15,
      fontWeight: 'bold'
    }
}

const App = () => {
  const { principal, botao, textoBotao } = Style;
  const frases = [
    'O otimismo é a fé daquele que conduz à realização; nada pode ser feito sem esperança.',
    'Nunca perca a esperança!',
    'Não seja vítima das dificuldades, tente ultrapassá-las!',
    'A vida é 10% o que acontece a você e 90% como você reage a isso.',
    'Não existe nada de completamente errado no mundo, mesmo um relógio parado, consegue estar certo duas vezes por dia.',
    'Não é a carga que o derruba, mas a maneira como você a carrega.',
    'Acredite em milagres, mas não dependa deles.',
    'Descubra quem é você, e seja essa pessoa. A sua alma foi colocada nesse mundo para ser isso, então viva essa verdade e todo resto virá.',
    'Conhecer a si mesmo é o começo de toda sabedoria.',
    'Coragem é saber o que não temer',
  ]
  const gerarFrase = () => {
    var random = Math.random();
    var index = Math.floor(random * 10);
    Alert.alert(frases[index]);
  }
  return (
    <View style={principal}>
      <Image source={require('./imgs/logo.png')} />
      <TouchableOpacity 
        style={botao} 
        onPress={ gerarFrase}
      >
        <Text style={textoBotao}>Nova frase</Text>
      </TouchableOpacity>
    </View>
  )
};

AppRegistry.registerComponent('frasesDoDia', () => App);
