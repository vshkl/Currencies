import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { inject, observer } from 'mobx-react/native';

import styles from './styles';
import RateListItem from '../RateListItem';

@inject('rateStore') @observer
class RateList extends Component {

  render() {
    const { rateStore } = this.props;
    const { list } = styles;

    return (
      <FlatList
        style={list}
        data={rateStore.rates}
        keyExtractor={item => item[0]}
        renderItem={({ item }) =>
          <RateListItem
            currency={item[0]}
            coefficient={item[1]}
            value={item[2]}
          />
        }
      />
    );
  }

}

export default RateList;
