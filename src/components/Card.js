import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const image = '../../assest/in_placeholder.png';
function Card({onPress, image, launchName, windowStart}) {
  return (
    <TouchableOpacity style={style.main} onPress={onPress}>
      <View style={style.container} />
      <View style={style.textWrap}>
        <Text style={style.launchName}>{launchName}</Text>
        <Text style={style.windowStartText}>{windowStart} formating (GMT)</Text>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  main: {
    display: 'flex',
    flex: 0.3,
    flexDirection: 'column',
    width: '85%',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  image: {
    display: 'flex',
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  launchName: {
    marginTop: 5,
    fontSize: 20,
    color: '#BD0A00',
  },
  windowStartText: {
    marginTop: 2.5,
    fontSize: 16,
    color: '#4A4A4A',
  },
});

export default Card;
