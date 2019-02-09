import React, { Component } from 'react';
import { View,Text,StyleSheet} from 'react-native';

export default class App extends Component {
 render(){
    
    return (
       //flexDirection deafult is : column
       
       //justifyContent :flex-start, center, flex-end, 
       //space-around, space-between and space-evenly.

       //alignItems : flex-start, center, flex-end, and stretch.

       <View style = {{
         flex :1,
         flexDirection : 'column',
         justifyContent : 'center',
         alignItems : 'stretch',
         }}> 
     
            <View style = {{height : 50,width:50 , backgroundColor: 'powderblue'}}/>
            <View style = {{height : 50, backgroundColor: 'skyblue'}}/>
            <View style = {{height : 50, backgroundColor: 'steelblue'}}/>
     </View>
    );
  }
}

