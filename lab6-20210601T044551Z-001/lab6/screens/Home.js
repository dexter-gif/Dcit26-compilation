import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, TouchableOpacity, Button} from 'react-native';
import Profile from '../screens/Profile';
import { globalStyles } from '../style/globalstyle';

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function fetchRandomData() {
    setLoading(true);
    fetch('https://randomuser.me/api')
      .then((response) => response.json())
      .then((json) => {
        setData(json.results[0]);
        console.log(json.results[0]);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchRandomData();
  }, []);

  return (
    <View style={globalStyles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        
       <Text style={globalStyles.textStyle}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile', data)}>
            <Image style={globalStyles.imageSize} 
            source={{ uri: data.picture.large }}/>
          </TouchableOpacity>         
          {'\n'}
          {data.name.first} {data.name.last}
        </Text>
      )}
       <Button style={globalStyles.buttonStyle} title={'Random User'} onPress={fetchRandomData} />
    </View>
  );
};

export default Home;
