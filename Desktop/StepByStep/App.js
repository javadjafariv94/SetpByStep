import React, { Component } from 'react';
import { Image ,View,Text} from 'react-native';

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

class Greeting extends Component{
render(){


 return(
   <View>
      <Text>{ this.props.name }  { this.props.family }             {this.props.city} </Text>

    </View>
 );
}
}
