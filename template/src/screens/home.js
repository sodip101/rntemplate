import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import DefaultCities from '../components/defaultCities';
import Loading from '../components/loading';

export default function Home({ navigation }) {
  const defaultCitiesData = useSelector(
    state => state.weather.defaultCitiesData,
  );

  //exception handling
  const error = useSelector(state => state.weather.error);
  const loading = useSelector(state => state.weather.loading);
  if (loading) {
    //fetching message
    return <Loading message="Featching Data" />;
  } else if (error !== (null && '' && undefined)) {
    //error message
    return <Loading message={error ? error : 'An Error Occurred'} />;
  }

  return (
    <>
      <View style={styles.root}>
        <DefaultCities
          defaultCitiesData={defaultCitiesData}
          navigation={navigation}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  menu: {
    width: '92%',
    paddingTop: 7,
  },
});
