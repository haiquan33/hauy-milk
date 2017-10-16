import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {StackNavigator} from 'react-navigation';


import Login from '../screens/login.js';

import Menu from '../screens/Menu.js';


import TabBar from '../screens/tab_page.js';
import MenuButton from '../menu_button.js';
import Item_detail_page from '../screens/Item_detail_page.js';
import Checkout_cart_check from '../screens/Checkout_cart_check.js';
import Checkout_cart_info from '../screens/Checkout_cart_info.js';
import Checkout_complete from '../screens/Checkout_complete.js';

ScreenStack = StackNavigator(
  {

    Login: {
            screen: Login
          },
    Home: {
            screen: TabBar

          },
    Item_detail_page:{
        screen: Item_detail_page
    },
    Checkout_cart_check:{
            screen: Checkout_cart_check
    },
    Checkout_cart_info:{
      screen: Checkout_cart_info,
      
    },
    Checkout_complete:{
        screen: Checkout_complete,
    }
  },





);

export default ScreenStack;
