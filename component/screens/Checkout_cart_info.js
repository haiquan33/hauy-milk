import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import BackgroundImage from './background_image.js';


class Checkout_cart_info extends React.Component {
    static navigationOptions = {
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#FFCC59',
            justifyContent: 'center'
        },
     

    }

    constructor(props) {
        super(props);
        this.state = { totalPrice: 0 };

    }

    render() {

        return (
            <BackgroundImage>
                <View style={styles.container} >
                    <Text style={styles.text}>Số phòng</Text>
                    <TextInput placeholder={this.props.Room}
                        placeholderTextColor='#FFCC59'
                        style={{ width: 100, color: '#FFCC59', height: 38, textAlign: 'left', fontFamily: 'UTM-Aptima', fontSize: 18, alignSelf: 'flex-start', opacity: 0.8 }}
                        underlineColorAndroid='#59FFBB'
                        keyboardType='numeric'
                        maxLength={10}
                        value={this.state.Room}
                        onChangeText={text => this.setState({ Room: text, Room_inputed: true })} />
                </View>
                <View style={styles.container} >
                    <Text style={styles.text}>Số điện thoại</Text>
                    <TextInput placeholder={'Số điện thoại'}
                        placeholderTextColor='#FFCC59'
                        style={{ width: 140, color: '#FFCC59', height: 38, textAlign: 'left', fontFamily: 'UTM-Aptima', fontSize: 18, alignSelf: 'flex-start', opacity: 0.8 }}
                        underlineColorAndroid='#59FFBB'
                        keyboardType='numeric'
                        maxLength={15}
                        value={this.state.PhoneNo}
                        onChangeText={text => this.setState({ PhoneNo: text })} />
                </View>
                <View style={{
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-start',
                    marginLeft: 10,
                    width: '100%',
                    flex: 1
                }} >
                    <Text style={styles.text}>Ghi chú</Text>
                    <TextInput placeholder={'sữa lạnh hay không lạnh,giao sau bao nhiêu phút,....'}
                        placeholderTextColor='#FFCC59'
                        style={{ textAlignVertical: 'top', width: '95%', color: '#FFCC59', fontFamily: 'UTM-Aptima', fontSize: 18, alignSelf: 'flex-start', opacity: 0.8,padding:4,backgroundColor:'white' }}

                        multiline={true}
                        numberOfLines={14}
                        maxLength={160}
                        value={this.state.Note}
                        onChangeText={text => this.setState({ Note: text })} />
                </View>
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
                        this.props.navigation.navigate('Checkout_cart_info');
                    }}>
                        <Text style={{ margin: 10, fontFamily: 'iCielNovecentosans-Medium', color: 'white', fontSize: 15 }}>Đặt ngay</Text>
                       
                    </TouchableOpacity>

                </View>
            </BackgroundImage>

        )
    }
}


function MapState2Prop(state) {
    return { Room: state.Room };
  }
  export default connect(MapState2Prop)(Checkout_cart_info);
  


const styles = StyleSheet.create({
    container: {

        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        marginLeft: 10
    },
    text: {

        alignSelf: 'flex-start',
        width: '100%',
        fontSize: 22,
        color: '#FFCC59',
        fontFamily: 'UTM-Aptima',
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
        right: 10
    },
    footer: {

        flexDirection: 'row',
        width: '100%',
        height: 60,
        backgroundColor: '#FFCC59'
    },
});