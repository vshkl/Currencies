import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  containerItem: {
    flex: 0,
    justifyContent: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
    borderColor: '#b71c1c',
    borderWidth: 1,
    height: 60,
    borderRadius: 5,
  },
  containerButton: {
    flex: 1,
    justifyContent: 'flex-end',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  input: {
    fontSize: 24,
    textAlign: 'center'
  },
});

EStyleSheet.build();
