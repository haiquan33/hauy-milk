import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TabNavigator,StackNavigator,DrawerNavigator,NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';


import ItemList from './tab_ItemList.js';
import MenuButton from '../menu_button.js';





const TabBar=TabNavigator({

  Tab1:{
      screen: ItemList,
      title:'List',
      label:'List'
  },
  Tab2:{
      screen: ItemList
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
         headerTintColor:'white',
         headerStyle: {
              backgroundColor: '#FFCC59',
              justifyContent:'center'
          },
      }),
}

)

export default TabBar;
