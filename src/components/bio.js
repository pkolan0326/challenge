import React from 'react';
import {Box, Text} from '@fabulas/astly';
import {StyleSheet, View} from 'react-native';

export const Bio = props => {
  return (
    <Box style={styles.root}>
      <Text style={styles.text}>{props.name}</Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
