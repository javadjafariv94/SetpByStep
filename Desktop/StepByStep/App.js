import React, { Component } from 'react';
import { Alert, Platform, StyleSheet,Text,
         ScrollView,Image,
         View } from 'react-native';

export default class App extends Component {
 
  render() {
    return (
      <ScrollView>
        
        <Text style={{fontSize:96}}>Scroll me plz 1</Text>
        <Text style={{fontSize:96}}>Scroll me plz 2</Text>
        <Text style={{fontSize:96}}>Scroll me plz 3</Text>
        <Text style={{fontSize:96}}>Scroll me plz 4</Text>
        <Text style={{fontSize:96}}>Scroll me plz 5</Text>
        
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
         
        <Text style={{fontSize:30}}>Scroll me plz 10</Text>
        <Text style={{fontSize:30}}>Scroll me plz 20</Text>
        <Text style={{fontSize:30}}>Scroll me plz 30</Text>
        <Text style={{fontSize:30}}>Scroll me plz 40</Text>
        <Text style={{fontSize:30}}>Scroll me plz 50</Text>
      </ScrollView>
     );
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
