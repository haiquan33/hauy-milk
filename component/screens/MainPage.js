import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';


import ScreenStack from '../navigators/Screen-navigators.js';

export default class MainPage extends React.Component {


  render() {

      return (


            <ScreenStack/>


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
