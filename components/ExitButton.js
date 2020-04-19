import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';

const ExitButton = ({goBack}) => (
  <TouchableOpacity onPress={goBack} style={styles.container}>
    <Image style={styles.image} source={require('../assets/exitt.png')} />
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 495,
    left: 153,
  },
  image: {
    width: 60,
    height: 60,
  },
});

export default withNavigation(ExitButton);
