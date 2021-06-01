import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationDrawerStructure from './Toggle';
import Setting from '../screens/Setting';



const Stack = createStackNavigator();

function SettingStack ({navigation}) {
  return (
    
      <Stack.Navigator>
          <Stack.Screen name="Setting" component={Setting} options={{ 
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

export default SettingStack;

