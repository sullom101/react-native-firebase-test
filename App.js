import React, {Component} from 'react';
import { Provider } from 'react-redux';
import NavigationStack from './src/navigation/navigation'



export default class App extends Component {
  render() {
    return (
        <NavigationStack/>
    );
  }
}
