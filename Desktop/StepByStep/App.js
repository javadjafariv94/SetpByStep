import React, { Component } from 'react';
import { View,Text,StyleSheet} from 'react-native';

export default class App extends Component {
 render(){
    
    return (
       //flexDirection deafult is : column
       <View style = {{flex :1 , flexDirection : 'row'}}> 
     
            <View style = {{height : 50,width:50 , backgroundColor: 'powderblue'}}/>
            <View style = {{height : 50,width:50 , backgroundColor: 'skyblue'}}/>
            <View style = {{height : 50,width:50, backgroundColor: 'steelblue'}}/>
     </View>
    );
  }
}

