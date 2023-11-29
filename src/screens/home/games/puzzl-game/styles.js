import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  wordContainer: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 20,
  },
  wordText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: '80%',
    fontSize: 18,
    textAlign: 'center',
  },
  guessButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  heading: {
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 20,
  },
});
