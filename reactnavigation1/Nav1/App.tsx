import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type RootStackParamList ={
 Home: undefined;
 Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

   function HomeScreen({navigation}:{navigation: any}){
    return(
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title='Go to Profile'
          onPress={() =>navigation.navigation('Profile')}
        />
      </View>
    );
  }

  function ProfileScreen(){
    return(
      <View style={styles.container}>
        <Text> Profile Screen</Text>
      </View>
    );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Profile' component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
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
