import React from 'react';
import {View, TextInput} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const CustomTextInput = ({onChangeText, ...props}) => (
  <View style={styles.container}>
    <TextInput onChangeText={onChangeText} {...props} />
  </View>
);

CustomTextInput.propTypes = {
  onChangeText: PropTypes.func,
};

CustomTextInput.defaultProps = {
  onChangeText: () => null,
};

export default CustomTextInput;
