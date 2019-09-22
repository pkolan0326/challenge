import React from 'react';
import {Box, Text} from '@fabulas/astly';
import {StyleSheet, Image, Dimensions} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
const {width} = Dimensions.get('window');

export function PicsScreen(props) {
  const {navigation} = props;
  const {
    state: {params},
  } = navigation;
  const {photos} = params;

  return (
    <Box
      style={{width}}
      as={FlatList}
      data={photos}
      initialScrollIndex={params.index}
      getItemLayout={(data, index) => ({
        length: width,
        offset: width * index,
        index,
      })}
      horizontal={true}
      renderItem={({item}, index) => {
        console.log('item', item);
        return (
          <Box style={styles.image}>
            <Image source={{url: item.urls.full}} style={styles.image} />
          </Box>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: width,
  },
});
