import React from 'react';
import Home from '../containers/Home';
import Information from '../containers/Information';
import Login from '../containers/Login';
import SignUp from '../containers/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Back from '../components/Back';
import {navigationRef} from '../lib/NavigationService';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useSelector} from 'react-redux';
import Loading from '../components/Loading';

const GuestStack = createStackNavigator();
const AuthStack = createStackNavigator();
const Theme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
  },
};

function NavigationStack() {
  const [isLoading, setIsLoading] = React.useState(true);

  const user = useSelector((state) => state.user);
  console.log('this is user', user.isAuth);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(!isLoading);
    }, 500);
    return clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer theme={Theme} ref={navigationRef}>
      {user.isAuth ? <AppStack /> : <GuestScreen />}
    </NavigationContainer>
  );
}

const AppStack = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Home"
        component={Home}
        options={({route, navigation}) => ({
          // title: route.params.name,
          headerStyle: {
            height: 80,
          },
          headerLeftContainerStyle: {left: 25},
          headerTitle: 'Home List',
          headerTitleAlign: 'center',
          headerBackImage: () => (
            <Image
              style={{height: 17, width: 17}}
              source={require('../../assest/ic_back.png')}
            />
          ),
        })}
      />
      <AuthStack.Screen
        name="Information"
        component={Information}
        options={({route, navigation}) => ({
          // title: route.params.name,
          headerStyle: {
            height: 80,
          },
          headerLeftContainerStyle: {left: 25},
          headerTitle: 'Launch List',
          headerTitleAlign: 'center',
          headerBackImage: () => (
            <Image
              style={{height: 17, width: 17}}
              source={require('../../assest/ic_back.png')}
            />
          ),
        })}
      />
    </AuthStack.Navigator>
  );
};

const GuestScreen = () => {
  return (
    <GuestStack.Navigator>
      <GuestStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <GuestStack.Screen
        name="SignUp"
        component={SignUp}
        options={({route, navigation}) => ({
          headerLeftContainerStyle: {left: 25},
          headerTitle: '',
          headerBackImage: () => (
            <Image
              style={{height: 17, width: 17}}
              source={require('../../assest/ic_back.png')}
            />
          ),
        })}
      />
    </GuestStack.Navigator>
  );
};

export default NavigationStack;
