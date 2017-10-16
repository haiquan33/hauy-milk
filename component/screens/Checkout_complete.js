import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { Component_style, Text_style } from '../../Style.js';
import BackgroundImage from './background_image.js';
import { connect } from 'react-redux';


class Checkout_complete extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = { text: 'số phòng', Alert_Error: false, Room_inputed: false };
    }

    render() {

        return (

            <BackgroundImage>
                <Image source={require('../../assets/images/logo_text.png')}
                    style={{ width: 180, height: 180, marginTop: 50, resizeMode: Image.resizeMode.contain }} />
                <Text style={styles.Text}>SẢN PHẨM CỦA ANH/CHỊ ĐÃ ĐƯỢC ĐẶT THÀNH CÔNG{"\n"}VÀ SẼ ĐƯỢC GIAO TRONG VÒNG 10 PHÚT</Text>
                <Text style={{
                    fontFamily: 'iciel-altus',
                    fontSize: 30,
                    textAlign: "center",
                    color: 'white',
                    marginTop: 10
                }}>XIN CÁM ƠN</Text>



                <TouchableOpacity style={{
                    backgroundColor: '#CCFF66',
                    padding: 5,
                    borderRadius: 10,
                    opacity: 0.8,
                    alignItems: 'center',
                    width: 100,
                    marginTop: 15
                }}
                    onPress={() => {
                        this.props.navigation.navigate('Home');
                    }}>
                    <Text style={Text_style.PrimaryText}>QUAY VỀ</Text>
                </TouchableOpacity>

            </BackgroundImage>

        );
    }
}

export default connect()(Checkout_complete);

styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_alert: {
        fontFamily: 'iCielNovecentosans-Light',
        backgroundColor: 'white',
        fontSize: 10,
        opacity: 0.8,
        textAlign: 'center',
        color: 'red',
        marginTop: 10,
    },
    Text: {
        fontFamily: 'iciel-altus',
        fontSize: 22,
        textAlign: "center",
        color: 'white',
        marginTop: 10

    },

});
