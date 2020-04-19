import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import NavigationService from './navigation/NavigationService';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Loading from './screens/Loading';
import Welcome from './screens/Welcome';

export const AppNavigator = createStackNavigator(
  {
    login: {screen: Login},
    signup: {screen: SignUp},
    loading: {screen: Loading},
    welcome: {screen: Welcome},
  },
  {
    headerMode: 'none',
  },
);

export default class App extends Component {
  render() {
    return (
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

const AppContainer = createAppContainer(AppNavigator);
