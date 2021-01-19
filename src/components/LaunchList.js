import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {FlatList, StyleSheet} from 'react-native';
import Card from '../components/Card';
import {useDispatch, useSelector} from 'react-redux';
import {fetchLaunch} from '../redux/actions/launchAction';

const LaunchList = ({navigation}) => {
  // const [page, setpage] = useState(1);
  const dispatch = useDispatch();
  const launch = useSelector((state) => state.launch);
  const requestMore = async () => {
    console.log('Requesting more');
    // fetchLaunch(`/2020-07-18/2021-04-18?offset=${launch.offset + 1}`);
    dispatch({
      type: 'FETCH_REQUEST',
      payload: `/2020-07-18/2021-04-18?offset=${launch.offset + 1}`,
    });
  };

  return (
    <FlatList
      style={styles.flatlistWrapper}
      data={launch.launches}
      windowSize={10}
      initialNumToRender={10}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({item, index}) => {
        return (
          <Card
            data={item}
            onPress={() => navigation.navigate('Information', {data: item})}
            launchName={item.name}
            windowStart={item.windowstart}
            imageUrl={item.rocket.imageURL}
            imageSizes={item.rocket.imageSizes}
            id={item.id}
          />
        );
      }}
      // onEndReached={() => requestMore()}
      onEndReachedThreshold={10}
    />
  );
};

LaunchList.propTypes = {
  launch: PropTypes.arrayOf(PropTypes.object),
  navigation: PropTypes.object,
};

export default LaunchList;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  MainView: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingTop: 10,
  },
  flatlistWrapper: {
    flex: 1,
  },
});
