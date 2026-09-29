import { useState } from 'react';
import { StyleSheet, Text,TouchableHighlight, View } from 'react-native';

export default function App() {

  // thats a state variable this wiil maintain while using the varible similiar to intCount
  const [count, setCount] = useState(0);
 
  const incrementCount =() => setCount(count + 1);
  const decrementCount =() => setCount(count - 1);
  return (
    
    // view serves as container . you are allowed to have view in view 
    <View style={styles.container}>
     <Text style={styles.title}>SIMPLE COUNTER APPLICATION</Text> 
     <Text style={styles.counterText}>{count}</Text>

     
     <TouchableHighlight style={styles.button}
     onPress={incrementCount }> 
     <Text style={styles.buttonText}>INCREMENT COUNTER</Text>
     </TouchableHighlight>
    
     <TouchableHighlight style={styles.button}
     onPress={decrementCount}
     > 
     <Text style={styles.buttonText}>DECREMENT COUNTER</Text>
     </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  // container is a class
  container: {
    // flex :1 is a coloumb is will progress when you increase the number
    flex: 1,
    //hexadecimal is for color
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
fontSize: 24,
fontWeight: "bold",
marginBottom: 30,
  },

  counterText:{
    fontSize: 48,
    marginBottom: 40,
  },

  button:{
    backgroundColor: "#4CAF50",
    // for space witing the button
    padding: 15,
    //i want everything vertical alignment 10 spces in
    marginVertical: 10,
    borderRadius: 8,
    width: 200,
    alignItems:"center",
  },

  buttonText:{
    fontSize: 18,
    color: "white",
  },
});
