import React, { Component } from 'react';
import { Image ,View,Text} from 'react-native';

class Blink extends Component{
constructor(props){
 super(props);
 this.state ={ isShowingText :true };

 setInterval(() => (this.setState(previosState11 =>({isShowingText : !previosState11.isShowingText})) ),1000);
}

render(){
if (!this.state.isShowingText ) { return null; }

return(
  <View>  
    <Text>{this.props.text} </Text>
  </View>
);
}


}
export default class App extends Component {
 render(){
    
    return (
      <View>
      <Blink text=' I love to blink 0' />
      <Blink text=' I love to blink  1' />
      <Blink text=' I love to blink   2' />
      <Blink text=' I love to blink    3' />
     </View>
    );
  }
}

