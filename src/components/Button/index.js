import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Button = ({ onPress, children }) => {
  const { text, button } = styles;

  return (
    <TouchableOpacity style={button} onPress={onPress}>
      <Text style={text}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
