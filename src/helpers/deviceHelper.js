import {Dimensions} from 'react-native';

const _width = 375;

const perfectSize = (size) => {
  const rem = Dimensions.get('window').width / _width;
  return size * rem;
};

export default perfectSize;
