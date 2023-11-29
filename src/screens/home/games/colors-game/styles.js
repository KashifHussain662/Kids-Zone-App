import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(5, 5, 5, 0.78)',
    margin: 20,
    padding: 5,
    borderRadius: 12,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  colorButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  targetText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
  },
  heading: {
    // color: 'white',
    fontSize: 25,
    fontWeight: '900',
    marginBottom: 20,
  },
  bottomText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
});
