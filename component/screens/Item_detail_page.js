import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';

import { connect } from 'react-redux';
import Toast, {DURATION} from 'react-native-easy-toast';
 class Item_detail_page extends React.Component{
  
    constructor(props) {
        super(props);
        this.state = {quantity:this.props.navigation.state.params.myItem.current_quantity,
                      is_none_sugar_choiced:this.props.navigation.state.params.myItem.is_none_sugar_choiced};
        

      }


    static navigationOptions={
        headerTintColor:'white',
         headerStyle: {
              backgroundColor: '#FFCC59',
              justifyContent:'center'
          },

      }

          //set this item current sugar state is none sugar
    set_to_none_sugar() {
        this.setState({...this.state,is_none_sugar_choiced:true})
        this.props.dispatch({
            type: 'TOOGLE_NONE_SUGAR',
            id: this.props.navigation.state.params.myItem.id,
        });
    }
    //set this item current sugar state is have sugar
    set_to_have_sugar() {
        this.setState({...this.state,is_none_sugar_choiced:false})
        this.props.dispatch({
            type: 'TOOGLE_SUGAR',
            id: this.props.navigation.state.params.myItem.id,
        });
    }


    add_quantity() {
        this.setState({...this.state,quantity:this.state.quantity+1})
        this.props.dispatch({
            type: 'ADD_QUANTITY',
            id: this.props.navigation.state.params.myItem.id
        })
    }
    dec_quantity() {
        if (this.state.quantity>0)
        this.setState({...this.state,quantity:this.state.quantity-1})
        this.props.dispatch({
            type: 'DEC_QUANTITY',
            id: this.props.navigation.state.params.myItem.id
        })
    }

    add_to_cart(){
        this.setState({...this.state,quantity:0})
        this.props.dispatch({
               type:'ADD_TO_CART',
               id:this.props.navigation.state.params.myItem.id
        })
   }
    render(){
       const myItem=this.props.navigation.state.params.myItem;
         //set button style for "Khong duong" and "co duong" button
         const none_sugar_button_style = this.state.is_none_sugar_choiced ? styles.button_selected : styles.button_none_selected;
         const have_sugar_button_style = this.state.is_none_sugar_choiced ? styles.button_none_selected : styles.button_selected;
        
        return(
        <Image source={require('../../assets/images/sample_item_detail_bg.jpg')}
            style={styles.backgroundImage}
        >
            
                <View style={styles.overlay} />
                
                <Text style={styles.item_name}>{myItem.name}</Text>
                
                <View style={styles.price_label}>
                        <Text style={styles.item_price}>{myItem.price}</Text>
                        <Text style={styles.item_price_sub}>VNĐ/Chai</Text>
                </View>
                
                <View style={{height:'25%', width: '70%' ,marginTop:10}}>
                        <Text style={styles.item_des}>{myItem.des}</Text>
                        <View style={{width:'60%',borderBottomColor:'white',borderBottomWidth:1,alignSelf:'center'}}/>
                </View>

               
                <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignContent:'space-between',marginTop:20 }}>
                    <TouchableOpacity style={none_sugar_button_style}
                        onPress={this.set_to_none_sugar.bind(this)}
                    >
                        <Text style={{ color: 'white', fontSize: 10, fontFamily: 'iCielNovecentosans-Medium', padding: 5 }}>Không đường</Text>
                    </TouchableOpacity>
                   
                    <TouchableOpacity style={have_sugar_button_style}
                        onPress={this.set_to_have_sugar.bind(this)}
                    >
                        <Text style={{ color: 'white', fontSize: 10, fontFamily: 'iCielNovecentosans-Medium', padding: 5 }}>Có đường</Text>
                    </TouchableOpacity>
                </View>


                <View style={{ flexDirection: 'row', justifyContent:'center', alignItems: 'center', marginTop: 20 }}>
                        <TouchableOpacity style={styles.button_arrow}
                                        onPress={this.dec_quantity.bind(this)} >
                            <Image source={require('../../assets/images/big_arrow_down.png')}
                                        style={styles.arrow} />
                        </TouchableOpacity>
                 
                        <Text style={{ fontFamily: 'iCielNovecentosans-Light', fontSize: 60,lineHeight:50, textAlign: 'center',color:'white',marginHorizontal:20 }}>{this.state.quantity}</Text>
                    
                        <TouchableOpacity style={styles.button_arrow}
                                            onPress={this.add_quantity.bind(this)}>
                                    <Image source={require('../../assets/images/big_arrow_up.png')}
                                            style={styles.arrow} />
                        </TouchableOpacity >
                </View>
                <TouchableOpacity style={styles.button_add_to_cart}
                onPress={()=>{
                        this.refs.toast.show('Đã thêm vào giỏ hàng');
                        this.add_to_cart();
                    }}>
                     <Image source={require('../../assets/images/add_to_cart_no_bg.png')}
                        style={{width:30,height:30}}
                        />
                    <Text style={{fontFamily:'iciel-altus',fontSize:25,color:'white',marginLeft:5}}>THÊM VÀO GIỎ</Text>
                </TouchableOpacity>
                <Toast ref="toast"
                    style={{backgroundColor:'#FFCC59'}}
                    textStyle={{color:'white'}}
                    position='bottom'
                    positionValue={150}
                    opacity={0.8}/>
        </Image>
        )
    }
}


export default connect()(Item_detail_page);


const styles = StyleSheet.create({
    backgroundImage: {

        
        flex: 1,
       
        resizeMode: 'cover',
        alignItems: 'center',
      
     

    },

    item_name: {
        fontFamily: 'iciel-altus',
        fontSize: 40,
        color: 'white',
        marginTop: 10

    },
    price_label:{
        height: 90, 
        width: 90, 
        backgroundColor: '#67D6A9',
        borderRadius: 100 / 2, 
        alignItems: 'center', 
        flexDirection:'column',
        justifyContent:'center',
        alignSelf:'flex-start',
        marginVertical: 20,
        marginLeft:20
       
    },
    item_price: {
        fontFamily: 'iciel-altus',
        fontSize: 40,
        color: 'white',
        lineHeight:40
     
    },
    item_price_sub:{
        fontFamily: 'iciel-altus',
        fontSize: 18,
        color: 'white',
    
      
    },
    item_des:{
        fontFamily  :'UTM-Aptima',
        fontSize: 12,
        color:'white',
        textAlign:'center',
       marginVertical:10

    },
    button_selected: {
        borderRadius: 40,
        backgroundColor: '#FFCC59',
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.3,
        marginHorizontal:20


    },
    button_none_selected: {
        borderRadius: 40,
        flex: 0.3,
        borderColor: '#CCFF66',
        borderWidth: 1,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:20
    },
    button_arrow: {
        width: 35,
        height: 35,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
    },
    arrow:{
         width: 35 , height: 35, resizeMode: 'cover'
    },
    button_add_to_cart:{
        width:"45%",
        height:40,
        backgroundColor:'#FFCC59',
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'

    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'black',
        opacity: 0.2
    }
})