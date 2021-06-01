import React from 'react';
import {
  View, Button, Image, ImageBackground, StyleSheet, Text
} from "react-native";
import { AntDesign } from '@expo/vector-icons';

function Setting  ({navigation})  {
  return (
    <ImageBackground style= {{flex: 1}} 
    source = {{uri: 'https://assets.materialup.com/uploads/1d79f0b3-d65c-4a4a-a688-5dc5e75e2bd1/attachment.png'}}>
    
         
    <View style = { styles.container}>
   
    <AntDesign.Button
          name = "logout"
          size = {30}
          color = "black"
          backgroundColor="#E1DCDB"
          onPress={() => navigation.navigate('Log-in')} >
          Log-out
          </AntDesign.Button>
    </View>
    

  
  



    </ImageBackground>  
  );
}

export default Setting;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 445 
      
    },
     
     
});