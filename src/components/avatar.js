import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Box} from '@fabulas/astly';

export const Avatar = props => {
  const {img} = props;

  return (
    <Box style={[styles.root, props.style]}>
      <Image
        style={[styles.avatar, props.style]}
        resizeMode="cover"
        source={{uri: img}}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#000',
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 50,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  avatar: {
    borderRadius: 50,
    overflow: 'hidden',
    width: 60,
    height: 60,
  },
});
