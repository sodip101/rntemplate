import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import SearchBar from '../components/searchBar';
import SearchCurrent from '../components/currentWeather';
import SearchWeekly from '../components/weeklyWeather';
import Loading from '../components/loading';
import InitialMessage from '../components/searchInitial';
import ConfirmModal from '../components/confirmModal';

export default function Search({ navigation }) {
  const weatherData = useSelector(state => state.weather.currentCityInfo);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={styles.root}>
        <SearchBar navigation={navigation} />

        {weatherData === null ? (
          <InitialMessage />
        ) : weatherData.cod === '404' ? (
          <Loading message={weatherData.message} />
        ) : (
          <>
            <SearchCurrent
              setModalVisible={setModalVisible}
              weatherInfo={weatherData}
            />

            <SearchWeekly weatherData={weatherData.daily} />

            <ConfirmModal
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              cityName={weatherData.city}
            />
          </>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  initial: {
    flex: 1,
    justifyContent: 'center',
  },
  initialText: {
    fontSize: 16,
  },
});
