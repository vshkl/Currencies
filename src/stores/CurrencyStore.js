import { action, observable } from 'mobx';
import axios from 'axios';

const ENDPOINT = 'http://api.fixer.io/latest';

class CurrencyStore {
  @observable currencies = [];
  @observable currencySelected = 0;
  @observable currencyAmount;
  @observable isLoaded = false;

  @action fetchCurrencies() {
    this.currencies = [];
    axios.get(ENDPOINT)
      .then(response => {
        this.currencies = Object.keys(response.data.rates);
        this.isLoaded = true;
      });
  }

  @action setSelected(selectedIndex) {
    this.currencySelected = selectedIndex;
  }

  @action setAmount(value) {
    this.currencyAmount = value;
  }

}

export default new CurrencyStore();
