import React from 'react';
import {TouchableOpacity, FlatList} from 'react-native';
import {Box} from '@fabulas/astly';
import {connect} from 'react-redux';
import {getData} from '../store/redux/unsplashed/actions';
import {SearchInput, FallBack, UserListItem} from '../components';

export function HomeScreen(props) {
  const [userQuery, setUserQuery] = React.useState('');
  const [page, setPagination] = React.useState(1);

  React.useEffect(() => {
    props.getData({query: userQuery, page, per_page: 50});
  }, [userQuery, page]);

  return (
    <Box>
      <Box>
        <SearchInput
          value={userQuery}
          onChangeText={text => setUserQuery(text)}
          placeholder="Search for users..."
        />
      </Box>
      <Box
        as={FlatList}
        ListEmptyComponent={() => (
          <Box>
            <FallBack>No results.</FallBack>
          </Box>
        )}
        extraData={props}
        data={props.result}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => props.navigation.push('Details', props.users[item])}>
            <UserListItem key={item} {...props.users[item]} />
          </TouchableOpacity>
        )}
      />
    </Box>
  );
}

HomeScreen.navigationOptions = {
  headerTitle: 'Search',
};

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.unsplash.entities.user || null,
    result: state.unsplash.result,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getData: args =>
      dispatch(
        getData({type: 'UNSPLASH/REQUEST', payload: {...args}, meta: {}}),
      ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
