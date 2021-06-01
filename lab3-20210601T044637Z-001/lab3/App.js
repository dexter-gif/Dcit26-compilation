//Aquino, Maria Erica C.
//Bartolome, Justine Q.
//Diaz, John Dexter
//BSCS 3-4


import React, {useState} from 'react';
import 
{View,
StyleSheet,
Button, 
ImageBackground
} from 'react-native';

import SampleModal from './components/SampleModal';

export default function App(){
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <ImageBackground 
    style= {{ flex: 1 }} 
    source = {{
      uri: 'https://ucsccaps.files.wordpress.com/2019/05/77a94-1557720209709.png'}}>
    <View style={styles.container}>
      <Button title = "Click Me" onPress={() => setIsModalOpen(true)} />
      <SampleModal visible={isModalOpen} onClose={() => setIsModalOpen(false)}/>
    </View>
    </ImageBackground>
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