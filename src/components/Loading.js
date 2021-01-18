import React from 'react';
import {View, StyleSheet} from 'react-native';
import {viewportWidth, viewportHeight} from '../utils/helpers';

const Loading = () => <View style={styles.loadingContainer} />;

export default Loading;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignSelf: 'center',
    width: viewportWidth,
    height: viewportHeight,
    backgroundColor: '#000',
    // opacity: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: 'white',
    // borderWidth: 1,
  },
  lottieIcon: {
    width: 100,
    height: 100,
  },
});
