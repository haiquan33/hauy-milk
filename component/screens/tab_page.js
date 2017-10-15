import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TabNavigator,StackNavigator,DrawerNavigator,NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';


import ItemList from './tab_ItemList.js';
import PromoList from './tab_promoList.js';
import MenuButton from '../menu_button.js';
import CheckoutButton from './Checkout_button.js';




const TabBar=TabNavigator({

  Tab1:{
      screen: ItemList,
      title:'List',
      label:'List'
  },
  Tab2:{
      screen: PromoList
  }
},
{

    tabBarPosition:'top',
    tabBarOptions:{
        style:{
            backgroundColor:'#FFCC59'
        }
    },
    navigationOptions:  ({ navigation }) => ({
        headerLeft : <MenuButton/>,
        headerRight: <CheckoutButton navigation={navigation}/>,
         headerTintColor:'white',
         headerStyle: {
              backgroundColor: '#FFCC59',
              justifyContent:'center'
          },
      }),
}

)

export default TabBar;
