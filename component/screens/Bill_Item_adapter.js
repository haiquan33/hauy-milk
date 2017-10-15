import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo';
import React from 'react';
import { connect } from 'react-redux';


class Bill_Item_Adapter extends React.Component {

    //set this item current sugar state is none sugar
    set_to_none_sugar() {
        this.props.dispatch({
            type: 'TOOGLE_NONE_SUGAR',
            id: this.props.myItem.id,
        });
    }
    //set this item current sugar state is have sugar
    set_to_have_sugar() {
        this.props.dispatch({
            type: 'TOOGLE_SUGAR',
            id: this.props.myItem.id,
        });
    }

    //add or decrease thi quantity of this item on this sugar state
    add_quantity() {
        this.props.dispatch({
            type: 'ADD_QUANTITY_ON_BILL',
            id: this.props.myItem.id,
            is_none_sugar:this.props.myItem.is_none_sugar
        })
    }
    dec_quantity() {
        this.props.dispatch({
            type: 'DEC_QUANTITY_ON_BILL',
            id: this.props.myItem.id,
            is_none_sugar:this.props.myItem.is_none_sugar
        })
    }
   remove_item() {
        this.props.dispatch({
            type: 'SET_QUANTITY_ON_BILL',
            id: this.props.myItem.id,
            is_none_sugar:this.props.myItem.is_none_sugar,
            quantity:0
        })
    }
  
    goto_detail_page() {

        this.props.navigation.navigate('Item_detail_page', { myItem: this.props.myItem });
    }
    render() {
        const { id, name, price, is_none_sugar, quantity } = this.props.myItem;


        return (

            <View style={styles.container}>
                <Image source={require('../../assets/images/soy_milk.jpg')}
                    style={styles.item_image} />

                <View style={{ flex: 1, flexDirection: 'column', alignSelf: 'flex-start', marginTop: 10, marginLeft: 5 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.item_name}>{name}</Text>
                        <TouchableOpacity  onPress={this.remove_item.bind(this)}>
                            <Image source={require('../../assets/images/close.png')}
                                style={{ width: 20, height: 20, resizeMode: 'cover' }} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.item_price}>Đơn giá:{price} VNĐ/chai</Text>

                    <View style={{ flexDirection: 'row',  alignItems: 'center', justifyContent:'center', marginTop: 8 ,alignSelf:'center'}}>
                        <TouchableOpacity style={styles.button_arrow}
                            onPress={this.dec_quantity.bind(this)} >
                            <Image source={require('../../assets/images/arrow_down.png')}
                                style={{ width: 30, height: 30, resizeMode: 'cover', opacity: 0.8 }} />
                        </TouchableOpacity>
                    
                            <Text style={{color:'#FFCC59', fontFamily: 'iCielNovecentosans-Medium', fontSize: 35, textAlign: 'center',marginHorizontal:15 }}>{quantity}</Text>
                        
                        <TouchableOpacity style={styles.button_arrow}
                            onPress={this.add_quantity.bind(this)}>
                            <Image source={require('../../assets/images/arrow_up.png')}
                                style={{ width: 30, height: 30, resizeMode: 'cover', opacity: 0.8 }} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{color:'#757070',alignSelf:'flex-end',fontSize:15,marginTop:5}}> {price*quantity} VNĐ </Text>
                </View>
            </View>


        );
    }
}


export default connect()(Bill_Item_Adapter);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '95%',
        height: 140,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,

        borderBottomColor: '#AAC7BB',
        borderBottomWidth: 2,


        alignSelf: 'center'
    },
    item_image: {
        width: 120,
        height: 120,
        resizeMode: 'cover',


    },
    item_name: {
        fontFamily: 'iciel-altus',
        fontSize: 20,
        color: '#757070',
        width: '90%'

    },
    item_price: {
        fontFamily: 'UTM-Aptima',
        fontSize: 12,
        color: '#757070',
        marginTop: 5,


    },
    button_selected: {
        borderRadius: 40,
        backgroundColor: '#FFCC59',
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.4


    },
    button_none_selected: {
        borderRadius: 40,
        flex: 0.4,
        borderColor: '#CCFF66',
        borderWidth: 1,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button_arrow: {
        width: 32,
        height: 32
    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'black',
        opacity: 0.3
    }
})