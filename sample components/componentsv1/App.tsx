import{useState} from 'react';
import { Button , StyleSheet, Text,TextInput , View } from 'react-native';

export default function App() {
  const [userInput, setUserInput] = useState('');

  const handlePress = () => {
    console.log('User Input:', userInput);
  };


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <TextInput
      placeholder="Enter something"
      value={userInput}
      onChangeText={setUserInput}
      />
      <Button 
      title='CLICK HERE'
      onPress={handlePress}
      />
      <Text>{userInput}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
