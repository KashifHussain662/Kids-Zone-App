import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import styles from './styles';

const WordPuzzleGame = () => {
  const words = ['APPLE', 'BANANA', 'ORANGE', 'GRAPES'];
  const [currentWord, setCurrentWord] = useState('');
  const [jumbledLetters, setJumbledLetters] = useState('');
  const [userGuess, setUserGuess] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    generateNewWord();
  }, []);

  const generateNewWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const newWord = words[randomIndex];

    const jumbled = jumbleLetters(newWord);

    setCurrentWord(newWord);
    setJumbledLetters(jumbled);
    setUserGuess('');
  };

  const jumbleLetters = word => {
    const letters = word.split('');
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters.join('');
  };

  const handleGuess = () => {
    if (userGuess.toUpperCase() === currentWord) {
      Alert.alert('Result', 'Correct!', [
        {text: 'OK', onPress: generateNewWord},
      ]);
      setScore(score + 1);
    } else {
      Alert.alert('Result', 'Incorrect! Try again.', [{text: 'OK'}]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Word Puzzel Game</Text>
      <Text style={styles.scoreText}>Score: {score}</Text>

      <View style={styles.wordContainer}>
        <Text style={styles.wordText}>{jumbledLetters}</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Your Guess"
        onChangeText={text => setUserGuess(text)}
        value={userGuess}
        autoCapitalize="characters"
      />

      <TouchableOpacity style={styles.guessButton} onPress={handleGuess}>
        <Text style={styles.buttonText}>Guess</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WordPuzzleGame;
