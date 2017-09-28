import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';


export default class BackgroundImage extends React.Component {
    render() {
        return (
            <Image source={require('../../assets/images/background_image.jpg')}
                   style={styles.backgroundImage}>

                    {this.props.children}

            </Image>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        
        alignItems:'center'
    }
});
