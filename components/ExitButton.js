import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';

const ExitButton = ({goBack}) => (
  <TouchableOpacity onPress={goBack} style={styles.container}>
    <Image style={styles.image} source={require('../assets/exit.png')} />
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 515,
    left: 310,
  },
  image: {
    width: 33,
    height: 33,
  },
});

export default withNavigation(ExitButton);
