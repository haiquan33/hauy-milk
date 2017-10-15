import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,PropTypes, Image } from 'react-native';


export default class MenuButton extends React.Component {

  static contextTypes = {
     drawer: React.PropTypes.object.isRequired,
   };
  render(){

    return (
        <TouchableOpacity style={{width:50, height:50, margin:20,marginTop:35}}
                          onPress={ () => {this.context.drawer.open()} }  >

          <Image source={require('../assets/images/menu_ico.png')}
                      style={{width:30,height:30}}/>
        </TouchableOpacity>
    )
  }
}
