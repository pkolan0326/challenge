import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Text} from '@fabulas/astly';

export const FallBack = props => (
  <Box style={styles.root}>
    <Text style={styles.text}>{props.children}</Text>
  </Box>
);

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  text: {
    fontSize: 16,
  },
});
