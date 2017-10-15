import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import Bill_Item_Adapter from './Bill_Item_adapter.js';
import { connect } from 'react-redux';
//import {StackNavigator} from 'react-navigation';

class Checkout_cart_check extends React.Component {
  static navigationOptions = {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#FFCC59',
      justifyContent: 'center'
    },

  }

  constructor(props) {
    super(props);
    this.state = { totalPrice: 0, can_go_next_page: 'none',bill_items:'null' };

  }
  get_bill_items() {
    const { ItemList } = this.props;
    var BillList = [];
    var key = 1;
    this.state.totalPrice = 0;
    for (let item of ItemList) {
      if (item.none_sugar_quantity > 0) {
        let temp = {
          key: key,
          id: item.id,
          name: item.name + '(Không đường)',
          price: item.price,
          quantity: item.none_sugar_quantity,
          is_none_sugar: true
        }
        key++;
        this.state.totalPrice = this.state.totalPrice + temp.price * temp.quantity;
        BillList.push(temp);
      }
      if (item.have_sugar_quantity > 0) {
        let temp = {
          key: key,
          id: item.id,
          name: item.name + '(Có đường)',
          price: item.price,
          quantity: item.have_sugar_quantity,
          is_none_sugar: false
        }
        key++;
        this.state.totalPrice = this.state.totalPrice + temp.price * temp.quantity;
        BillList.push(temp);
      }
    }
    this.state.can_go_next_page = this.state.totalPrice > 0 ? 'flex' : 'none';
   
    return BillList;
  }
  set_bill_list() {
    this.props.dispatch({
        type: 'SET_BILL_LIST',
        BillList: this.state.bill_items,
        totalPrice:this.state.totalPrice
    })
  }
  render() {
    this.state.bill_items = this.get_bill_items();

    return (
      <View style={styles.container}>

        <FlatList style={{ flex: 1, width: '100%' }}
          data={this.state.bill_items}
          renderItem={({ item }) => <Bill_Item_Adapter myItem={item} />}


        />
        <View style={styles.footer} >
          <View style={{ flexDirection: 'column', marginLeft: 10, marginTop: 2 }}>
            <Text style={{ color: 'white', fontFamily: 'iCielNovecentosans-Medium', fontSize: 15 }}>Tổng cộng</Text>
            <Text style={{ color: '#017445', fontFamily: 'UTM-Aptima', fontSize: 25 }}>{this.state.totalPrice} VNĐ</Text>
          </View>

          <TouchableOpacity style={{
            height: 40,
            flexDirection: 'row',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#59FFBB',
            marginTop: 10,
            position: 'absolute',
            right: 10,
            display: this.state.can_go_next_page,
          }} onPress={() => {
            this.set_bill_list();
            this.props.navigation.navigate('Checkout_cart_info');
          }}>
            <Text style={{ margin: 10, marginRight: 0, fontFamily: 'iCielNovecentosans-Medium', color: 'white', fontSize: 15 }}>Thanh toán</Text>
            <Image source={require('../../assets/images/big_arrow_right.png')} style={{ width: 25, height: 25 }} />
          </TouchableOpacity>

        </View>
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {

    flexDirection: 'row',
    width: '100%',
    height: 60,
    backgroundColor: '#FFCC59'
  },
  next_button: {
    height: 40,
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#59FFBB',
    marginTop: 10,
    position: 'absolute',
    right: 10,
    
  }
});