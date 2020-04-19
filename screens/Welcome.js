import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import ExitButton from '../components/ExitButton';
import {withNavigation} from 'react-navigation';
import Translator from '../translate/translator';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Translator />
        <ExitButton goBack={() => navigate('login')} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default withNavigation(Welcome);
