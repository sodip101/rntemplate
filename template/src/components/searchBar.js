import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';

import { getWeather } from '../redux/weather';

export default function SearchBar({ navigation }) {
  const dispatch = useDispatch();

  function search(e) {
    const searchText = e.nativeEvent.text;
    if (searchText !== '') {
      dispatch(getWeather(searchText));
    }
  }

  return (
    <>
      <View style={styles.searchBar}>
        <Icon name="search" size={25} color="white" />

        <TextInput
          style={styles.searchInput}
          placeholderTextColor="white"
          placeholder="Enter city name..."
          onSubmitEditing={search}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    width: '92%',
    flexDirection: 'row',
    backgroundColor: '#00B0FF',
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  searchInput: {
    width: '85%',
    color: 'white',
    fontSize: 16,
    paddingLeft: 10,
  },
});
