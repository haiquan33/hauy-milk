import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {StackNavigator} from 'react-navigation';


import Login from '../screens/login.js';

import Menu from '../screens/Menu.js';

import TabBar from '../screens/tab_page.js';
import MenuButton from '../menu_button.js';
ScreenStack = StackNavigator(
  {

    Login: {
            screen: Login
          },
    Home: {
            screen: TabBar

          }
  },





);

export default ScreenStack;
