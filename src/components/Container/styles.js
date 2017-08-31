import { NativeModules, Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const { StatusBarManager } = NativeModules;

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
    paddingTop: (Platform.OS === 'ios') ? 20 : StatusBarManager.HEIGHT,
  },
});
