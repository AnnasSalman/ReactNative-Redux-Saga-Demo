import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ListItem = props => {
  return (
    <View style={styles.container}>
      <Text>{props.user.name}</Text>
      <Text>{props.user.company.name}</Text>
      <Text>{props.user.company.catchPhrase}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
});

export default ListItem;
