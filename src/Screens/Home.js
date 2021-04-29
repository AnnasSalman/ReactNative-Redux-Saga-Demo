import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getUsers} from '../redux/actions/users';
import ListItem from '../components/ListItem';

const Home = props => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const loading = useSelector(state => state.users.Loading);
  const error = useSelector(state => state.users.error);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const renderItem = ({item}) => <ListItem user={item} />;

  return (
    <View style={styles.container}>
      {users.length > 0 && (
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
      {error && !loading && <Text>Error fetching users</Text>}
      {users.length === 0 && !loading && <Text>NO USERS AVAILABLE</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
