import React from 'react';
import { useState, useEffect } from 'react';
import { Text, ScrollView, StyleSheet, Image, View} from 'react-native';
import Home from '../screens/Home';
import { globalStyles } from '../style/globalstyle';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const Profile = ({ route }) => {
  const data = route.params;

  return (
    <ScrollView style={globalStyles.profilecontent}>

        <Image style={globalStyles.profileimage} 
            source={{ uri: data.picture.medium }}/>

        <Text style={globalStyles.textStyle}>
           {data.name.first} {data.name.last}
        </Text> 
        <View style={globalStyles.infor}>
        
        <Text style={globalStyles.label}>
         {'\n'}
        <FontAwesome name="user-circle" size={24} color="black" /> About
        </Text>
        <Text style={{marginLeft:25}}>
        <Text style={globalStyles.info}> Age: </Text> {data.dob.age} 
        </Text>
        <Text style={{marginLeft:25}}>
        <Text style={globalStyles.info}> Birthday: </Text> {data.dob.date} 
        </Text>
        <Text style={{marginLeft:25}}>
        <Text style={globalStyles.info}> Gender: </Text> {data.gender}
        </Text>
        <Text style={{marginLeft:25}}>
        <Text style={globalStyles.info}> Address: </Text>  
        {data.location.postcode}, {data.location.city}, {data.location.state}, {data.location.country}
        </Text>
        <Text style={globalStyles.label}>
         {'\n'}
        <MaterialCommunityIcons name="phone-message" size={24}   
        color="black" /> Contact </Text>
        <Text style={{marginLeft:25}}>
        <Text style={globalStyles.info}> Email: </Text>  
        {data.email}
        </Text>
        <Text style={{marginLeft:25}}>
        <Text style={globalStyles.info}> Phone: </Text>  
        {data.phone}
        </Text>
        <Text style={globalStyles.label}>
         {'\n'}
        <Feather name="more-horizontal" size={24} color="black" /> Other 
        </Text>
        <Text style={{marginLeft:25}}>
        <Text style={globalStyles.info}> Date Registered: </Text>  
        {data.registered.date}
        </Text>
        </View>
    </ScrollView>
  );
};

export default Profile;


