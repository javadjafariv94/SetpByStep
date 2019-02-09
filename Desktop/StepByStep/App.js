import React, { Component } from 'react';
import { View,Text,StyleSheet} from 'react-native';

const mystyles = StyleSheet.create({
  bigBlue:{
    color:'blue',
    fontWeight :'bold',
    fontSize : 30,
  },
  red:{
    color :'red',
  },  

  });

export default class App extends Component {
 render(){
    
    return (
      <View>
      <Text style = {mystyles.red}> Are you ok ? </Text>
      <Text style = {mystyles.bigBlue}> Are you ok ? </Text>
      <Text style = { [mystyles.bigBlue , mystyles.red]  }> Are you ok ? </Text>
      <Text style = { [mystyles.red , mystyles.bigBlue]  }> Are you ok ? </Text>
     </View>
    );
  }
}

