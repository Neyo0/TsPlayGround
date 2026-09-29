import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [bgColor, setBgColor] = useState('#fff');

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
    setFeedback('');
    setUserInput('');
    setBgColor('#fff');
  };

  useEffect(() => {
    generateRandomNumber();
  }, []);

  const compareGuess = () => {
    const guess = parseInt(userInput);

    if (isNaN(guess)) {
      setFeedback('Please enter a valid number');
      setBgColor('#ffcccc'); // light red
      return;
    }

    if (guess < randomNumber) {
      setFeedback('Try again! The number is higher.');
      setBgColor('#ffe066'); // yellow
    } else if (guess > randomNumber) {
      setFeedback('Try again! The number is lower.');
      setBgColor('#add8e6'); // light blue
    } else {
      setFeedback('Congratulations! You\'ve guessed the number.');
      setBgColor('#90ee90'); // light green
    }
  };

  const clearInput = () => {
    generateRandomNumber();
  };

  const exitApp = () => {
    Alert.alert('Exit', 'Thanks for playing!', [{ text: 'OK' }]);
    // There's no real "exit" in Expo apps; you'd handle this differently in production.
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Guess the Number (1–100)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter your guess"
        value={userInput}
        onChangeText={setUserInput}
      />
      <Button title="Guess" onPress={compareGuess} />
      <View style={styles.spacer} />
      <Button title="Clear" onPress={clearInput} color="#666" />
      <View style={styles.spacer} />
      <Button title="Exit" onPress={exitApp} color="#aa0000" />
      <View style={styles.feedbackContainer}>
        <Text style={styles.feedback}>{feedback}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#444',
    padding: 10,
    marginBottom: 20,
    fontSize: 18,
    borderRadius: 5,
  },
  feedbackContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  feedback: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  spacer: {
    height: 10,
  },
});

export default App;

