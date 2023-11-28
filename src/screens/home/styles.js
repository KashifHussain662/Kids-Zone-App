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
    paddingHorizontal: 17,
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
  game_container: {
    backgroundColor: 'rgba(5, 5, 5, 0.78)',
    margin: 20,
    padding: 5,
    borderRadius: 12,
  },
});
