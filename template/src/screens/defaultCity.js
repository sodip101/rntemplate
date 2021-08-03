import React from 'react';
import { View, StyleSheet } from 'react-native';

import Current from '../components/currentWeather';
import Weekly from '../components/weeklyWeather';

export default function DefaultCity({ route }) {
  return (
    <View style={styles.root}>
      <Current weatherInfo={route.params.weatherData} showAddBtn={false} />
      <Weekly weatherData={route.params.weatherData.daily} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
});
