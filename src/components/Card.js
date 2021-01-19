import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {checkURL, viewportHeight, viewportWidth} from '../utils/helpers';
import SavedIcon from './SavedButton';

const Card = ({id, onPress, launchName, windowStart, imageUrl, imageSizes}) => {
  const ImageComponent = () => {
    const check = checkURL(imageUrl);
    console.log('tjos is check', check);
    if (
      imageUrl !==
        'https://launchlibrary1.nyc3.digitaloceanspaces.com/RocketImages/placeholder_1920.png' &&
      check === true
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
    <View style={styles.main}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <ImageComponent />
      </TouchableOpacity>
      <View style={styles.textWrap}>
        <Text style={styles.launchName}>{launchName}</Text>
        <Text style={styles.windowStartText}>{windowStart ? date : 'TBD'}</Text>
      </View>
      <SavedIcon id={id} />
    </View>
  );
};

Card.propTypes = {
  onPress: PropTypes.func,
  launchName: PropTypes.string,
  windowStart: PropTypes.string,
  imageSizes: PropTypes.array,
  imageUrl: PropTypes.string,
  id: PropTypes.number,
};
Card.defaultProps = {
  onPress: () => {},
  launchName: '',
  id: 0,
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
    height: 320,
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
