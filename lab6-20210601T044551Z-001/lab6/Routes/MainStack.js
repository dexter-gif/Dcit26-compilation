import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome, MaterialIcons, Feather } from '@expo/vector-icons'; 
import {View, Image, TouchableOpacity} from 'react-native';

import LogStack from './LogStack';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import MessagesStack from './MessagesStack';
import SettingStack from './SettingStack';

const Drawer = createDrawerNavigator();


const MainNavigator = () => {
  
  return (
    
    <NavigationContainer>
     
      <Drawer.Navigator>
        <Drawer.Screen name = "Log-in" component = {LogStack} />
        <Drawer.Screen name = "Home" component = {HomeStack} 
        options={{drawerIcon: config =>        
          <FontAwesome name = "home" size= {24} color="black"> 
          </FontAwesome>   }}/> 
         
           
        <Drawer.Screen name = "Messages"  component={MessagesStack} 
        options={{drawerIcon: config =>        
             <FontAwesome name = "envelope-o" size= {24} color="black"> </FontAwesome>        
         }} />   

        <Drawer.Screen name = "About"  component={AboutStack} 
        options={{drawerIcon: config =>        
             <FontAwesome name = "book" size= {24} color="black"> </FontAwesome>        
         }} /> 

          <Drawer.Screen name = "Setting"  component={SettingStack} 
        options={{drawerIcon: config =>        
            <Feather name="settings" size={24} color="black"> </Feather>        
         }} />     

       
      </Drawer.Navigator>
    </NavigationContainer>  

  

  );
  
}

export default MainNavigator;
