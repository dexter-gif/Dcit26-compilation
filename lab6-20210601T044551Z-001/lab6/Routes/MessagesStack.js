import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationDrawerStructure from './Toggle';
import Messages from '../screens/Messages';



const Stack = createStackNavigator();



function MessagesStack ({navigation}) {
  return (
    
      <Stack.Navigator>
          <Stack.Screen name="Messages" component={Messages} options={{ 
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

export default MessagesStack;

