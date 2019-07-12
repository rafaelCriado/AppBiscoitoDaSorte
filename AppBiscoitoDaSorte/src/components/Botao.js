import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class Botao extends Component{
    constructor(props){
        super(props);
        this.state = {};

        this.estilo = StyleSheet.create({
        botao:{
            backgroundColor: 'transparent',
            width: 250,
            height: 50,
            borderColor: props.cor,
            borderWidth: 2,
            borderRadius: 25,
        },
        botaoArea:{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        botaoTexto:{
            color: props.cor, 
            fontSize: 14,
            fontWeight: 'bold'
        }
        });
    }

    render() {
        return(
        <TouchableOpacity style={this.estilo.botao} onPress={this.props.onPress}>
            <View style={this.estilo.botaoArea}>
            <Text style={this.estilo.botaoTexto}>{this.props.texto}</Text>
            </View>
        </TouchableOpacity>
        );
    }
}