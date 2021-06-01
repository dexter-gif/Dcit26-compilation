import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationDrawerStructure from './Toggle';
import Profile from '../screens/Profile';



const Stack = createStackNavigator();



function ProfileStack ({navigation}) {
  return (
    
      <Stack.Navigator>
          <Stack.Screen name="Profile" component={Profile} options={{ 
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

export default ProfileStack;

