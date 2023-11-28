import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  B_img: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 25,
    fontWeight: '900',
    margin: 20,
  },
  form: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '80%',
  },
  TextInput: {
    color: 'black',
    fontSize: 15,
    padding: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.48)',
    margin: 12,
  },
  button: {
    backgroundColor: 'yellow',
    paddingVertical: 10,
    margin: 10,
    justifyContent: 'center',
    borderRadius: 10,
    width: '50%',
    alignItems: 'center',
  },
  button_txt: {
    color: 'red',
    margin: 0,
    fontSize: 15,
    fontWeight: '900',
  },
  txt1: {
    textDecorationLine: 'underline',
    fontSize: 15,
    marginTop: 20,
  },
});
