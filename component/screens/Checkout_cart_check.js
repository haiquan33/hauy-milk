import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image,FlatList } from 'react-native';
import Bill_Item_Adapter from './Bill_Item_adapter.js';
import {connect} from 'react-redux';

 class Checkout_cart_check extends React.Component {
    static navigationOptions={
        headerTintColor:'white',
         headerStyle: {
              backgroundColor: '#FFCC59',
              justifyContent:'center'
          },

      }
  get_bill_items()
  {
    const {ItemList}=this.props;
    var BillList=[];
    for (let item of ItemList){
        if (item.none_sugar_quantity>0){
          let temp={
                  id:item.id,
                  name:item.name+'(Không đường)',
                  price:item.price,
                  quantity:item.none_sugar_quantity,
                  is_none_sugar:false
          }
          BillList.push(temp);
        }
        // if (item.have_sugar_quantity>0){
        //   let temp={
        //     id:item.id,
        //     name:item.name+'(Có đường)',
        //     price:item.price,
        //     quantity:item.have_sugar_quantity,
        //     is_none_sugar:true 
        //   }
        //   BillList=BillList.concat([{temp}]);
        // }
    }
 
    return BillList;
  }    
 
  render(){
    var bill_items=this.get_bill_items();
    return (
        <View style={StyleSheet.container}>
                
            <FlatList
                 data={bill_items}
                 renderItem={({ item }) => <Bill_Item_Adapter myItem={item} />}
                 keyExtractor={item => item.id}
          
              />
         </View>   
    )
  }
}


function MapState2Prop(state) {
    return { ItemList: state.ItemList };
  }
  export default connect(MapState2Prop)(Checkout_cart_check);
  
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });