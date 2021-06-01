import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Log from '../screens/Log'


const Stack = createStackNavigator();



const LogStack = () => {
  return (
    
      <Stack.Navigator>
          <Stack.Screen name="Log-in" component={Log}/>
          
          
         
      </Stack.Navigator>
    
  );
}

export default LogStack;
