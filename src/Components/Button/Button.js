import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './Button.styles';

const Button = ({label, theme = 'default', ...otherProps}) => {
  return (
    <TouchableOpacity style={styles[theme].container} {...otherProps}>
      <Text style={styles[theme].label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
