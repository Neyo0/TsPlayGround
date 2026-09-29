import React, { useState, useEffect } from 'react';
import { View,Text, TextInput,Button,StyleSheet,Alert,} from 'react-native';

const App: React.FC = () => {
  const [randomNumber, setRandomNumber] = useState<number>(0);
  const [userInput, setUserInput] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');

  const generateRandomNumber = (): void => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
    setFeedback('');
    setUserInput('');
  };

  useEffect(() => {
    generateRandomNumber();
  }, []);

  const compareGuess = (): void => {
    const guess: number = parseInt(userInput);

    if (isNaN(guess)) {
      setFeedback('Please enter a valid number');
      return;
    }

    if (guess < randomNumber) {
      setFeedback('Try again! The number is higher.');
    } else if (guess > randomNumber) {
      setFeedback('Try again! The number is lower.');
    } else {
      setFeedback('Congratulations! You guessed it!');
    }
  };

  const clearInput = (): void => {
    generateRandomNumber();
  };

  const exitApp = (): void => {
    Alert.alert('Exit', 'Thanks for playing!', [{ text: 'OK' }]);
  };

  return (
    <View style={styles.container}>
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
      <Button title="Clear" onPress={clearInput} />
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
