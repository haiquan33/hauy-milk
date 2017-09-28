import React from 'react';
import { StyleSheet} from 'react-native';
import { Font } from 'expo';

export const Component_style = StyleSheet.create({
  Primary: {
    backgroundColor: '#FFCC59',
  },
  Login_Button:{
      backgroundColor: '#CCFF66',
      padding: 5,
      borderRadius: 10,
      opacity: 0.8,
      alignItems: 'center',
      width: 100,
      marginTop: 30

  }
});

export const Text_style=StyleSheet.create({
    PrimaryText:{
        fontFamily: 'iciel-altus',
          fontSize: 20,
          textAlign: "center",
          color: 'white'
    },
    Login_Text:{
        fontFamily: 'iciel-altus',
          fontSize: 25,
          textAlign: "center",
          color: 'white',
          marginTop: 30

    },
    ContentText:{
        fontFamily: 'iCielNovecentosans-Light',
          fontSize: 10,
          textAlign: "center",

    }
});
