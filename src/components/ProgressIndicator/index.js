import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import styles from './styles';

const ProgressIndicator = ({ message }) => {
  const { container, indicator, text } = styles;

  return (
    <View style={container} >
      <ActivityIndicator
        style={indicator}
        animating
        color='#d50000'
        size='large'
      />
      <Text style={text} >
        {message}
      </Text>
    </View>
  );
};

export default ProgressIndicator;
