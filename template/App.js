import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SplashScreen from 'react-native-bootsplash';
import NetInfo from '@react-native-community/netinfo';

import { getDefaultWeather } from './src/redux/weather';
import { remoteConfigFirebase } from './src/redux/featureFlags';

import Navigator from './src/routes/Navigator';
import Disconnected from './src/screens/disconnected';
import Maintenance from './src/screens/maintenance';

export default function App() {
  //hide splash screen
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 500);
  }, []);

  //maintenace flag
  const isUnderMaintenance = useSelector(
    state => state.featureFlags.is_under_maintenance,
  );

  //Check connection
  const [isConnected, setConnected] = useState(true);
  useEffect(() => {
    NetInfo.addEventListener(state => {
      if (state.isConnected !== isConnected) {
        setConnected(state.isConnected);
      }
    });
  }, [isConnected]);

  //fetch default cities data
  const dispatch = useDispatch();
  const defaultCitiesNames = useSelector(
    state => state.weather.defaultCitiesNames,
  );
  useEffect(() => {
    if (isConnected) {
      dispatch(getDefaultWeather(defaultCitiesNames));
    }
  }, [defaultCitiesNames, dispatch, isConnected]);

  //fetch feature flags
  useEffect(() => {
    if (isConnected) {
      dispatch(remoteConfigFirebase());
    }
  });

  return !isConnected ? (
    <Disconnected />
  ) : isUnderMaintenance ? (
    <Maintenance />
  ) : (
    <Navigator />
  );
}
