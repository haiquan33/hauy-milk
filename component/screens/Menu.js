import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';

export default class Menu extends React.Component{

    render() {
       return (
   
          
          <View style={{flex:1,backgroundColor:'#FFCC59',alignItems:'center'}}>
            <Image  source={require('../../assets/images/logo_text.png')}
                  style={{width:140, height:140, marginTop: 30, resizeMode:Image.resizeMode.contain }}/>
            <TouchableOpacity>
                      <Text style={styles.button}>Đặt sữa tháng</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                      <Text style={styles.button}>Thông tin/liên hệ</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                      <Text style={styles.button}>Đăng thoát</Text>
            </TouchableOpacity>
            </View>
       
       );
    }
}


const styles = StyleSheet.create({
  button: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontFamily:'iciel-altus',
    fontSize:25,
    color:'white'
  },

});
