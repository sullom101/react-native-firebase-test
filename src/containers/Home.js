import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  LogBox,
} from 'react-native';
import LaunchList from '../components/LaunchList';

import Information from './Information';
import {fetchLaunch} from '../redux/actions/launchAction';
import {connect} from 'react-redux';

function Home({navigation, fetchLaunch, launch}) {
  const [data, setData] = useState({});

  React.useEffect(() => {
    const fetchData = async () => {
      await fetchLaunch('/2020-07-18/2021-04-18');
    };
    fetchData();
  }, [fetchLaunch]);
  // console.log('this is launch', launch.launches);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.MainView}>
        <LaunchList launch={launch.launches} navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => ({
  launch: state.launch,
});

const mapDispatchToProps = {
  fetchLaunch,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

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

// export default Home;
// export default connect(mapStateToProps, mapDispatchToProps)(Home);
