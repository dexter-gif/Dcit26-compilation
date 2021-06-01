//Aquino, Maria Erica C.
//Bartolome, Justine Q.
//Diaz, Dexter
//BSCS 3-4


import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  ImageBackground
} from 'react-native';

export default function App() {
  const [enteredInput, setEnteredInput] = useState('');
  const [enteredInputs, setEnteredInputs] = useState([]);
  const [count, setCount] = useState(1);
  const enterInputHandler = (enteredText) => {
    setEnteredInput(enteredText);
  }

  const addEnterHandler = () => {
    setEnteredInput(count + 1 ); 
    setEnteredInputs(currentEnter => [...currentEnter, enteredInput]);
    setEnteredInput ('');
  }

  return (
    <ImageBackground 
    style= {{ flex: 1 }} 
    source = {{
      uri: 'https://images.ctfassets.net/l3l0sjr15nav/33Wxab3LsA4KkAqUoyGAe/170c180b4a959d6224ac25fe6fb5190b/giphy.gif'}}>
    
    <View style = {styles.screen}> 

      <View style = {styles.inputContainer}> 
        <TextInput placeholder="Enter user input" 
        style={styles.input} 
        onChangeText={enterInputHandler}
        value={enteredInput}
        />
        <Button title = "ADD" onPress = {addEnterHandler} />
      </View> 

      <View> 
        {enteredInputs.map((enterInput) => ( 
          <View  style={styles.list}>
            <Text>{enterInput}</Text>
          </View>        
        ))}

        
      </View> 

    </View> 
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 25,
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    backgroundColor: '#ADDFFF',
  
  },
  input: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    padding:6
  },
  list: {
    padding: 10,
    margin: 2,
    backgroundColor: 'pink',
    borderWidth: 1,
    width: '90%',

  }

});