import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const RateListItem = ({ currency, coefficient, value }) => {
  const { container, containerCurrency, textCurrency, textCoefficient, textValue } = styles;

  return (
    <View style={container}>

      <View style={containerCurrency}>
        <Text style={textCurrency}>
          {currency}
        </Text>
        <Text style={textCoefficient}>
          {coefficient}
        </Text>
      </View>

      <Text style={textValue}>
        {value}
      </Text>

    </View>
  );
};

export default RateListItem;
