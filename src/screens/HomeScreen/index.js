import React, { Component } from 'react';
import { KeyboardAvoidingView, StatusBar, TextInput, View } from 'react-native';
import { inject, observer } from 'mobx-react/native';

import styles from './styles';
import Container from '../../components/Container';
import Button from '../../components/Button';
import CurrencyPicker from '../../components/CurrencyPicker';
import ProgressIndicator from '../../components/ProgressIndicator';

@inject('currencyStore') @observer
class HomeScreen extends Component {

  componentWillMount() {
    this.props.currencyStore.fetchCurrencies();
  }

  validateAmount(value) {
    return !(value === undefined) && !isNaN(parseFloat(value)) && isFinite(value);
  }

  render() {
    const { currencyStore } = this.props;
    const { container, containerItem, containerButton, input } = styles;

    return (
      <Container>
        <StatusBar transparent backgroundColor={'transparent'} barStyle='dark-content' />
        {currencyStore.isLoaded ? (
          <View style={container} >

            <View style={containerItem} >
              <CurrencyPicker />
            </View>

            <View style={containerItem} >
              <KeyboardAvoidingView>
                <TextInput
                  style={input}
                  keyboardType='numeric'
                  returnKeyType='done'
                  placeholder='Amount'
                  underlineColorAndroid={'#FAFAFA'}
                  onChangeText={(text) => currencyStore.setAmount(text)}
                />
              </KeyboardAvoidingView>
            </View>

            <View style={containerButton} >
              <Button
                onPress={() => {
                  if (this.validateAmount(currencyStore.currencyAmount)) {
                    this.props.navigation.navigate('Rate', {
                      currency: currencyStore.currencies[currencyStore.currencySelected],
                      amount: currencyStore.currencyAmount
                    })
                  }
                }}
              >
                CONVERT
              </Button>
            </View>
          </View>
        ) : (
          <ProgressIndicator message='Loading currencies' />
        )}
      </Container>
    );
  }
}

export default HomeScreen;
