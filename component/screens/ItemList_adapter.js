import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo';
import React from 'react';
import { connect } from 'react-redux';


class ItemList_Adapter extends React.Component {

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
            type: 'ADD_QUANTITY',
            id: this.props.myItem.id
        })
    }
    dec_quantity() {
        this.props.dispatch({
            type: 'DEC_QUANTITY',
            id: this.props.myItem.id
        })
    }
    goto_detail_page() {
        console.log("CLICKED");
    }
    render() {
        const { name, price, des, is_none_sugar_choiced, none_sugar_quantity, have_sugar_quantity } = this.props.myItem;

        //set button style for "Khong duong" and "co duong" button
        const none_sugar_button_style = is_none_sugar_choiced ? styles.button_selected : styles.button_none_selected;
        const have_sugar_button_style = is_none_sugar_choiced ? styles.button_none_selected : styles.button_selected;

        //set quantity number
        const quantity = is_none_sugar_choiced ? none_sugar_quantity : have_sugar_quantity;
        return (


            <Image source={require('../../assets/images/soy_milk.jpg')}
                style={styles.backgroundImage}

            >
                <View style={styles.overlay} />
                <TouchableOpacity
                    onPress={this.goto_detail_page.bind(this)}>
                    <Text style={styles.item_name}
                    >{name}</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={none_sugar_button_style}
                        onPress={this.set_to_none_sugar.bind(this)}
                    >
                        <Text style={{ color: 'white', fontSize: 10, fontFamily: 'iCielNovecentosans-Medium', padding: 5 }}>Không đường</Text>
                    </TouchableOpacity>
                    <Text style={styles.item_price}>{price} vnđ/chai</Text>
                    <TouchableOpacity style={have_sugar_button_style}
                        onPress={this.set_to_have_sugar.bind(this)}
                    >
                        <Text style={{ color: 'white', fontSize: 10, fontFamily: 'iCielNovecentosans-Medium', padding: 5 }}>Có đường</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                    <TouchableOpacity style={styles.button_arrow}
                        onPress={this.dec_quantity.bind(this)} >
                        <Image source={require('../../assets/images/arrow_down.png')}
                            style={{ width: 25, height: 25, resizeMode: 'cover', opacity: 0.8 }} />
                    </TouchableOpacity>
                    <View style={{ height: 25, width: 25, backgroundColor: 'white', borderRadius: 30 / 2, alignItems: 'center', marginHorizontal: 10 }}>
                        <Text style={{ fontFamily: 'iCielNovecentosans-Medium', fontSize: 18, textAlign: 'center' }}>{quantity}</Text>
                    </View>
                    <TouchableOpacity style={styles.button_arrow}
                        onPress={this.add_quantity.bind(this)}>
                        <Image source={require('../../assets/images/arrow_up.png')}
                            style={{ width: 25, height: 25, resizeMode: 'cover', opacity: 0.8 }} />
                    </TouchableOpacity>
                </View>


            </Image>
        );
    }
}


export default connect()(ItemList_Adapter);

const styles = StyleSheet.create({
    backgroundImage: {

        height: 100,
        flex: 1,
        margin: 5,
        resizeMode: 'cover',
        alignItems: 'center'

    },
    item_name: {
        fontFamily: 'iciel-altus',
        fontSize: 25,
        color: 'white',
        marginTop: 5

    },
    item_price: {
        fontFamily: 'iCielNovecentosans-Light',
        fontSize: 15,
        color: 'white',
        marginRight: 10,
        marginLeft: 10,


    },
    button_selected: {
        borderRadius: 40,
        backgroundColor: '#CCFF66',
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
        width: 25,
        height: 25
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