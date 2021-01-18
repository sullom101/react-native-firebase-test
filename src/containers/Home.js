import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  LogBox,
} from 'react-native';
import Card from '../components/Card';
import Information from './Information';
import {fetchLaunche} from '../redux/actions/launchAction';
import {connect} from 'react-redux';



function Home({navigation}) {
  const [data, setData] = useState({});
  // const {fetchLaunche} = props;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await fetchLaunche();
  //   };
  //   fetchData();
  //   SplashScreen.hide();
  // }, [fetchLaunche]);

  // console.log('*********',props);

  return (
    <View style={style.container}>
      <Text>This is home</Text>
    </View>
  );
}

// const mapStateToProps = (state) => ({
//   launch: state.launch.launch,
// });

// const mapDispatchToProps = {
//   fetchLaunche,
// };

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default Home;
// export default connect(mapStateToProps, mapDispatchToProps)(Home);
 