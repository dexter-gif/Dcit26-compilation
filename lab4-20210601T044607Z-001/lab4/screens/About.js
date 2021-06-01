import React from 'react';
import {
  View, Button, StyleSheet, Text, ImageBackground, ScrollView
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

const About = ({navigation}) => {
  return (
    <ImageBackground 
    style= {{
      flex: 1,
    }} 
    source = {{uri: 'https://www.bellanaija.com/wp-content/uploads/2020/01/C0099C5B-A030-4EA8-94D0-97000AD22027.png'}}>
    <ScrollView>
    <View style = { styles.container}>
      <Text style = {{fontSize:20, marginRight:100, fontStyle:'bold'}}>             CHOOSE YOUR BET {'\n'}
      </Text>
      <Text style={styles.text}>
Tinder is an American geosocial networking and {'\n'} online dating application that allows users to anonymously swipe to like or  dislike other profiles based on their photos, a small bio, and common interests. Once two users have "matched", they {'\n'} can exchange messages.{'\n\n'}
      
        Tinder was introduced on a college campus in 2012 and is the world’s most popular app for meeting new people. It’s been downloaded more than 340 million times and is available in 190 countries and 40+ languages. {'\n\n'}

Tinder is a place built on a world of possibility. The possibility of forming connections that could lead to more. If you’re here to meet new people, expand your social network, meet locals when you’re traveling, or just live in the now, you’ve come to the right place.{'\n\n'} 

Tinder is simple and fun—use the Swipe Right™ feature to Like someone, and if someone likes you back, it's a Match! Just tap through the people you’re interested in meeting to spark something new.
      
    </Text>
        
  </View>
  </ScrollView>
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
</ImageBackground>
  );
}

export default About;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 20
    },
    text: {
      alignItems: 'center',
      marginLeft: 20,
      fontSize: 15,
     

    }
});