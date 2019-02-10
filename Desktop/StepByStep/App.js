import React, { Component } from 'react';
import { Alert,Button,StyleSheet, View } from 'react-native';

export default class App extends Component {
  _onPressButton(){
    Alert.alert('You tapped the button!')
  } 


  render() {
    return (
      <View style = {styles.container}>
        <View style ={styles.buttonContainer}>
          <Button 
            onPress ={this._onPressButton}
            title = 'Press Me1'
          />
        </View>
        <View style ={styles.buttonContainer}>
          <Button 
            onPress ={this._onPressButton}
            title = 'Press Me2'
            color="#841584"
          />
        </View>

        <View style ={styles.alter}>
          <Button 
            onPress ={this._onPressButton}
            title = 'Press Me3'
          />
          <Button 
            onPress ={this._onPressButton}
            title = 'Press Me4'
            color="#841584"
          />
        </View>



      </View>
     );
  }
}

const styles = StyleSheet.create(
  {
    container :{
      flex :1,
      justifyContent : 'center',

    },
    buttonContainer :{
      margin :30
    },
    alter :{
      margin :20,
      flexDirection :'row',
      justifyContent : 'space-between'
    }
  }
);