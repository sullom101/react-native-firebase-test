import React from 'react'
import {
    StyleSheet,
    View,
    Text,
  } from 'react-native';

function Header({text}) {
    return (
        <View style={style.container}>
          <Text style={style.text}>{text}</Text>
        </View>
    )
}

const style= StyleSheet.create({

    container :{
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        height:'13%',
        width:'100%',
        backgroundColor:'red'
    },
    text:{
        fontSize:22,
        color:'black',
        fontWeight: 'bold',
        fontFamily: "Cochin"
    }

})




export default Header
