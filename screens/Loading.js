import React, {Component} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';

class Loading extends Component {
  render() {
    const {navigate} = this.props.navigation;
    setTimeout(() => {
      navigate('login');
    }, 3000);
    return (
      <View style={styles.container}>
        <ActivityIndicator size={35} color="#FF3027" />
        <Text style={styles.bekleyin}>You have successfully registered !</Text>
        <Text style={styles.planla}>Log in and start translating !</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  bekleyin: {
    textAlign: 'center',
    color: 'grey',
    marginTop: 12,
    fontSize: 17,
  },
  planla: {
    textAlign: 'center',
    color: '#FF3027',
    marginTop: 11,
    fontSize: 15,
  },
});

export default withNavigation(Loading);
