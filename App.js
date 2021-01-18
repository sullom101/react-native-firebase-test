import React, {Component} from 'react';
import NavigationStack from './src/navigation/navigation';
import {persistor, store} from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={<View />} persistor={persistor}>
            <NavigationStack />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    );
  }
}
