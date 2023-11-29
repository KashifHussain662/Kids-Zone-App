import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';
import styles from './styles';

const ColorGame = () => {
  const [colors, setColors] = useState([
    {name: 'Red', hex: '#FF0000'},
    {name: 'Green', hex: '#00FF00'},
    {name: 'Blue', hex: '#0000FF'},
    {name: 'Yellow', hex: '#FFFF00'},
  ]);

  const [targetColor, setTargetColor] = useState({});
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Set a random color as the target color
    generateTargetColor();
  }, []);

  const generateTargetColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setTargetColor(colors[randomIndex]);
  };

  const handleColorPress = selectedColor => {
    if (selectedColor === targetColor.name) {
      // If correct, increase score and generate a new target color
      setScore(score + 1);
      generateTargetColor();
    } else {
      // If incorrect, show an alert and reset the score
      Alert.alert(
        'Incorrect!',
        `The correct color was ${targetColor.name}. Your score is ${score}`,
        [{text: 'OK', onPress: () => setScore(0)}],
      );
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>Color's Game</Text>
        <Text style={styles.scoreText}>Score: {score}</Text>

        <View style={styles.colorContainer}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.colorButton, {backgroundColor: color.hex}]}
              onPress={() => handleColorPress(color.name)}
            />
          ))}
        </View>

        <Text style={styles.targetText}>
          Match the color: {targetColor.name}
        </Text>
      </View>
      <Text style={styles.bottomText}>More</Text>
    </SafeAreaView>
  );
};

export default ColorGame;
