/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StackNav from './StackNav';
import Settings from '../screens/settings';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator drawerStyle={{ paddingTop: 50 }}>
      <Drawer.Screen
        name="Home"
        component={StackNav}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon name="home" color={focused ? '#00B0FF' : 'gray'} size={32} />
          ),
          drawerLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#00B0FF' : 'gray' }}>Home</Text>
          ),
        }}
      />

      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              name="settings"
              color={focused ? '#00B0FF' : 'gray'}
              size={32}
            />
          ),
          drawerLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#00B0FF' : 'gray' }}>
              Settings
            </Text>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
