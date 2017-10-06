import React from 'react';
import { StyleSheet, Text, View,PropTypes } from 'react-native';
import {Provider} from 'react-redux';

import {ScreenStack} from './component/navigators/Screen-navigators.js';
import MainPage from './component/screens/MainPage.js';
import Menu from './component/screens/Menu.js';


import { Font } from 'expo';
import store from './component/redux/store.js';


import Drawer from 'react-native-drawer';



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
        'iCielNovecentosans-Medium':require('./assets/fonts/iCielNovecentosans-Medium.otf')
       });;

       this.setState({ fontLoaded: true });
     }



  render() {
    if (!this.state.fontLoaded) {
        return <View/>;
      }

      return (
        <Provider store={store}>

                <Drawer
                      ref={(drawer) => this.drawer = drawer}
                      content={<Menu />}
                      tapToClose={true}
                      openDrawerOffset={0.4}
                      type='overlay'
                      style={drawerStyles}
                      tweenDuration={200}
                      tweenEasing='linear'>

                    <MainPage/>
                </Drawer>
          </Provider>
      );
  }
}

const drawerStyles = {


 main:{Color: 'red', Opacitsy: 1, shadowRadius: 15}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
