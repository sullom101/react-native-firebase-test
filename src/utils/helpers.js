import {Dimensions, Platform, StatusBar} from 'react-native';

export const viewportWidth = Dimensions.get('window').width;
export const viewportHeight = Dimensions.get('window').height;

// nteger (1 Green, 2 Red, 3 Success, 4 Failed)

export const statusCheck = (status) => {
  switch (status) {
    case 1:
      return 'Green';
    case 2:
      return 'Red';
    case 3:
      return 'Success';
    case 4:
      return 'Failed';
    default:
      return 'Not Provided';
  }
};

export const checkURL = (url) => {
  return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
};
