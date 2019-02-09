import React, { Component } from 'react';
import { View,Text,StyleSheet} from 'react-native';

export default class App extends Component {
 render(){
    
    return (
       //flexDirection deafult is : column
       //justifyContent :flex-start, center, flex-end, 
       //space-around, space-between and space-evenly.

       <View style = {{
         flex :1,
         flexDirection : 'row',
         justifyContent : 'space-between',
         }}> 
     
            <View style = {{height : 50,width:50 , backgroundColor: 'powderblue'}}/>
            <View style = {{height : 50,width:50 , backgroundColor: 'skyblue'}}/>
            <View style = {{height : 50,width:50, backgroundColor: 'steelblue'}}/>
     </View>
    );
  }
}

