import React from 'react';
import {View, Button, StyleSheet, Text, ImageBackground,Image
} from "react-native";
import { AntDesign } from '@expo/vector-icons';


const Log = ({navigation}) => {
  return (
     <ImageBackground style={{flex:1}}
    source = {{uri: 'https://www.bellanaija.com/wp-content/uploads/2020/01/C0099C5B-A030-4EA8-94D0-97000AD22027.png'}}>
    <View style = { styles.container}>
          <Image style={styles.image} source={{uri: 'https://policies.tinder.com/static/b0327365f4c0a31c4337157c10e9fadf/bb543/tinder_full_color_watermark.png'}}/> 
          
         <View style={{marginTop:80}}>
         <AntDesign.Button
          name = "login"
          size = {30}
          color = "black"
          backgroundColor="pink"
          onPress={() => navigation.navigate('Home')} >
          Log-in
          </AntDesign.Button>
          </View>
    </View>
    </ImageBackground>
  );
}

export default Log;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
     image:{
      height:200, 
      width: 400,
      marginTop: 150,
      marginRight: 65
    }
    
});