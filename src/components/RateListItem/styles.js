import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  containerCurrency: {
    backgroundColor: '#FAFAFA',
    flexDirection: 'column',
    flex: 1
  },
  textCurrency: {
    fontSize: 16,
    color: '#b71c1c',
    fontWeight: '600',
  },
  textCoefficient: {
    fontSize: 16,
    color: '#616161',
  },
  textValue: {
    fontSize: 20,
    textAlignVertical: 'center',
    color: '#212121',
    fontWeight: '600',
  },
});
