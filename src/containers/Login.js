import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import Button from '../components/Button';

import auth from '@react-native-firebase/auth';
import firebase from '../../config/firebase';

function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginDisable, setLoginDisable] = useState(false);
  const [data, setData] = useState('');

  // const onLoginPress = () => {
  //   navigation.navigate('Home');
  // };
  const onLoginPress = () => {
    if (!loginDisable) {
      setLoginDisable(true);

      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          const uid = response.user.uid;
          const usersRef = firebase.firestore().collection('users');
          usersRef
            .doc(uid)
            .get()
            .then((firestoreDocument) => {
              if (!firestoreDocument.exists) {
                alert('User does not exist anymore.');
                return;
              }
              const user = firestoreDocument.data();
              setLoginDisable(false);
              navigation.navigate('Home', {user});
            })
            .catch((error) => {
              setLoginDisable(false);
              alert(error);
            });
        })
        .catch((error) => {
          setLoginDisable(false);
          alert(error);
        });
    }
  };

  return (
    <SafeAreaView
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={style.container}>
        <Image
          style={style.logo}
          source={require('../../assest/logo_hitit.png')}
        />
        <TextInput
          style={style.input}
          placeholderTextColor="gray"
          placeholder="E-mail"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={style.input}
          placeholderTextColor="gray"
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <Button title="LOG IN" onPress={onLoginPress} />
        <View style={style.signWrap}>
          <TouchableOpacity style={{width: '30%'}} onPress={}>
            <Image
              style={{height: 40, width: 100}}
              source={require('../../assest/sign_up.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '75%',
    width: '85%',
  },
  logo: {
    width: '70%',
    height: 100,
    marginBottom: 25,
  },
  input: {
    width: '90%',
    height: 60,
    borderWidth: 1.5,
    borderColor: '#B2B2B2',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },

  signWrap: {
    width: '100%',
    height: 50,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 15,
    padding: 5,
  },
});

export default Login;
