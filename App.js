import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import EStyleSheet from 'react-native-extended-stylesheet';

import AppNavigator from './src/AppNavigator';
import CurrencyStore from './src/stores/CurrencyStore';
import RateStore from './src/stores/RateStore';

class App extends Component {

  render() {
    return (
      <Provider currencyStore={CurrencyStore} rateStore={RateStore}
      >
        <AppNavigator />
      </Provider>
    );
  }

}

EStyleSheet.build();

export default App;
