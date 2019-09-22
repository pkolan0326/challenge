import React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar} from './avatar';
import {Bio} from './bio';

import {Box, Text} from '@fabulas/astly';

export function UserListItem(props) {
  return (
    <Box style={styles.root}>
      <Box style={styles.left}>
        <Avatar img={props.profile_image.large} {...props} />
      </Box>
      <Box styles={styles.right}>
        <Bio {...props} />
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(128,128,128,0.5)',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 3.27,
    elevation: 10,
  },

  left: {
    marginRight: 20,
  },
  right: {
    justifyContent: 'center',
  },
});
