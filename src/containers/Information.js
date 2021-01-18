import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {statusCheck} from '../utils/helpers';

function Information({route, navigation}) {
  const {data} = route.params;
  const {imageSizes, imageURL} = data.rocket;
  const [tab, useTab] = useState(0);

  const regex = /\_(\d+)./g;
  const formattedImage = imageURL.replace(
    regex,
    `_${Math.min(...imageSizes)}.`,
  );

  return (
    <>
      {imageURL ===
      'https://launchlibrary1.nyc3.digitaloceanspaces.com/RocketImages/placeholder_1920.png' ? (
        <Image
          source={require('../../assest/in_placeholder.png')}
          style={styles.image}
        />
      ) : (
        <Image source={{uri: formattedImage}} style={styles.image} />
      )}
      <View style={styles.tabWrap}>
        <TouchableOpacity
          style={tab === 0 ? styles.tabClicked : styles.tab}
          onPress={() => useTab(0)}>
          <Text style={tab === 0 ? styles.text : styles.textClicked}>
            Information
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tab === 1 ? styles.tabClicked : styles.tab}
          onPress={() => useTab(1)}>
          <Text style={tab === 1 ? styles.text : styles.textClicked}>
            Missions
          </Text>
        </TouchableOpacity>
      </View>
      {tab === 0 ? (
        <View style={styles.launchWrap}>
          <Text style={styles.lunchId}>LAUNCH ID</Text>
          <Text style={styles.launchDescription}>{data.id}</Text>
          <Text style={styles.lunchId}>STATUS</Text>
          <Text style={styles.launchDescription}>
            {statusCheck(data.status)}
          </Text>
        </View>
      ) : (
        <View style={styles.launchWrap}>
          <Text style={styles.lunchId}>MISSION NAME</Text>
          <Text style={styles.launchDescription}>
            {data?.missions[0]?.name}
          </Text>
          <Text style={styles.lunchId}>TYPE</Text>
          <Text style={styles.launchDescription}>
            {/* {data.lsp.name} */}
            {data?.missions[0]?.typeName}
          </Text>
          <Text style={styles.lunchId}>DESCRIPTION</Text>
          <Text style={styles.launchDescription}>
            {data?.missions[0]?.description}
          </Text>
        </View>
      )}
    </>
  );
}

export default Information;

const styles = StyleSheet.create({
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
