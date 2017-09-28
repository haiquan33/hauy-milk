import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {ScreenStack} from './component/navigators/Screen-navigators.js';
import { Font } from 'expo';

export default class App extends React.Component {
  state = {
       fontLoaded: false,
     }

     componentDidMount() {
       this.loadAssetsAsync();
     }

     async loadAssetsAsync() {
       await Expo.Font.loadAsync({
        'iciel-altus': require('./assets/fonts/iCiel-Altus.otf'),
        'iCielNovecentosans-Light': require('./assets/fonts/iCielNovecentosans-Light.otf'),
       });;

       this.setState({ fontLoaded: true });
     }


  render() {
    if (!this.state.fontLoaded) {
        return <View/>;  // render some progress indicator
      }

      return (

        <ScreenStack/>    //render your child components tree
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
