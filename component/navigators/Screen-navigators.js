import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import Home from '../screens/home.js';
import Login from '../screens/login.js';


export const ScreenStack = StackNavigator({
  Login: {
    screen: Login
  },
  Home: {
    screen: Home
  }
});
