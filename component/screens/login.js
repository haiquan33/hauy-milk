import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,TextInput } from 'react-native';
import {Component_style,Text_style} from '../../Style.js';
import BackgroundImage from './background_image.js';

export default class Login extends React.Component {
  static navigationOptions = {
      header: null,
    };
    constructor(props) {
       super(props);
       this.state = { text: 'số phòng' };
     }

  render() {
    return (

       <BackgroundImage>
          <Image  source={require('../../assets/images/logo_text.png')}
                  style={{width:180, height:180, marginTop: 50, resizeMode:Image.resizeMode.contain }}/>
          <Text style={Text_style.Login_Text}>SỐ PHÒNG CỦA ANH/CHỊ LÀ</Text>
          <TextInput
            placeholder='Số phòng'
            placeholderTextColor='white'
            style={{width:100,color:'white',marginTop:10,height:30,textAlign:'center',fontFamily:'iCielNovecentosans-Light' }}
            underlineColorAndroid='white'
            keyboardType='numeric'

            />
          <TouchableOpacity style={Component_style.Login_Button}
               onPress={()=>{this.props.navigation.navigate('Home')}}>
                <Text style={Text_style.PrimaryText}>ĐẶT NGAY</Text>
          </TouchableOpacity>

        </BackgroundImage>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
