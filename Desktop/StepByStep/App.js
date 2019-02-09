import React, { Component } from 'react';
import { View,Text,StyleSheet} from 'react-native';

export default class App extends Component {
 render(){
    // in flex down 1+3+2=6  screen size /6
    return (
       // parent with flex : 1 all screen size selected
       <View style = {{flex :1}}> 
      {/* <View style = {{height:300}}> */}
            <View style = {{flex:1 , backgroundColor: 'powderblue'}}/>
            <View style = {{flex:3 , backgroundColor: 'skyblue'}}/>
            <View style = {{flex:2 , backgroundColor: 'steelblue'}}/>
     </View>
    );
  }
}

