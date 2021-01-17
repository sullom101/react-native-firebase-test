import React, {Component} from 'react';

import Home from './src/containers/Home';
import Information from './src/containers/Information';
import Login from './src/containers/Login';
import SignUp from './src/containers/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Back from './src/components/Back';

const Theme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
  },
};

const Stack = createStackNavigator();
export default class App extends Component {
  render() {
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
    );
  }
}
