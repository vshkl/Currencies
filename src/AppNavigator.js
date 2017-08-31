import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import RateScreen from './screens/RateScreen';

const AppNavigation = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Currency Converter',
    }
  },
  Rate: {
    screen: RateScreen
  }
});

export default AppNavigation;
