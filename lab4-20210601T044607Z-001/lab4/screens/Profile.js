import React from 'react';
import {
  View, Button, Image, ImageBackground, StyleSheet, Text
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

function Profile  ({navigation})  {
  return (
    <ImageBackground style= {{flex: 1,}} 
    source = {{uri: 'https://www.bellanaija.com/wp-content/uploads/2020/01/C0099C5B-A030-4EA8-94D0-97000AD22027.png'}}>
    
    <View style = { styles.container}>
    <Image style= {styles.picture} source={{uri: 'https://www.mockofun.com/wp-content/uploads/2019/12/circle-photo.jpg'}}/>
    
  <Text style = {styles.text}>
  <Text style={{fontStyle:'italic'}}> Name: </Text> Elizabelth R. Romeo{'\n\n'}
  <Text style={{fontStyle:'italic'}}> Age: </Text> 20 Years old{'\n\n'}
  <Text style={{fontStyle:'italic'}}> Status: </Text> Single{'\n\n'}
  <Text style={{fontStyle:'italic'}}> Location: </Text> Canada{'\n\n'}
  </Text>
  
      <View style={{marginBottom:80, alignItems:'center'}}>
        <Ionicons.Button
          name = "arrow-back-circle"
          size = {30}
          color = "black"
          backgroundColor="pink"          
          onPress={() => navigation.goBack()}>
          Back
          </Ionicons.Button>
      </View>   
    </View>
    </ImageBackground>

    
  );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      
    },
    picture:{
      height:300, 
      width: 300,
      marginLeft: 25,
      marginTop: 15
},
    text:{
      fontStyle: 'bold',
      fontSize: 20, 
      color:'black', 
      marginTop: 30
},


     
});