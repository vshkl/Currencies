import React, { Component } from 'react';
import { Picker } from 'react-native';
import { inject, observer } from 'mobx-react/native';

import styles from './styles';

@inject('currencyStore') @observer
class CurrencyPicker extends Component {

  render() {
    const { currencyStore } = this.props;
    const { picker, pickerItem } = styles;

    return (
      <Picker
        style={picker}
        selectedValue={currencyStore.currencySelected}
        onValueChange={(value, index) => currencyStore.setSelected(index)}
      >
        {currencyStore.currencies.map((item, index) =>
          <Picker.Item
            style={pickerItem}
            label={item}
            value={index}
            key={index}
          />
        )}
      </Picker>
    );
  }

}

export default CurrencyPicker;
