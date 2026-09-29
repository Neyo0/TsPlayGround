import { useState } from 'react'; 
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Alert } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined; 
  Game: { player1: string; player2: string };
};
const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeScreen({ navigation }: { navigation: any }) {
  const [player1, setPlayer1] = useState<string>('');
  const [player2, setPlayer2] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>X & O Game</Text> 
      <TextInput 
        style={styles.input}
        placeholder="Player 1 (X)"
        value={player1}
        onChangeText={setPlayer1}   
      />
      <TextInput 
        style={styles.input}
        placeholder="Player 2 (O)"
        value={player2}
        onChangeText={setPlayer2}   
      />
      <Button 
        title="Start Game" 
        onPress={() => {
          if (!player1 || !player2) {
            Alert.alert("Please enter both player names!");
            return;
          }
          navigation.navigate('Game', { player1, player2 });
        }}
      />
    </View>
  );
}

function GameScreen({ route, navigation }: { route: any; navigation: any }) {
  const { player1, player2 } = route.params;
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [winner, setWinner] = useState<string | null>(null);

  const handlePress = (index: number) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    const win = checkWinner(newBoard);
    if (win) {
      setWinner(win === 'X' ? player1 : player2);
      return;
    }
    if (newBoard.every(cell => cell !== null)) {
      setWinner('Draw');
      return;
    }

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const checkWinner = (board: (string | null)[]) => {
    const winPatterns = [
      [0,1,2], [3,4,5], [6,7,8], 
      [0,3,6], [1,4,7], [2,5,8], 
      [0,4,8], [2,4,6],          
    ];
    for (let [a,b,c] of winPatterns) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{player1} (X) vs {player2} (O)</Text>

      {winner ? (
        <Text style={styles.winnerText}>
          {winner === 'Draw' ? "It's a Draw!" : `${winner} Wins!`}
        </Text>
      ) : (
        <Text style={styles.turnText}>
          Turn: {currentPlayer === 'X' ? player1 : player2} ({currentPlayer})
        </Text>
      )}

      <View style={styles.board}>
        {board.map((cell, i) => (
          <TouchableOpacity 
            key={i} 
            style={styles.cell} 
            onPress={() => handlePress(i)}
          >
            <Text style={styles.cellText}>{cell}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Button title="Restart" onPress={resetGame} />
      <Button title="Back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="Game" component={GameScreen} />           
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 20,
  },
  input: {
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 10, 
    marginBottom: 10, 
    width: '80%', 
    borderRadius: 5,
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    height: 300,
    marginVertical: 20,
  },
  cell: {
    width: '33.33%',
    height: '33.33%',
    borderWidth: 1,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  turnText: {
    fontSize: 18,
    marginBottom: 10,
  },
  winnerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#08FC08',
    marginBottom: 10,
  },
});

export default App;

