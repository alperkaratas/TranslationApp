import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';

const BackButton = ({goBack}) => (
  <TouchableOpacity onPress={goBack} style={styles.container}>
    <Image style={styles.image} source={require('../assets/backk.png')} />
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 13,
    left: 25,
  },
  image: {
    width: 30,
    height: 27,
  },
});

export default withNavigation(BackButton);
