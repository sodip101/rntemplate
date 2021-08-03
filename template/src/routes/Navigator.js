import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { useSelector } from 'react-redux';

import DrawerNav from './DrawerNav';

export default function Navigator() {
  const darkTheme = useSelector(state => state.theme.darkTheme);

  return (
    <NavigationContainer theme={darkTheme ? DarkTheme : DefaultTheme}>
      <DrawerNav />
    </NavigationContainer>
  );
}
