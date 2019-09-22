import React from 'react';
import {Box, Text} from '@fabulas/astly';
import {Avatar} from '../components/avatar';
import {StyleSheet} from 'react-native';
import PhotoGrid from '../components/photogrid';

export function DetailsScreen(props) {
  const [user, setUser] = React.useState(null);
  const {params} = props.navigation.state;

  React.useEffect(() => {
    setUser(params);
  }, [params]);

  function getUserPhoto(user) {
    const {profile_image} = user;
    if (profile_image) {
      const {large} = profile_image;
      return large;
    }
  }

  return user ? (
    <Box style={styles.root}>
      <Box style={styles.header}>
        <Box>
          <Avatar img={getUserPhoto(user)} style={{height: 120, width: 120}} />
        </Box>
        <Box style={styles.bio}>
          <Text fontSize={24}>{user.name}</Text>
        </Box>
      </Box>
      <Box style={styles.grid}>
        <PhotoGrid userPhotos={user.photos} {...props} />
      </Box>
    </Box>
  ) : null;
}

const styles = StyleSheet.create({
  root: {
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(128,128,128,0.5)',
  },
  bio: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    flexGrow: 1,
    flexDirection: 'row',
  },
});
