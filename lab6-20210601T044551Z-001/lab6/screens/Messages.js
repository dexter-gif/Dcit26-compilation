import React from 'react';
import {
  View, Button, Image, ImageBackground, StyleSheet, Text
} from "react-native";

function Messages  ({navigation})  {
  return (
    <ImageBackground 
    style= {{
      flex: 1,
    }} 
    source = {{uri: 'https://i.redd.it/xi17386nulj01.jpg'}}>
    <View style = { styles.container}>
   
    </View>
    </ImageBackground>  
  );
}

export default Messages;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
     
     
});