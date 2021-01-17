import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, SafeAreaView, FlatList} from 'react-native';
import Card from '../components/Card';
import Information from './Information';

function Home({navigation}) {
  const [data, setData] = useState({});

  const getData = async () => {
    try {
      let response = await fetch('https://launchlibrary.net/1.4/launch/next/5');
      let json = await response.json();
      console.log(json);
      setData(json);
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* <FlatList> */}
      <View style={style.container}>
        {/* <Card
                launchName
                onPress
                image
                launchName
                windowStart
              /> */}
        <Text>This is home</Text>
      </View>
      {/* </FlatList> */}
      );
    </>
  );
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
