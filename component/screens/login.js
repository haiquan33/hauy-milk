import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,TextInput } from 'react-native';
import {Component_style,Text_style} from '../../Style.js';
import BackgroundImage from './background_image.js';
import {connect} from 'react-redux';


 class Login extends React.Component {
  static navigationOptions = {
      header: null,
    };
    constructor(props) {
       super(props);
       this.state = { text: 'số phòng',Alert_Error:false,Room_inputed:false};
     }
    getRoom_and_Navi2Store(){
      if ((this.state.Room===undefined)||(this.state.Room.trim() ==="") || (this.state.Room.trim().length===0))
      {
        this.setState({Alert_Error:true})
      }
      else {
          this.props.dispatch({
              type: 'SET_ROOM',
              Room:this.state.Room
         });

        this.props.navigation.navigate('Home');
      }
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
            value={this.state.Room}
            onChangeText={text=>this.setState({Room: text,Room_inputed:true})}
            />

          {this.state.Alert_Error ? <Text style={styles.text_alert} >Xin nhập số phòng</Text>:null }

          <TouchableOpacity style={Component_style.Login_Button}
               onPress={this.getRoom_and_Navi2Store.bind(this)}>
                <Text style={Text_style.PrimaryText}>ĐẶT NGAY</Text>
          </TouchableOpacity>

        </BackgroundImage>

    );
  }
}

export default connect ()(Login);

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_alert:{
    fontFamily: 'iCielNovecentosans-Light',
    backgroundColor:'white',
      fontSize: 10,
      opacity: 0.8,
      textAlign: 'center',
      color: 'red',
      marginTop:10,
  }


});
