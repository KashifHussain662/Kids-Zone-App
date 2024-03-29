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
    padding: 16,
  },
  heading: {
    color: 'white',
    fontSize: 25,
    fontWeight: '900',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  Input: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    margin: 20,
    borderWidth: 1,
    borderRadius: 15,
    padding: 6,
  },
  Input_View: {
    fontSize: 15,
    fontWeight: '900',
    color: 'black',
  },
  state_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  stateheading: {
    fontSize: 15,
    backgroundColor: 'white',
    paddingHorizontal: 37,
    paddingVertical: 10,
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 7,
    fontSize: 17,
    backgroundColor: 'green',
  },
});
