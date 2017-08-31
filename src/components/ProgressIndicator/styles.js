import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  text: {
    fontSize: 18,
  },
});

EStyleSheet.build();
