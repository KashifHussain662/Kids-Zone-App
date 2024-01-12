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
  button: {
    backgroundColor: 'yellow',
    paddingHorizontal: 70,
    paddingVertical: 15,
    margin: 10,
    justifyContent: 'center',
    borderRadius: 10,
    width: '70%',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  button_txt: {
    color: 'red',
    margin: 0,
    fontSize: 15,
    fontWeight: '900',
  },
});
