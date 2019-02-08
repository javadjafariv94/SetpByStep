import React, { Component } from 'react';
import { Image ,View,Text} from 'react-native';
import Greeting from './ReactNative/greeting'
export default class App extends Component {
 render(){
    
    return (
      <View>
         
         <Greeting name='javad'  family ='jafari'  city='Shabestar'/>
         <Greeting name='azam'   family ='montazeri' city='Vaygan'/>
         <Greeting name='erfan'  family='jafari1'  city='Lanadan'/>
         <Greeting name='ali'    family='jafari2'  city='Tabriz'/>
         <Greeting name='fatemeh'family='jafari3'  city='Tehran'/>

     </View>
    );
  }
}

