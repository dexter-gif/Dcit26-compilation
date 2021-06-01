import React from 'react';
import 
{View,
StyleSheet,
Text,
Image,
ScrollView,
} from 'react-native';

export default function App(){
  return (
    <View style={styles.container}>
    <Image style= {styles.picture} source={{uri: 'https://i.pinimg.com/originals/ee/9b/4e/ee9b4e69354f389396d088fee0eb4989.gif'}}/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    paddingTop: 25
  }

});