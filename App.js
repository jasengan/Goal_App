import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <TextInput 
              placeholder='Course Goal' 
              style={styles.input}
        />
        <Button title='ADD' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 70
  },

  container:{
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  input: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    padding: 10, 
    width: 200
  }
});
