import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity
  } from 'react-native';

function Button({title, onPress}) {
    return (
        <>
        <TouchableOpacity style={style.button} onPress={onPress}>
          <Text style={style.loginText}> {title}</Text>
        </TouchableOpacity>     
        </>
    )
}
const style = StyleSheet.create({
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        width: '90%',
        height: 73,
        borderRadius: 15,
        backgroundColor: '#BC2625',
        borderWidth: 0,
    },
    loginText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
      },
})

export default Button
