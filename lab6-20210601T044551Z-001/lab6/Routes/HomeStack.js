import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationDrawerStructure from './Toggle';
import Home from '../screens/Home';
import Profile from '../screens/Profile';



const Stack = createStackNavigator();



function HomeStack ({navigation}) {
  return (
    
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ 
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation}/>

          ),
          headerStyle: { backgroundColor: 'black'},
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          }         
          }}/>

          <Stack.Screen name="Profile" component={Profile} options={{          
          headerStyle: { backgroundColor: 'black'},
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          }         
          }}/>
         
         
      </Stack.Navigator>
    
  );
}

export default HomeStack;

