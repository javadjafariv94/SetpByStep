import React,{Component} from 'react';
import {Text,View} from 'react-native';

export default class Greeting extends Component{

    render(){
    
    
     return(
       <View>
          <Text>{ this.props.name }  { this.props.family }             {this.props.city}  </Text>
    
        </View>
     );
    }
    }
    