import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';

function Information({}) {
  const [tab, useTab] = useState(0);
  console.log(tab);
  return (
    <>
      <Image
        style={style.image}
        source={require('../../assest/in_placeholder.png')}></Image>
      <View style={style.tabWrap}>
        <TouchableOpacity
          style={tab === 0 ? style.tabClicked : style.tab}
          onPress={() => useTab(0)}>
          <Text style={tab === 0 ? style.text : style.textClicked}>
            Information
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tab === 1 ? style.tabClicked : style.tab}
          onPress={() => useTab(1)}>
          <Text style={tab === 1 ? style.text : style.textClicked}>
            Missions
          </Text>
        </TouchableOpacity>
      </View>
      {tab ===0 ? (
      <View style={style.launchWrap}>
        <Text style={style.lunchId}>LAUNCH ID</Text>
        <Text style={style.launchDescription}>launchID</Text>
        <Text style={style.lunchId}>STATUS</Text>
        <Text style={style.launchDescription}>statusDescription</Text>
      </View>
      ) : <Text> hello </Text>}
    </>
  );
}

const style = StyleSheet.create({
  image: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '32%',
    width: '100%',
  },
  tabWrap: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  tab: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: '50%',
    backgroundColor: '#BC2625',
  },
  tabClicked: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: '50%',
    backgroundColor: '#BC2625',
    borderBottomWidth: 5,
    borderBottomColor: 'black',
  },
  text: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  textClicked: {
    fontSize: 18,
    color: '#FFFFFF70',
  },
  launchWrap: {
    margin: 15,
    padding: 15,
  },
  lunchId: {
    fontSize: 21,
    color: '#BD0A00',
  },
  launchDescription: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#4A4A4A',
    marginBottom: 15,
  },
});

export default Information;
