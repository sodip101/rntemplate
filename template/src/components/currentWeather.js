/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

export default function SearchResult({ weatherInfo, setModalVisible = null }) {
  const darkTheme = useSelector(state => state.theme.darkTheme);
  const isAddToHomeEnabled = useSelector(
    state => state.featureFlags.add_to_home_enabled,
  );

  return (
    <>
      <View style={styles.currentWeather}>
        <Text style={{ fontSize: 20, color: darkTheme ? 'white' : 'black' }}>
          {weatherInfo.city.toUpperCase()}
        </Text>

        <Text style={{ fontSize: 20, color: darkTheme ? 'white' : 'black' }}>
          {weatherInfo.current.temp}&deg;C
        </Text>

        <Image
          style={styles.currentImg}
          source={{ uri: weatherInfo.current.icon }}
        />

        <Text style={{ fontSize: 16, color: darkTheme ? 'white' : 'black' }}>
          {weatherInfo.current.description.toUpperCase()}
        </Text>
        {isAddToHomeEnabled ? (
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.addBtn}>
            <Icon name="playlist-add" color="#00B0FF" size={32} />
          </TouchableOpacity>
        ) : null}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  currentWeather: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 200,
    marginTop: 16,
  },
  currentImg: {
    height: 70,
    width: 70,
  },
  addBtn: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 16,
  },
});
