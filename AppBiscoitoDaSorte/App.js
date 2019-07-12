import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import Botao from './src/components/Botao';
import Frases from './src/frases';
import styles from './src/css/styles';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = { texto: 'Frase do dia...' };
  }

  quebrarBiscoito = ()=>{
    this.setState({
      'texto': Frases[Math.floor(Math.random()*Frases.length)]
    });
  }

  render(){
    return(
      <View style={styles.body}>
        <Image source={require('./src/images/cookie.png')}></Image>
        <Text style={styles.texto}>"{this.state.texto}"</Text>
        <Botao cor='#b59619' texto='Quebrar Biscoito' onPress={this.quebrarBiscoito}/>
      </View>
    );
  }
} 