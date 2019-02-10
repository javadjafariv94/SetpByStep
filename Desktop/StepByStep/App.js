import React, { Component } from 'react';
import { Alert,Button, View } from 'react-native';

export default class PizzaTranslator extends Component {


  render() {
    return (
      <View>
      <Button onPress = {
            () => {Alert.alert('You tapped the button!'); }}
            title ="Press me"
            />
       </View>
      
    );
  }
}