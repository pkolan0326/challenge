import React from 'react';
import {TouchableOpacity, StyleSheet, Image, Dimensions} from 'react-native';
import {Text} from '@fabulas/astly';
import {connect} from 'react-redux';
import FallBack from '../components';

const {width} = Dimensions.get('window');

const PhotoGrid = props => {
  const {photos} = props;

  function renderPhoto(photo, index) {
    return photo ? (
      <TouchableOpacity
        key={photo.id}
        onPress={() => props.navigation.navigate('Pics', {photos, index})}>
        <Image style={styles.image} source={{uri: photo.urls.thumb}} />
      </TouchableOpacity>
    ) : null;
  }

  function renderFallback() {
    return (
      <FallBack>
        <Text>Oh no! This user has no photos!</Text>
      </FallBack>
    );
  }

  return photos.length > 0 ? photos.map(renderPhoto) : renderFallback();
};

const styles = StyleSheet.create({
  image: {
    height: width / 3,
    width: width / 3,
  },
});

const mapStateToProps = (state, ownProps) => {
  const {userPhotos} = ownProps;
  return {
    photos: userPhotos.map(photo => state.unsplash.entities.photo[photo]),
  };
};

export default connect(mapStateToProps)(PhotoGrid);
