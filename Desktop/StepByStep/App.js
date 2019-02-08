import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello world! </Text>
        <Text>My First Project MRI 1397/11/19</Text>
      </View>
    );
  }
}
