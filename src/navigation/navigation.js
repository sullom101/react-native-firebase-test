import React from 'react'
import Home from '../containers/Home';
import Information from '../containers/Information';
import Login from '../containers/Login';
import SignUp from '../containers/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Back from '../components/Back';


const Stack = createStackNavigator();
const Theme = {
    dark: false,
    colors: {
      background: '#FFFFFF',
    },
  };

function NavigationStack () {
    return (
        <NavigationContainer theme={Theme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerLeftContainerStyle: {left: 25},
              headerTitle: '',
              headerLeft: () => <Back />,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerStyle: {
                height: 80,
              },
              headerLeftContainerStyle: {left: 25},
              headerTitle: 'Launch List',
              headerTitleAlign: 'center',
              headerLeft: () => <Back />,
            }}
          />
          <Stack.Screen
            name="Information"
            component={Information}
            options={{
              headerStyle: {
                height: 80,
              },
              headerLeftContainerStyle: {left: 25},
              headerTitle: 'Launch List',
              headerTitleAlign: 'center',
              headerLeft: () => <Back />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
    
}

export default NavigationStack
