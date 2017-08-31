import { action, observable } from 'mobx';
import axios from 'axios';
import _ from 'lodash';

const ENDPOINT = 'http://api.fixer.io/latest?base=';

class RateStore {
  @observable rateCurrency = 'USD';
  @observable rateAmount = 0;
  @observable rates = [];
  @observable isLoaded = false;

  @action fetchRates() {
    this.currencies = [];
    axios.get(ENDPOINT + this.rateCurrency)
      .then(response => {
        const coefficients = Object.values(response.data.rates)
          .map((num) => num.toFixed(2));
        this.rates = _.zip(
          Object.keys(response.data.rates),
          coefficients,
          Array.from(coefficients, coefficient => this.rateAmount * coefficient)
            .map((num) => num.toFixed(2))
        );
        this.isLoaded = true;
      });
  }

  @action setCurrency(currency) {
    this.rateCurrency = currency;
  }

  @action setAmount(amount) {
    this.rateAmount = amount;
  }

}

export default new RateStore();
