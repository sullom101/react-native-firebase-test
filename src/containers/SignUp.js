import React, {useState} from 'react';
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
import {firebase} from '../../config/firebase';

function Login({route, navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surName, setSurName] = useState('');
  const [loginDisable, setLoginDisable] = useState(false);

  const onRegisterPress = () => {
    if (!loginDisable) {
      setLoginDisable(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
          const uid = response.user.uid;
          const data = {
            id: uid,
            email,
            name,
            surName,
          };

          const usersRef = firebase.firestore().collection('users');
          usersRef
            .doc(uid)
            .set(data)
            .then(() => {
              navigation.navigate('Home', {user: data});
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
          placeholderTextColor="#4A4A4A"
          placeholder="Name"
          onChangeText={(text) => setName(text)}
          value={name}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={style.input}
          placeholderTextColor="#4A4A4A"
          placeholder="surname"
          onChangeText={(text) => setSurName(text)}
          value={surName}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={style.input}
          placeholderTextColor="#4A4A4A"
          placeholder="E-mail"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={style.input}
          placeholderTextColor="#4A4A4A"
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

        <Button title="SIGN UP" onPress={() => onRegisterPress()} disabled={loginDisable}/>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
  },
  logo: {
    width: '70%',
    height: 100,
    marginBottom: 25,
  },
  input: {
    width: '90%',
    height: 55,
    borderWidth: 1.5,
    borderColor: '#B2B2B2',
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
});

export default Login;
