import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';

import {StackNavigator} from 'react-navigation';

export default class CheckoutButton extends React.Component {

 
  render(){

    return (
        <TouchableOpacity style={{width:50, height:50,marginTop:25}}
                        onPress={()=>{
                                this.props.navigation.navigate('Checkout_cart_check');
                        }}
                             >

          <Image source={require('../../assets/images/checkout_ico.png')}
                      style={{width:30,height:30}}/>
        </TouchableOpacity>
    )
  }
}
