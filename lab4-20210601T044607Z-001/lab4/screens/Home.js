import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import {
  View, Button,ImageBackground, StyleSheet, Text, ScrollView, Image
} from "react-native";

const Home = ({navigation}) => {
  return (
    <ImageBackground style= {{flex: 1}} 
    source = {{uri: 'https://www.bellanaija.com/wp-content/uploads/2020/01/C0099C5B-A030-4EA8-94D0-97000AD22027.png'}}>
    
  <ScrollView>
      <View style={styles.container}>
      <Image style={styles.image} source={{uri: 'https://pbs.twimg.com/media/Eg0O3ChUcAAxdLA.jpg'}}/>  
      <Image style={styles.image} source={{uri:'https://pbs.twimg.com/media/Ebmfc63UwAEI97b.jpg'}}/> 
      <Image style={styles.image} source={{uri:'https://businessofcelebrity.files.wordpress.com/2014/02/bianka-jagger-by-andy-warhol1.jpg?w=645'}}/> 
      <Image style={styles.image} source={{uri:'https://businessofcelebrity.files.wordpress.com/2014/02/celebrity-portraits-taken-by-andy-warhol-with-his-polaroid-camera-arnold-schwarzenegger-19772.jpg'}}/>
       <Image style={styles.image} source={{uri:'https://i.pinimg.com/originals/bd/49/92/bd4992a41c3fda303713b44514dcb695.jpg'}}/>
       <Image style={styles.image} source={{uri:'https://live.staticflickr.com/2461/3649474466_f5794744f6_z.jpg'}}/>

      
      
    <View style = { styles.container}> 
        <AntDesign.Button 
          name = "profile"
          size = {30}
          color = "black"
          backgroundColor="pink"
           onPress={() => navigation.navigate('Profile')} >
          Profile
          </AntDesign.Button>
        </View>
         </View>
  </ScrollView>
</ImageBackground>
  );
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',     
    },
    image:{
      height:300, 
      width: 300,
      marginTop: 20
    }

});
    