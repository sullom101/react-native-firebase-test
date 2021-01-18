import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';

function Back({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={{height: 17, width: 17}}
        source={require('../../assest/ic_back.png')}
      />
    </TouchableOpacity>
  );
}

export default Back;
