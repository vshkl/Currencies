import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { inject, observer } from 'mobx-react/native';

import styles from './styles';
import Container from '../../components/Container';
import RateList from '../../components/RateList';
import ProgressIndicator from '../../components/ProgressIndicator';

@inject('rateStore') @observer
class RateScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Convert ${navigation.state.params.amount} ${navigation.state.params.currency}`
  });

  componentWillMount() {
    const { params } = this.props.navigation.state;

    this.props.rateStore.setAmount(params.amount);
    this.props.rateStore.setCurrency(params.currency);
    this.props.rateStore.fetchRates();
  }

  render() {
    const { rateStore } = this.props;

    return (
      <Container style={styles.container} >
        <StatusBar transparent backgroundColor={'transparent'} barStyle='dark-content' />
        {rateStore.isLoaded ? (
          <RateList />
        ) : (
          <ProgressIndicator message='Loading & calculating rates' />
        )}
      </Container>
    );
  }
}

export default RateScreen;
