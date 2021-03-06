import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

// eslint-disable-next-line no-undef
export default (voiceText = props => {
  return (
    <TextInput
      style={styles.wordTextInput}
      placeholder="Enter a word to translate.."
      onChangeText={props.onVioceChange}
    />
  );
});

const styles = StyleSheet.create({
  wordTextInput: {
    padding: 10,
    fontSize: 18,
    marginTop: 5,
    textAlign: 'center',
  },
});
