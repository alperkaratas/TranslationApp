import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class header extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    height: 60,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    margin: 15,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF3027',
  },
});

export default header;
