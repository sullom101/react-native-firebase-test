import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {viewportHeight, viewportWidth} from '../utils/helpers';
const Card = ({onPress, launchName, windowStart, imageUrl, imageSizes}) => {
  // console.log('this is data', data);
  // const rep = imageUrl.replace(`${/_(d+)./g}`, imageSizes[0]);
  // console.log(rep);

  const ImageComponent = () => {
    if (
      imageUrl !==
      'https://launchlibrary1.nyc3.digitaloceanspaces.com/RocketImages/placeholder_1920.png'
    ) {
      const regex = /\_(\d+)./g;
      const formattedImage = imageUrl.replace(
        regex,
        `_${Math.min(...imageSizes)}.`,
      );
      return <Image source={{uri: formattedImage}} style={styles.image} />;
    } else {
      return (
        <Image
          source={require('../../assest/in_placeholder.png')}
          style={styles.image}
        />
      );
    }
  };

  const date = new Date(windowStart).toString();

  return (
    <TouchableOpacity style={styles.main} onPress={onPress}>
      <View style={styles.container}>
        <ImageComponent />
      </View>
      <View style={styles.textWrap}>
        <Text style={styles.launchName}>{launchName}</Text>
        <Text style={styles.windowStartText}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

Card.propTypes = {
  onPress: PropTypes.func,
  launchName: PropTypes.string,
  windowStart: PropTypes.string,
  imageSizes: PropTypes.array,
  imageUrl: PropTypes.string,
};
Card.defaultProps = {
  onPress: () => {},
  launchName: '',
  windowStart: '',
  imageSizes: [320, 480, 640, 720, 768, 800, 960, 1024, 1080, 1280, 1440, 1920],
  imageUrl:
    'https://launchlibrary1.nyc3.digitaloceanspaces.com/RocketImages/placeholder_1920.png',
};

export default Card;

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    width: viewportWidth - 32,
    height: 300,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    // borderWidth: 1,
  },
  image: {
    display: 'flex',
    height: 200,
    width: '100%',
    borderRadius: 10,
  },
  textWrap: {
    display: 'flex',
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
