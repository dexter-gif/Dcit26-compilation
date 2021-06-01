import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationDrawerStructure from './Toggle';
import About from '../screens/About';

const Stack = createStackNavigator();



function AboutStack ({navigation}) {
  return (
    
      <Stack.Navigator>
          <Stack.Screen name="About" component={About}options={{ 
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation}/>

          ),
          headerStyle: { backgroundColor: 'black'},
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
          
          }}/>         
      </Stack.Navigator>
     
  );
}

export default AboutStack;
